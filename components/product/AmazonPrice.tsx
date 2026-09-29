import shedControl from "@/lib/shed-control-price.json";

/** Snapshot of the public Amazon listing. Only strings that were present in the fetched HTML. */
type AmazonPriceSnapshot = {
  source: string;
  fetchedAt: string;
  price: string | null;
  mrp: string | null;
  savings: string | null;
};

const snapshots: Record<string, AmazonPriceSnapshot> = {
  "shed-control-shampoo": shedControl,
};

type AmazonPriceProps = {
  slug: string;
  amazonUrl: string | null;
};

export default function AmazonPrice({ slug, amazonUrl }: AmazonPriceProps) {
  const snapshot = snapshots[slug] ?? null;

  if (!snapshot?.price) {
    return amazonUrl ? (
      <p className="mt-2 text-base text-body">
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-navy underline underline-offset-4 hover:text-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
        >
          Price is shown on Amazon
        </a>
      </p>
    ) : null;
  }

  const mrp = snapshot.mrp && snapshot.mrp !== snapshot.price ? snapshot.mrp : null;

  return (
    <div className="mt-3">
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-secondary">Amazon price</span>
        <span className="text-2xl font-extrabold tracking-[-0.02em] text-navy">{snapshot.price}</span>
        {mrp ? (
          <span className="text-sm text-secondary">
            M.R.P. <s>{mrp}</s>
          </span>
        ) : null}
        {mrp && snapshot.savings ? (
          <span className="text-sm font-semibold text-turquoise-hover">{snapshot.savings}</span>
        ) : null}
      </p>
      <p className="mt-1 text-xs text-secondary">
        As listed on Amazon.in on {snapshot.fetchedAt}. Current price may differ.
      </p>
    </div>
  );
}
