import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { createClient } from "@supabase/supabase-js";
import { join, parse } from "path";

const HONORS_DIR = "C:\\temporary projects\\yethindra\\honors";
const PUBLIC_DIR = join(process.cwd(), "public", "awards-certificates");

const supabase = createClient(
  "https://rvleyzlrzxdkgfyqrvzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY"
);

const imageMap = {
  "International Distinguished Young Researcher": "International Distinguished Young Researcher, 2020.png",
  "Mahatma Gandhi National Award": "Mahatma Gandhi National Award, 2020.png",
  "Ambassador of Peace": "Ambassador of Peace.png",
  "Honorary Doctorate (Doctor of Science)": "Receiving honorary doctorate from Dr. Stalbek M. Akhunbaev.png",
  "Karmaveer Chakra Award": "Karmaveer Chakra Award from Prof. Mamatov, 2021.png",
  "Champion of the Champions (MedEngage Award)": "Champion of the Champions (MedEngage Award).png",
  "Global Under 30 Leadership Summit (Winner)": "Global Under 30 Leadership Summit (Winner).png",
  "Dr. Yellapragada Subbarao Memorial Award": "Dr. Yellapragada Subbarao Memorial Award.png",
  "50 Aspiring Authors & Researchers (Winner)": "50 Aspiring Authors & Researchers (Winner).png",
  "International Physician-Scientist of the Year": "International Physician-Scientist of the Year.png",
  "Best Poster Award & Best Presenter Award (ASCO Direct GI 2026)": "Best Poster Award & Best Presenter Award.png",
  "Longest title of a book, Guinness World Records, 2020": "With Vaddiraju Ravichandra, MP Rajyasabha.png",
  "Longest title of a book": "Guinness World Record certificate for Longest Title of a Book.png",
  "World's Youngest Scientist in Medicine": "World_s Youngest Scientist in Medicine.png",
};

const joelDavisSource = "Appreciation from Shri D. Joel Davis garu, IPS, Jt. Commissioner of Police, Traffic, Hyderabad City";

async function convertToWebp(inputPath, outputPath, maxWidth = 600) {
  const img = sharp(inputPath);
  const meta = await img.metadata();
  const width = meta.width ? Math.min(meta.width, maxWidth) : maxWidth;

  await sharp(inputPath)
    .resize(width, undefined, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 75, effort: 4 })
    .toFile(outputPath);
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  const files = await readdir(HONORS_DIR);
  const pngFiles = files.filter(f => f.toLowerCase().endsWith(".png"));

  console.log("Converting " + pngFiles.length + " honors images to WebP...\n");

  for (const file of pngFiles) {
    const inputPath = join(HONORS_DIR, file);
    const webpName = parse(file).name + ".webp";
    const outputPath = join(PUBLIC_DIR, webpName);

    const sizeBefore = (await stat(inputPath)).size;
    await convertToWebp(inputPath, outputPath);
    const sizeAfter = (await stat(outputPath)).size;

    console.log(file);
    console.log("  " + (sizeBefore / 1024).toFixed(0) + "KB -> " + (sizeAfter / 1024).toFixed(0) + "KB (" + Math.round((1 - sizeAfter / sizeBefore) * 100) + "% smaller)");
  }

  console.log("\nAll images converted to WebP!\n");

  const { data, error } = await supabase
    .from("cms_pages")
    .select("*")
    .eq("page_slug", "awards-records")
    .single();

  if (error || !data) {
    console.error("CMS fetch error:", error?.message || "No data");
    return;
  }

  const items = data.content.awards || [];
  let updated = 0;

  for (let i = 0; i < items.length; i++) {
    const award = items[i];

    if (imageMap[award.title]) {
      const pngFile = imageMap[award.title];
      const webpName = parse(pngFile).name + ".webp";
      award.imageUrl = "/awards-certificates/" + webpName;
      updated++;
      console.log("Item " + i + ": \"" + award.title.substring(0, 50) + "...\" -> " + webpName);
    }

    if (award.title === "Longest title of a book, Guinness World Records, 2020" && award.source === joelDavisSource) {
      award.imageUrl = "/awards-certificates/With Joel Davis IPS.webp";
      console.log("  Override for Joel Davis: With Joel Davis IPS.webp");
    }
  }

  const { error: updateError } = await supabase
    .from("cms_pages")
    .update({ content: { ...data.content, awards: items } })
    .eq("page_slug", "awards-records");

  if (updateError) {
    console.error("CMS update error:", updateError.message);
    return;
  }

  console.log("\nCMS updated! " + updated + " awards got images.");
}

main();
