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
      return `/${candidate}`;
    }
  }

  return null;
}

export const logoSrc = publicAsset([
  "brand/furryfix-logo.svg",
  "brand/furryfix-logo.png",
  "brand/furryfix-logo.webp",
  "brand/logo.svg",
  "brand/logo.png",
  "brand/logo.webp",
]);

export const bottleSrc = publicAsset([
  "products/shed-control-shampoo.png",
  "products/shed-control-shampoo.webp",
  "products/furryfix-shampoo.png",
  "products/furryfix-shampoo.webp",
  "hero/shampoo-bottle.png",
  "hero/shampoo-bottle.webp",
]);
