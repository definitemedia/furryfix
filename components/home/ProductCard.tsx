import AmazonButton from "@/components/layout/AmazonButton";
import { isAmazonProductUrl, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  imageSrc: string | null;
};

function PawIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <circle cx="7.2" cy="8.2" r="1.7" />
      <circle cx="12" cy="6.4" r="1.7" />
      <circle cx="16.8" cy="8.2" r="1.7" />
      <circle cx="8.6" cy="12.2" r="1.55" />
      <path d="M12.1 11.2c2.15 0 3.9 1.7 3.9 3.85 0 2.35-1.9 4.15-4.15 4.15-1.7 0-3.15-.95-3.75-2.35-.35.25-.8.4-1.25.4-1.15 0-2.05-.95-2.05-2.15 0-1.55 1.35-2.7 3.15-2.9.85-.7 1.9-1 3.15-1Z" />
    </svg>
  );
}

function ProductVisual({ product, imageSrc }: ProductCardProps) {
  const label = product.size ? `${product.name}, ${product.size}` : product.name;

  if (imageSrc) {
    return (
      // Packaging must never be cropped or stretched, so the file keeps its intrinsic ratio.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={imageSrc} alt={label} loading="lazy" className="h-full w-full scale-110 object-contain" />
    );
  }

  if (product.status === "available") {
    return (
      <div
        role="img"
        aria-label={`Official image of ${label} not added yet`}
        className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-navy/15 bg-off-white px-4 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
          Official image missing
        </span>
        <span className="text-[11px] leading-4 text-secondary">Add file to public/products</span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-navy/10 bg-off-white text-navy/15"
    >
      <PawIcon className="h-20 w-20" />
    </div>
  );
}

export default function ProductCard({ product, imageSrc }: ProductCardProps) {
  const available = product.status === "available";
  const amazonUrl = isAmazonProductUrl(product.amazonUrl) ? product.amazonUrl : null;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-2.5 shadow-[0_8px_24px_color-mix(in_srgb,var(--color-navy)_7%,transparent)] transition duration-300 hover:shadow-[0_16px_36px_color-mix(in_srgb,var(--color-navy)_12%,transparent)] ${
        available
          ? "border-turquoise/60 motion-safe:hover:-translate-y-1"
          : "border-navy/8"
      }`}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <ProductVisual product={product} imageSrc={imageSrc} />
        <p
          className={`absolute left-2.5 top-2.5 z-10 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm ${
            available ? "text-turquoise-hover" : "text-navy/75"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${available ? "bg-turquoise" : "bg-navy/40"}`}
          />
          {available ? "Available Now" : "Coming Soon"}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-4">
        <h3 className="text-base font-bold leading-6 text-navy">{product.name}</h3>
        {product.size ? (
          <p className="mt-1 text-sm font-medium text-secondary">{product.size}</p>
        ) : null}

        {available ? (
          <div className="mt-auto pt-4">
            <AmazonButton url={amazonUrl} productName={product.name} className="w-full" />
            {!amazonUrl ? (
              <p className="mt-2 text-center text-xs text-secondary">Amazon link not added yet</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
