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

  const awards = data.content.awards;
  for (let i = 0; i < awards.length; i++) {
    const a = awards[i];
    console.log(i + ': "' + a.imageUrl + '"');
  }
}

main();
