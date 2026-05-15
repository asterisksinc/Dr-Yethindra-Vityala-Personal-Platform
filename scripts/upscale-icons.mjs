import sharp from "sharp";
import { readdir, mkdir, copyFile } from "fs/promises";
import { join, basename } from "path";

const ICONS_DIR = join(process.cwd(), "public", "icons");
const BACKUP_DIR = join(ICONS_DIR, "backup");
const OUTPUT_SIZE = 128;

const worldRecordFiles = [
  "H - 12-Time World Record Holder.png",
  "A&R - World_s Youngest Scientist in Medicine.png",
  "A&R - Fastest Research Study Accomplished in the World.png",
  "A&R - First person in the world to complete 20 medical courses at 10 universities in 9 days.png",
  "A&R - Youngest person to write a trilingual book.png",
  "A&R - Most Medical Related Certificates Received in 9 Days.png",
  "A&R - Component Logo.png",
];

async function main() {
  await mkdir(BACKUP_DIR, { recursive: true });
  console.log("Backup directory ready\n");

  for (const file of worldRecordFiles) {
    const src = join(ICONS_DIR, file);
    const backupDest = join(BACKUP_DIR, file);

    try {
      await copyFile(src, backupDest);
      console.log(`Backed up: ${file}`);
    } catch {
      console.log(`Skipping backup (not found): ${file}`);
      continue;
    }

    const buf = await sharp(src)
      .resize(OUTPUT_SIZE, OUTPUT_SIZE, { kernel: "lanczos3", fit: "contain" })
      .png({ compressionLevel: 6 })
      .toBuffer();

    await sharp(buf).toFile(src);
    console.log(`Upscaled: ${file} (24x24 -> ${OUTPUT_SIZE}x${OUTPUT_SIZE})`);
  }

  console.log("\nDone! Originals backed up in public/icons/backup/");
}

main();