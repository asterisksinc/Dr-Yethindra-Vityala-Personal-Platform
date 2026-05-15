import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rvleyzlrzxdkgfyqrvzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY"
);

async function main() {
  const { data } = await supabase
    .from("cms_pages")
    .select("content")
    .eq("page_slug", "awards-records")
    .single();

  const items = data.content.awards;

  // Item 9: Nationwide Award — use a generic award image from filtered pool
  items[9].imageUrl = "/awards-certificates/With Vaddiraju Ravichandra, MP Rajyasabha.webp";

  const { error } = await supabase
    .from("cms_pages")
    .update({ content: { ...data.content, awards: items } })
    .eq("page_slug", "awards-records");

  if (error) {
    console.error("Update error:", error.message);
    return;
  }

  console.log("Done. Item 9 now uses the MP Rajyasabha award image.");
}

main();
