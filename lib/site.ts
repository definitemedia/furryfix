/**
 * Replace this with the exact Amazon product URL when it is available.
 * The search link is only a placeholder so the button still opens Amazon.
 */
export const amazonProductUrl =
  process.env.NEXT_PUBLIC_AMAZON_PRODUCT_URL ??
  "https://www.amazon.in/s?k=FurryFix+Shed+Control+2-in-1+Conditioning+Shampoo+300+ml";

/** Scrolls to the product section once that section uses id="product". */
export const exploreHref = "#product";
