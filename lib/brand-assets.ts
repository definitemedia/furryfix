import fs from "node:fs";
import path from "node:path";

/**
 * Resolves the first existing file under /public.
 * Drop the official logo in public/brand and the shampoo bottle in public/products.
 */
export function publicAsset(candidates: readonly string[]): string | null {
  for (const candidate of candidates) {
    const filePath = path.join(process.cwd(), "public", candidate);
    if (fs.existsSync(filePath)) {
      return encodeURI(`/${candidate}`);
    }
  }

  return null;
}

const IMAGE_EXTENSIONS = new Set([".png", ".webp", ".jpg", ".jpeg"]);

/**
 * Lists image files in a folder under /public, sorted by filename (01, 02, 03…).
 * Read at request time so files dropped into the folder appear after a refresh.
 */
export function publicImagesIn(dir: string): { src: string; file: string }[] {
  const dirPath = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({ src: encodeURI(`/${dir}/${file}`), file }));
}

export const logoSrc = publicAsset([
  "brand/furryfix-logo.svg",
  "brand/furryfix-logo.png",
  "brand/furryfix-logo.webp",
  "brand/logo.svg",
  "brand/logo.png",
  "brand/logo.webp",
  "brand/FurryFix Logo.png",
]);

export const bottleSrc = publicAsset([
  "products/shed-control-shampoo.png",
  "products/shed-control-shampoo.webp",
  "products/furryfix-shampoo.png",
  "products/furryfix-shampoo.webp",
  "hero/shampoo-bottle.png",
  "hero/shampoo-bottle.webp",
]);
