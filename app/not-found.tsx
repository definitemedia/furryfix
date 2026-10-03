import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | FurryFix" },
  description: "This FurryFix page could not be found.",
  robots: { index: false, follow: true },
};

const primary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-navy px-7 text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-turquoise hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none sm:w-auto";

const secondary =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full border border-navy/15 bg-btn-secondary px-7 text-[15px] font-semibold text-btn-secondary-text transition-colors duration-200 hover:bg-btn-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none sm:w-auto";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-white">
      <div className="mx-auto w-full max-w-[720px] px-5 py-20 text-center sm:px-8 sm:py-28">
        <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-balance text-navy sm:text-4xl sm:leading-tight">
          Looks like this pawprint led somewhere else.
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className={primary}>
            Home
          </Link>
          <Link href="/shop" className={secondary}>
            Products
          </Link>
          <Link href="/blog" className={secondary}>
            Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
