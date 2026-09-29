export default function ShopHero() {
  return (
    <section aria-labelledby="shop-heading" className="hero-surface overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <div className="hero-rise mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-turquoise-hover shadow-[0_4px_14px_color-mix(in_srgb,var(--color-navy)_6%,transparent)]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-turquoise" />
            Shop
          </p>
          <h1
            id="shop-heading"
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-navy sm:text-5xl lg:text-[3.5rem]"
          >
            Thoughtful Care for Every Furry Friend
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-body sm:text-lg">
            Explore the FurryFix range. Purchases happen on Amazon.
          </p>
        </div>
      </div>
    </section>
  );
}
