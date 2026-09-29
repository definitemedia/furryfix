"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import AmazonButton from "./AmazonButton";
import { isActivePath, navItems } from "./nav";

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  pathname: string;
  amazonUrl: string | null;
  productName: string;
};

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({ id, open, onClose, pathname, amazonUrl, productName }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !panelRef.current.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !panelRef.current.contains(current))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "visible" : "invisible"}`} inert={!open}>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-navy/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
      />

      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute inset-y-0 right-0 flex w-[min(86vw,360px)] flex-col bg-white shadow-[-12px_0_40px_color-mix(in_srgb,var(--color-navy)_18%,transparent)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-navy/10 px-5 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-navy/60">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 hover:text-turquoise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4 sm:px-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                    className={`flex min-h-12 items-center rounded-xl border-l-[3px] px-4 text-[17px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise ${
                      active
                        ? "border-turquoise bg-turquoise/8 text-turquoise"
                        : "border-transparent text-navy hover:bg-navy/5 hover:text-turquoise"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-navy/10 p-5 sm:p-6">
          <AmazonButton url={amazonUrl} productName={productName} className="min-h-12 w-full text-base" />
        </div>
      </div>
    </div>
  );
}
