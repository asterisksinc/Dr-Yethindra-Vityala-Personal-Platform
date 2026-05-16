const fs = require('fs');
const path = require('path');
const os = require('os');
const sharp = require('sharp');
const potrace = require('potrace');

const ICONS_DIR = path.join(
  __dirname, '..',
  'public', 'icons', 'Simple Typography Minimalist Art Gallery Brand Logo (2)'
);

const OUTPUT_SIZE = 512;

function removeWhiteRect(svg) {
  const rectRegex = /<rect[^>]*\bfill\s*=\s*["'](?:white|#fff(?:fff)?|#ffffff)["'][^>]*\/?>/gi;
  return svg.replace(rectRegex, '');
}

function addFillToPaths(svg) {
  return svg.replace(/<path\b(?!([^>]*\bfill\s*=))/gi, '<path fill="#000000" ');
}

async function convertPngToSvg(pngPath) {
  const basename = path.basename(pngPath, '.png');
  const svgPath = path.join(path.dirname(pngPath), `${basename}.svg`);

  try {
    const { data, info } = await sharp(pngPath)
      .resize(OUTPUT_SIZE, OUTPUT_SIZE, { fit: 'inside', withoutEnlargement: true })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height } = info;
    const pixelCount = width * height;
    const bwPixels = Buffer.alloc(pixelCount);

    for (let i = 0; i < pixelCount; i++) {
      const idx = i * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      if (a < 128 || lum > 160) {
        bwPixels[i] = 255;
      } else {
        bwPixels[i] = 0;
      }
    }

    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'icon-conv-'));
    const tmpPng = path.join(tmpDir, `${basename}.png`);

    await sharp(bwPixels, {
      raw: { width, height, channels: 1 }
    })
      .png()
      .toFile(tmpPng);

    const svg = await new Promise((resolve, reject) => {
      const instance = new potrace.Potrace({
        blackOnWhite: true,
        optCurve: true,
        turdSize: 2,
        threshold: 128,
        optTolerance: 0.2,
        color: '#000000',
        background: 'transparent'
      });
      instance.loadImage(tmpPng, function (err) {
        if (err) return reject(err);
        resolve(this.getSVG());
      });
    });

    fs.rmSync(tmpDir, { recursive: true, force: true });

    let cleaned = removeWhiteRect(svg);
    cleaned = addFillToPaths(cleaned);
    fs.writeFileSync(svgPath, cleaned, 'utf-8');
    return { success: true, file: basename };
  } catch (err) {
    return { success: false, file: basename, error: err.message };
  }
}

async function main() {
  if (!fs.existsSync(ICONS_DIR)) {
    console.error(`Directory not found: ${ICONS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(ICONS_DIR)
    .filter(f => f.toLowerCase().endsWith('.png'))
    .sort();

  if (files.length === 0) {
    console.log('No PNG files found.');
    return;
  }

  console.log(`Found ${files.length} PNG file(s) in:\n  ${ICONS_DIR}\n`);

  let successCount = 0;
  let failCount = 0;

  for (const file of files) {
    const pngPath = path.join(ICONS_DIR, file);
    const result = await convertPngToSvg(pngPath);

    if (result.success) {
      console.log(`  ✓ ${result.file}.svg`);
      successCount++;
    } else {
      console.error(`  ✗ ${result.file}.svg — ${result.error}`);
      failCount++;
    }
  }

  console.log(`\nDone. ${successCount} succeeded, ${failCount} failed.`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
