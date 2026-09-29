import type { ReactNode } from "react";
import styles from "./contact.module.css";

export const CONTACT_EMAIL = "care@neurishfuturekind.com";

export const reveal = styles.reveal;

export const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

export const sectionY = "py-16 sm:py-20 lg:py-24";

export const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

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

export function HeartIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <path d="M12 20.3c-.3 0-.6-.1-.8-.3C6.4 15.9 3 12.9 3 9.1 3 6.3 5.2 4 8 4c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2 2.8 0 5 2.3 5 5.1 0 3.8-3.4 6.8-8.2 10.9-.2.2-.5.3-.8.3Z" />
    </svg>
  );
}

export function MailIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
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
