import Link from "next/link";
import type { ReactNode } from "react";
import { logoSrc } from "@/lib/brand-assets";
import { products } from "@/lib/products";

const description =
  "Thoughtful care for your furry friends. Making everyday pet care simple, joyful, and full of love.";

const productHref = "/#product";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Why FurryFix", href: "/why-furryfix" },
  { label: "Blog", href: "/blog" },
  { label: "Products", href: productHref },
] as const;

type SocialLink = { label: string; href: string; icon: ReactNode };

const iconClass = "h-5 w-5";

/** Only official profile URLs set via env are rendered; nothing is shown when none are configured. */
const socialLinks: SocialLink[] = [
  {
    label: "FurryFix on Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "FurryFix on Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
      </svg>
    ),
  },
  {
    label: "FurryFix on YouTube",
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
      </svg>
    ),
  },
].filter((link) => link.href.startsWith("https://"));

const focusRing =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

const linkClass = `inline-flex min-h-11 items-center text-[15px] text-white/80 transition-colors duration-200 hover:text-turquoise motion-reduce:transition-none ${focusRing}`;

const headingClass = "text-base font-semibold text-white";

function SocialLinks({ links }: { links: SocialLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-turquoise hover:text-turquoise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-14 pb-8 sm:px-8 lg:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.2fr_0.8fr_1.4fr_0.8fr] lg:gap-x-10">
          <div>
            {logoSrc ? (
              <Link href="/" aria-label="FurryFix home" className={`inline-block ${focusRing}`}>
                <span className="block w-fit rounded-lg bg-[#FFFFFF] px-4 py-2">
                  {/* The official logo must keep its intrinsic ratio. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoSrc}
                    alt="FurryFix"
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-[170px] max-w-full object-contain"
                  />
                </span>
              </Link>
            ) : (
              <p className="text-xl font-bold text-white">FurryFix</p>
            )}
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed">{description}</p>
            <SocialLinks links={socialLinks} />
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h2 id="footer-quick-links" className={headingClass}>
              Quick Links
            </h2>
            <ul className="mt-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-products">
            <h2 id="footer-products" className={headingClass}>
              Our Products
            </h2>
            <ul className="mt-3">
              {products.map((product) =>
                product.status === "available" ? (
                  <li key={product.slug}>
                    <Link href={productHref} className={`${linkClass} py-2 leading-snug`}>
                      {product.name}
                    </Link>
                  </li>
                ) : (
                  <li key={product.slug} className="flex min-h-11 flex-wrap items-center gap-x-2 gap-y-1 py-1.5 text-[15px]">
                    <span>{product.name}</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-turquoise">
                      Coming Soon
                    </span>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Get In Touch</h2>
            <ul className="mt-3">
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/70">
          <p>© {year} FurryFix. All rights reserved. A unit of NEURISH GROUP</p>
          <div className="flex flex-wrap items-center gap-x-6">
            <Link
              href="/privacy"
              className={`inline-flex min-h-11 items-center transition-colors duration-200 hover:text-turquoise motion-reduce:transition-none ${focusRing}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={`inline-flex min-h-11 items-center transition-colors duration-200 hover:text-turquoise motion-reduce:transition-none ${focusRing}`}
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/disclaimer"
              className={`inline-flex min-h-11 items-center transition-colors duration-200 hover:text-turquoise motion-reduce:transition-none ${focusRing}`}
            >
              Disclaimer
            </Link>
            <Link
              href="/cookies"
              className={`inline-flex min-h-11 items-center transition-colors duration-200 hover:text-turquoise motion-reduce:transition-none ${focusRing}`}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
