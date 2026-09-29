import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, PawIcon } from "@/components/why-furryfix/icons";

export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

export const sectionY = "py-16 sm:py-20 lg:py-24";

type Tone = "light" | "dark";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-white" : "text-navy"
      }`}
    >
      <PawIcon className="h-4 w-4 shrink-0 text-turquoise" />
      {children}
    </span>
  );
}

const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

const variants = {
  primary:
    "bg-navy text-white shadow-[0_10px_24px_-10px_color-mix(in_srgb,var(--color-navy)_55%,transparent)] hover:-translate-y-0.5 hover:bg-navy/90 focus-visible:outline-turquoise motion-reduce:hover:translate-y-0",
  secondary: "border border-turquoise/60 bg-white text-navy hover:bg-aqua focus-visible:outline-navy",
  /** For navy surfaces: navy label on turquoise keeps contrast. */
  inverse: "bg-turquoise text-navy hover:bg-white focus-visible:outline-white",
} as const;

export function ExploreProductsButton({
  variant = "primary",
  className = "",
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href="/#product" className={`${buttonBase} ${variants[variant]} ${className}`}>
      Explore Our Products
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}
