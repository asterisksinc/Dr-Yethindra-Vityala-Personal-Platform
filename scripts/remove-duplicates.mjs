import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rvleyzlrzxdkgfyqrvzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY"
);

const PAGE_SLUG = "research-publications";
const REMOVE_INDICES = [36, 42];

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
  console.log(`Before: ${items.length} items`);

  const removed = REMOVE_INDICES.map(i => items[i]?.title?.substring(0, 60));
  const filtered = items.filter((_, i) => !REMOVE_INDICES.includes(i));

  const { error: updateError } = await supabase
    .from("cms_pages")
    .update({ content: { ...data.content, items: filtered } })
    .eq("page_slug", PAGE_SLUG);

  if (updateError) {
    console.error("Update error:", updateError.message);
    return;
  }

  console.log(`Removed ${REMOVE_INDICES.length} items:`);
  removed.forEach(t => console.log(`  - ${t}`));
  console.log(`After: ${filtered.length} items`);
}

main();
