import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rvleyzlrzxdkgfyqrvzy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY";

const supabase = createClient(supabaseUrl, supabaseKey);

const PAGE_SLUG = "research-publications";

const researchImages = [
  "Indian J Pharmacol.jpg",
  "IJRPS.jpg",
  "IJRPS.jpg",
  "IJRPS.jpg",
  "IJFMT.jpg",
  "IJFMT.jpg",
  "Biomedicine.png",
  "Clin Case Rep.png",
  "Clin Case Rep.png",
  "Clin Case Rep.png",
  "Biomedicine.png",
  "Indian J Pharmacol.jpg",
  "Biomedicine.png",
  "Am Heart J.jpg",
  "Indian J Lepr.png",
  "Clin Case Rep.png",
  "EJCEM.jpg",
  "Biomedicine.png",
  "Metabolism.jpg",
  "Biomedicine.png",
  "Indian J Pharmacol.jpg",
  "Arch Breast Cancer.jpg",
  "JoCD.jpg",
  "",
  "Indian J Pharmacol.jpg",
  "JoCD.jpg",
  "Clin Case Rep.png",
  "IJGO.webp",
  "Metabolism.jpg",
  "EJCEM.jpg",
  "Bladder.jpg",
  "EJCEM.jpg",
  "J Midlife Health.jpg",
  "J Clin of Diagn Res.jpg",
  "Am Heart J.jpg",
  "ENT Updates.jpg",
  "AJP.jpg",
  "TI.png",
  "ENT Updates.jpg",
  "Advanced Neurology.jpg",
  "Bladder.jpg",
  "TI.png",
  "Metabolism.jpg",
  "Am Heart J.jpg",
  "Indian J Pharmacol.jpg",
];

async function main() {
  console.log(`Fetching CMS record for "${PAGE_SLUG}"...`);
  const { data, error } = await supabase
    .from("cms_pages")
    .select("*")
    .eq("page_slug", PAGE_SLUG)
    .single();

  if (error || !data) {
    console.error("Error fetching CMS record:", error?.message || "No data");
    return;
  }

  const content = data.content || {};
  const items = Array.isArray(content.items) ? content.items : [];

  console.log(`Found ${items.length} items. Updating imageUrl...`);

  let updatedCount = 0;
  for (let i = 0; i < items.length; i++) {
    const imgFile = researchImages[i];
    if (imgFile) {
      const encodedFile = imgFile.replace(/ /g, "%20");
      items[i].imageUrl = `/Research/${encodedFile}`;
      updatedCount++;
    }
  }

  content.items = items;

  const { error: updateError } = await supabase
    .from("cms_pages")
    .update({ content })
    .eq("page_slug", PAGE_SLUG);

  if (updateError) {
    console.error("Error updating CMS record:", updateError.message);
    return;
  }

  console.log(`Done! Updated ${updatedCount} items with image URLs.`);
}

main();
