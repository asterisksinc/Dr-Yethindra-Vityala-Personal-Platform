import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const ICONS_DIR = join(process.cwd(), "public", "icons");
const OUTPUT_SIZE = 96;

async function processIcon(inputPath, outputPath) {
  const buf = await sharp(inputPath)
    .resize(OUTPUT_SIZE, OUTPUT_SIZE, { kernel: "cubic" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = buf;
  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  const bgThreshold = 220;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

      let edgeDist = Math.min(x, y, width - 1 - x, height - 1 - y);
      let isEdgeRegion = edgeDist <= 3;

      if ((brightness > 0.86 && a > 180) || a < 30) {
        out[i] = 0;
        out[i + 1] = 0;
        out[i + 2] = 0;
        out[i + 3] = 0;
      } else if (isEdgeRegion && brightness > 0.7 && a > 100) {
        out[i] = 0;
        out[i + 1] = 0;
        out[i + 2] = 0;
        out[i + 3] = 0;
      } else {
        const opacity = a / 255;
        out[i] = 0;
        out[i + 1] = 0;
        out[i + 2] = 0;
        out[i + 3] = Math.round(Math.min(255, opacity * 255));
      }
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 6 })
    .toFile(outputPath);
}

async function main() {
  const files = (await readdir(ICONS_DIR)).filter(
    (f) => f.startsWith("H -") && f.endsWith(".png")
  );

  console.log(`Processing ${files.length} icons...\n`);

  for (const f of files) {
    const fullPath = join(ICONS_DIR, f);
    try {
      await processIcon(fullPath, fullPath);
      console.log(`Done: ${f}`);
    } catch (err) {
      console.error(`Error: ${f}:`, err.message);
    }
  }

  console.log("\nAll icons converted to black on transparent background (96x96).");
}

main();