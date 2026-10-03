import fs from "node:fs";
import path from "node:path";

/**
 * Percent-encode each segment the same way Next.js indexes public files.
 * encodeURI leaves "+" literal, and production then fails to match "A+" filenames.
 */
function encodePublicPath(relativePath: string): string {
  return `/${relativePath
    .split("/")
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

/**
 * Resolves the first existing file under /public.
 * Drop the official logo in public/brand and the shampoo bottle in public/products.
 */
export function publicAsset(candidates: readonly string[]): string | null {
  for (const candidate of candidates) {
    const filePath = path.join(process.cwd(), "public", ...candidate.split("/"));
    if (fs.existsSync(filePath)) {
      return encodePublicPath(candidate);
    }
  }

  return null;
}

const IMAGE_EXTENSIONS = new Set([".png", ".webp", ".jpg", ".jpeg"]);

/** Official A+ frames. Used only when a directory listing comes back empty. */
const KNOWN_PUBLIC_IMAGES: Record<string, readonly string[]> = {
  "products/Shed Control/a-plus": [
    "products/Shed Control/a-plus/Shed Control A+  (1).png",
    "products/Shed Control/a-plus/Shed Control A+  (2).png",
    "products/Shed Control/a-plus/Shed Control A+  (3).png",
    "products/Shed Control/a-plus/Shed Control A+  (4).png",
    "products/Shed Control/a-plus/Shed Control A+  (5).png",
    "products/Shed Control/a-plus/Shed Control A+  (6).png",
    "products/Shed Control/a-plus/Shed Control A+  (7).png",
  ],
};

function listImageFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function existingKnownImages(dir: string): string[] {
  const known = KNOWN_PUBLIC_IMAGES[dir];
  if (!known) return [];

  return known
    .filter((relativePath) => fs.existsSync(path.join(process.cwd(), "public", ...relativePath.split("/"))))
    .map((relativePath) => path.posix.basename(relativePath));
}

/**
 * Lists image files in a folder under /public, sorted by filename (01, 02, 03…).
 * Read at request time so files dropped into the folder appear after a refresh.
 */
export function publicImagesIn(dir: string): { src: string; file: string }[] {
  const normalizedDir = dir.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
  const dirPath = path.join(process.cwd(), "public", ...normalizedDir.split("/"));

  let files: string[] = [];
  try {
    files = listImageFiles(dirPath);
  } catch {
    files = [];
  }

  if (files.length === 0) {
    files = existingKnownImages(normalizedDir);
  }

  return files.map((file) => ({ src: encodePublicPath(`${normalizedDir}/${file}`), file }));
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
