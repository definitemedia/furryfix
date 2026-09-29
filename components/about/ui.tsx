import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./about.module.css";

export const reveal = styles.reveal;

export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

export const sectionY = "py-16 sm:py-20 lg:py-24";

export const figureClass =
  "group relative overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_-18px_color-mix(in_srgb,var(--color-navy)_35%,transparent)] ring-1 ring-navy/5";

export const imageClass =
  "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

export function PawPrint({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <circle cx="7.2" cy="8.2" r="1.7" />
      <circle cx="12" cy="6.4" r="1.7" />
      <circle cx="16.8" cy="8.2" r="1.7" />
      <circle cx="8.6" cy="12.2" r="1.55" />
      <path d="M12.1 11.2c2.15 0 3.9 1.7 3.9 3.85 0 2.35-1.9 4.15-4.15 4.15-1.7 0-3.15-.95-3.75-2.35-.35.25-.8.4-1.25.4-1.15 0-2.05-.95-2.05-2.15 0-1.55 1.35-2.7 3.15-2.9.85-.7 1.9-1 3.15-1Z" />
    </svg>
  );
}

type Tone = "light" | "dark";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-white" : "text-navy"
      }`}
    >
      <PawPrint className="h-4 w-4 shrink-0 text-turquoise" />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  id: string;
  title: string;
  /** Rendered inside the heading, e.g. "Our Story" in "Our Story — Inspired by Love". */
  lead?: string;
  /** Rendered above the heading as a separate label. */
  eyebrow?: string;
  tone?: Tone;
  className?: string;
};

export function SectionHeading({ id, title, lead, eyebrow, tone = "light", className = "" }: SectionHeadingProps) {
  return (
    <>
      {eyebrow ? (
        <p className="mb-4">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-3xl font-extrabold tracking-[-0.035em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          tone === "dark" ? "text-white" : "text-navy"
        } ${className}`}
      >
        {lead ? (
          <span className="mb-4 block">
            <Eyebrow tone={tone}>{lead}</Eyebrow>
            <span className="sr-only"> — </span>
          </span>
        ) : null}
        {title}
      </h2>
    </>
  );
}

export function ExploreProductsLink({ variant = "primary", className = "" }: { variant?: "primary" | "secondary"; className?: string }) {
  const look =
    variant === "primary"
      ? "bg-navy text-white shadow-[0_10px_24px_-10px_color-mix(in_srgb,var(--color-navy)_55%,transparent)] hover:-translate-y-0.5 hover:bg-navy/90 focus-visible:outline-turquoise motion-reduce:hover:translate-y-0"
      : "border border-navy/15 bg-white text-navy hover:bg-aqua focus-visible:outline-navy";

  return (
    <Link href="/#product" className={`${buttonBase} ${look} ${className}`}>
      Explore Our Products
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
