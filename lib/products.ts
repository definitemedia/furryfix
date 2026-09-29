export type ProductStatus = "available" | "upcoming";

export type Product = {
  slug: string;
  name: string;
  /** Pack size shown on every product card, e.g. "300 mL". */
  size: string;
  status: ProductStatus;
  /** Exact Amazon product page (/dp/ or /gp/product/). Leave null until the real listing is known. */
  amazonUrl: string | null;
  /** Candidate files under /public, first existing one wins. Empty means no official image yet. */
  images: readonly string[];
  featured?: boolean;
};

export const products: readonly Product[] = [
  {
    slug: "shed-control-shampoo",
    name: "FurryFix Shed Control 2-in-1 Conditioning Shampoo",
    size: "300 mL",
    status: "available",
    // Set NEXT_PUBLIC_AMAZON_PRODUCT_URL to the real /dp/ listing. Until then the Buy button stays disabled.
    amazonUrl: process.env.NEXT_PUBLIC_AMAZON_PRODUCT_URL || null,
    images: [
      "products/Shed Control/01.png",
      "products/shed-control-shampoo.png",
      "products/shed-control-shampoo.webp",
      "products/furryfix-shampoo.png",
      "products/furryfix-shampoo.webp",
      "hero/shampoo-bottle.png",
      "hero/shampoo-bottle.webp",
    ],
    featured: true,
  },
  // Upcoming products show the placeholder until official packaging is dropped into public/products.
  {
    slug: "flea-tick-shield-shampoo",
    name: "FurryFix Flea & Tick Shield 2-in-1 Conditioning Shampoo",
    size: "300 mL",
    status: "upcoming",
    amazonUrl: null,
    images: ["products/flea-tick-shield-shampoo.png", "products/flea-tick-shield-shampoo.webp"],
  },
  {
    slug: "shed-control-pro-care-shampoo",
    name: "FurryFix Shed Control Pro Care 2-in-1 Conditioning Shampoo",
    size: "300 mL",
    status: "upcoming",
    amazonUrl: null,
    images: ["products/shed-control-pro-care-shampoo.png", "products/shed-control-pro-care-shampoo.webp"],
  },
  {
    slug: "pure-coat-shampoo",
    name: "FurryFix Pure Coat 2-in-1 Conditioning Shampoo",
    size: "300 mL",
    status: "upcoming",
    amazonUrl: null,
    images: ["products/pure-coat-shampoo.png", "products/pure-coat-shampoo.webp"],
  },
];

export const featuredProduct: Product = products.find((product) => product.featured) ?? products[0];

const amazonHost = /(^|\.)amazon\.[a-z.]+$/i;
const amazonShortHost = /^(amzn\.to|amzn\.in|amzn\.eu)$/i;
const productPath = /\/(dp|gp\/product)\/[A-Z0-9]{10}(?=[/?]|$)/i;

/** True only for real product listings, never for search (/s?k=) or placeholder links. */
export function isAmazonProductUrl(url: string | null | undefined): url is string {
  if (!url) return false;

  try {
    const { hostname, pathname, protocol } = new URL(url);
    if (protocol !== "https:") return false;
    if (amazonShortHost.test(hostname)) return pathname.length > 1;
    return amazonHost.test(hostname) && productPath.test(pathname);
  } catch {
    return false;
  }
}

export const featuredAmazonUrl: string | null = isAmazonProductUrl(featuredProduct.amazonUrl)
  ? featuredProduct.amazonUrl
  : null;
