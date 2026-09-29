import Link from "next/link";

export default function ShopClosing() {
  return (
    <section aria-label="Closing" className="bg-lavender">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-3 px-5 py-14 text-center sm:px-8 sm:py-16">
        <p className="text-lg font-bold tracking-[-0.02em] text-navy sm:text-xl">
          Thank you for caring for your furry friend with us.
        </p>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-[15px] font-semibold text-turquoise-hover underline-offset-4 transition-colors hover:text-navy hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M13 8H3M7 4 3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>
      </div>
    </section>
  );
}
