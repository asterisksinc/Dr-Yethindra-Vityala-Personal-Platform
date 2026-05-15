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

  const gi = data.content.awards[13];
  // or find by title
  const longestTitle = data.content.awards.find((a) =>
    a.title.toLowerCase().includes("longest title")
  );
  console.log("Found:", longestTitle.title);
  console.log("Images (" + longestTitle.images.length + "):");
  longestTitle.images.forEach((img, i) => console.log("  " + i + ": " + img));
}

main();
