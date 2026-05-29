import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../src/assets/logo.PNG");
const output = path.join(__dirname, "../src/assets/logo-nav.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const threshold = 28;
let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a > 10 && (r > threshold || g > threshold || b > threshold)) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
}

const pad = 6;
const left = Math.max(0, minX - pad);
const top = Math.max(0, minY - pad);
const cropWidth = Math.min(width - left, maxX - minX + 1 + pad * 2);
const cropHeight = Math.min(height - top, maxY - minY + 1 + pad * 2);

await sharp(input)
  .extract({ left, top, width: cropWidth, height: cropHeight })
  .png()
  .toFile(output);

console.log(`Trimmed ${width}x${height} -> ${cropWidth}x${cropHeight}`);
console.log(`Saved ${output}`);
