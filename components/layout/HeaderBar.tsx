"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import AmazonButton from "./AmazonButton";
import MobileMenu from "./MobileMenu";
import { isActivePath, navItems } from "./nav";

type HeaderBarProps = {
  logoSrc: string;
  amazonUrl: string | null;
  productName: string;
};

export default function HeaderBar({ logoSrc, amazonUrl, productName }: HeaderBarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-navy/10 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_6px_20px_color-mix(in_srgb,var(--color-navy)_8%,transparent)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[84px]">
        <Link
          href="/"
          aria-label="FurryFix home"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise"
        >
          {/* The official logo must keep its intrinsic ratio. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="FurryFix"
            className="h-14 w-auto max-w-[150px] object-contain sm:h-[60px] lg:h-[72px] lg:max-w-[190px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex min-h-11 items-center rounded-sm text-[15px] font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:rounded-full after:bg-turquoise after:transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise ${
                      active ? "text-turquoise after:opacity-100" : "text-navy after:opacity-0 hover:text-turquoise"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <AmazonButton url={amazonUrl} productName={productName} />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(true)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 hover:text-turquoise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise lg:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        onClose={closeMenu}
        pathname={pathname}
        amazonUrl={amazonUrl}
        productName={productName}
      />
    </header>
  );
}
