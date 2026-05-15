import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rvleyzlrzxdkgfyqrvzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY"
);

const PAGE_SLUG = "research-publications";

const correctImages = {
  20: "",
  21: "Indian%20J%20Pharmacol.jpg",
  22: "Indian%20J%20Pharmacol.jpg",
  23: "Arch%20Breast%20Cancer.jpg",
  24: "JoCD.jpg",
  29: "Bladder.jpg",
  30: "EJCEM.jpg",
  31: "J%20Midlife%20Health.jpg",
  32: "J%20Clin%20of%20Diagn%20Res.jpg",
  33: "Am%20Heart%20J.jpg",
  34: "ENT%20Updates.jpg",
  35: "AJP.jpg",
};

async function main() {
  const { data, error } = await supabase
    .from("cms_pages")
    .select("*")
    .eq("page_slug", PAGE_SLUG)
    .single();

  if (error || !data) {
    console.error("Error:", error?.message || "No data");
    return;
  }

  const items = data.content.items;
  let count = 0;

  for (const [idx, imgFile] of Object.entries(correctImages)) {
    const i = parseInt(idx);
    if (items[i]) {
      items[i].imageUrl = imgFile ? `/Research/${imgFile}` : "";
      console.log(`Fixed item ${i}: ${items[i].title.substring(0, 50)}... -> ${imgFile || "(empty)"}`);
      count++;
    }
  }

  const { error: updateError } = await supabase
    .from("cms_pages")
    .update({ content: { ...data.content, items } })
    .eq("page_slug", PAGE_SLUG);

  if (updateError) {
    console.error("Update error:", updateError.message);
    return;
  }

  console.log(`\nFixed ${count} items.`);
}

main();
