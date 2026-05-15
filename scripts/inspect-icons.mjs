import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join } from "path";

const ICONS_DIR = join(process.cwd(), "public", "icons");

async function main() {
  const files = (await readdir(ICONS_DIR)).filter(
    (f) => f.startsWith("H -") && f.endsWith(".png")
  );

  for (const f of files) {
    const fullPath = join(ICONS_DIR, f);
    const meta = await sharp(fullPath).metadata();
    const size = (await stat(fullPath)).size;
    console.log(`${f}  ${meta.width}x${meta.height}  channels:${meta.channels}  ${size} bytes`);
  }
}

main();