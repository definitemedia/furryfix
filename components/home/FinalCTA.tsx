import Image from "next/image";
import { publicAsset } from "@/lib/brand-assets";
import { featuredAmazonUrl, featuredProduct } from "@/lib/products";

const bottleSrc = publicAsset(["products/shed-control-shampoo.png", "products/shed-control-shampoo.webp"]);

const buttonBase =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold whitespace-nowrap sm:w-auto";

function ShopOnAmazon() {
  if (!featuredAmazonUrl) {
    return (
      <button
        type="button"
        disabled
        title="Amazon listing coming soon"
        className={`${buttonBase} cursor-not-allowed bg-turquoise/40 text-white`}
      >
        Shop on Amazon
      </button>
    );
  }

  return (
    <a
      href={featuredAmazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Shop ${featuredProduct.name} on Amazon (opens in a new tab)`}
      className={`${buttonBase} bg-btn-primary text-btn-primary-text shadow-[0_6px_16px_color-mix(in_srgb,var(--color-turquoise)_22%,transparent)] transition duration-200 hover:-translate-y-0.5 hover:bg-btn-primary-hover hover:shadow-[0_10px_22px_color-mix(in_srgb,var(--color-turquoise)_28%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      Shop on Amazon
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-[28px] bg-pale-turquoise px-6 py-10 sm:rounded-[36px] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-white/40"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-20 h-56 w-56 rounded-full bg-aqua/70"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-14">
            <div className="text-center md:text-left">
              <h2
                id="final-cta-heading"
                className="text-3xl font-extrabold tracking-[-0.035em] text-balance text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Give Your Furry Friend Some Extra Love
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-body sm:text-lg md:mx-0">
                Make everyday grooming a happy moment with FurryFix. Explore our Shed Control 2-in-1
                Conditioning Shampoo.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <ShopOnAmazon />
                <a
                  href="#product"
                  className={`${buttonBase} border border-navy/15 bg-btn-secondary text-btn-secondary-text transition-colors duration-200 hover:bg-btn-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none`}
                >
                  Explore Products
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-3xl shadow-[0_18px_40px_-18px_color-mix(in_srgb,var(--color-navy)_35%,transparent)] sm:max-h-[340px] md:max-h-none">
                <Image
                  src="/cta/happy-dog.jpg"
                  alt="A happy, fluffy dog smiling outdoors"
                  fill
                  sizes="(min-width: 1200px) 520px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover object-[60%_40%]"
                />
              </div>

              {bottleSrc && (
                <div className="absolute -bottom-4 -left-3 flex h-28 w-20 items-end justify-center rounded-2xl bg-white/90 p-2 shadow-md sm:h-32 sm:w-24">
                  <Image
                    src={bottleSrc}
                    alt={featuredProduct.name}
                    width={96}
                    height={128}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
