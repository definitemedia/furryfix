"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds, applied only while revealing. */
  delay?: number;
};

/**
 * Fades content up as it scrolls into view. Content stays visible when JS is off,
 * when the user prefers reduced motion, or when it is already on screen at load.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] data-[reveal=hidden]:translate-y-6 data-[reveal=hidden]:opacity-0 motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
