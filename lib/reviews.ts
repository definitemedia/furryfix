import shedControl from "./shed-control-reviews.json";

export type AmazonReview = {
  id: string;
  author: string | null;
  stars: string | null;
  title: string | null;
  date: string | null;
  verified: boolean;
  body: string | null;
  url: string;
};

/** Snapshot of the public Amazon listing. Only text that was present in the fetched HTML. */
export type AmazonReviewSnapshot = {
  source: string;
  fetchedAt: string;
  rating: string | null;
  ratingCount: string | null;
  reviews: AmazonReview[];
};

const snapshots: Record<string, AmazonReviewSnapshot> = {
  "shed-control-shampoo": shedControl,
};

export const amazonReviewSectionUrls: Record<string, string> = {
  "shed-control-shampoo":
    "https://www.amazon.in/Furryfix-Conditioner-Moisturizing-Anti-Hair-Fragrance/dp/B0DHLFZJT8/?th=1#customerReviews",
};

export function getAmazonReviews(slug: string): AmazonReviewSnapshot | null {
  return snapshots[slug] ?? null;
}

/** Reads the leading number from Amazon's "4.2 out of 5" style labels. */
export function ratingValue(label: string | null): number | null {
  const value = label ? Number.parseFloat(label) : Number.NaN;
  return Number.isFinite(value) ? value : null;
}
