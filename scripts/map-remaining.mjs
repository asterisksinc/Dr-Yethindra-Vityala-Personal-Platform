import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rvleyzlrzxdkgfyqrvzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY"
);

const remainingMap = {
  9: "Global Under 30 Leadership Summit.webp",
  16: "Vityala Yethindra with guinness world record for longest title of a book.webp",
  17: "World_s Youngest Scientist in Medicine(1).webp",
  18: "Receiving honorary doctorate from Prof. Indira Orozobaevna Kudaibergenova and Prof. Ziiabidin Aidarov.webp",
};

async function main() {
  const { data, error } = await supabase
    .from("cms_pages")
    .select("*")
    .eq("page_slug", "awards-records")
    .single();

  if (error || !data) {
    console.error("Error:", error?.message || "No data");
    return;
  }

  const items = data.content.awards || [];

  for (const [idx, imgFile] of Object.entries(remainingMap)) {
    const i = parseInt(idx);
    if (items[i]) {
      items[i].imageUrl = "/awards-certificates/" + imgFile;
      console.log(i + ": \"" + items[i].title.substring(0, 60) + "...\" -> " + imgFile);
    }
  }

  const { error: updateError } = await supabase
    .from("cms_pages")
    .update({ content: { ...data.content, awards: items } })
    .eq("page_slug", "awards-records");

  if (updateError) {
    console.error("Update error:", updateError.message);
    return;
  }

  console.log("\nDone! All 19 awards now have images.");
}

main();
