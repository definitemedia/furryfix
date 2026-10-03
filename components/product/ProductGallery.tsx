"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";

type ProductGalleryProps = {
  images: readonly string[];
  label: string;
};

const SWIPE_THRESHOLD = 40;

const navButton =
  "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-white/90 text-navy shadow-[0_6px_16px_color-mix(in_srgb,var(--color-navy)_14%,transparent)] backdrop-blur transition duration-200 hover:bg-white hover:text-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none";

const indicatorChevron =
  "flex h-9 w-8 shrink-0 items-center justify-center rounded-full text-navy transition duration-200 hover:text-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none";

export default function ProductGallery({ images, label }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const touch = useRef<{ x: number; y: number; horizontal: boolean | null } | null>(null);
  const dragXRef = useRef(0);
  const dotsRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const total = images.length;

  useEffect(() => {
    const track = dotsRef.current;
    const dot = dotRefs.current[active];
    if (!track || !dot || track.scrollWidth <= track.clientWidth) return;
    const target = dot.offsetLeft - (track.clientWidth - dot.offsetWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: Math.max(0, target), behavior: reduce ? "auto" : "smooth" });
  }, [active, total]);

  if (total === 0) {
    return (
      <div
        role="img"
        aria-label={`Official image of ${label} not added yet`}
        className="flex aspect-square w-full items-center justify-center rounded-3xl border-2 border-dashed border-navy/15 bg-white text-sm font-semibold text-secondary"
      >
        Official image missing
      </div>
    );
  }

  const go = (index: number) => setActive(((index % total) + total) % total);
  const prev = () => setActive((current) => (current - 1 + total) % total);
  const next = () => setActive((current) => (current + 1) % total);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (total < 2) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (total < 2) return;
    const point = event.touches[0];
    dragXRef.current = 0;
    touch.current = { x: point.clientX, y: point.clientY, horizontal: null };
  };

  const onTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const start = touch.current;
    if (!start) return;
    const point = event.touches[0];
    const dx = point.clientX - start.x;
    const dy = point.clientY - start.y;
    if (start.horizontal === null && Math.abs(dx) + Math.abs(dy) > 8) {
      start.horizontal = Math.abs(dx) > Math.abs(dy);
    }
    if (start.horizontal) {
      dragXRef.current = dx;
      setDragX(dx);
    }
  };

  const onTouchEnd = () => {
    const start = touch.current;
    const dx = dragXRef.current;
    touch.current = null;
    dragXRef.current = 0;
    if (start?.horizontal) {
      if (dx <= -SWIPE_THRESHOLD) next();
      else if (dx >= SWIPE_THRESHOLD) prev();
    }
    setDragX(0);
  };

  return (
    <div
      className="w-full min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} images`}
      onKeyDown={onKeyDown}
    >
      <div className="relative">
        <div
          tabIndex={total > 1 ? 0 : undefined}
          aria-label={total > 1 ? "Product image slider, use left and right arrow keys to change image" : undefined}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          className="relative aspect-square w-full touch-pan-y overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-[0_18px_48px_color-mix(in_srgb,var(--color-navy)_9%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
        >
          <div
            className={`flex h-full w-full ${dragX === 0 ? "transition-transform duration-300 ease-out motion-reduce:transition-none" : ""}`}
            style={{ transform: `translateX(calc(${-active * 100}% + ${dragX}px))` }}
          >
            {images.map((src, index) => (
              <div
                key={src}
                className="h-full w-full shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                aria-hidden={index !== active}
              >
                {/* Official art is shown untouched: intrinsic ratio, never cropped or stretched. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={total > 1 ? `${label}, image ${index + 1} of ${total}` : label}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="h-full w-full select-none object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {total > 1 ? (
          <>
            <button type="button" onClick={prev} aria-label="Previous image" className={`${navButton} left-3`}>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12.5 4.5 7 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={next} aria-label="Next image" className={`${navButton} right-3`}>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7.5 4.5 13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p aria-live="polite" className="sr-only">
              Image {active + 1} of {total}
            </p>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div
          className="mt-3 flex w-full min-w-0 items-center justify-center gap-1 md:hidden"
          role="group"
          aria-label="Choose image"
        >
          <button type="button" onClick={prev} aria-label="Previous image" className={indicatorChevron}>
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12.5 4.5 7 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            ref={dotsRef}
            tabIndex={-1}
            className="flex min-w-0 flex-nowrap items-center gap-0.5 overflow-x-auto overscroll-x-contain px-0.5 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((src, index) => {
              const selected = index === active;
              return (
                <button
                  key={src}
                  ref={(node) => {
                    dotRefs.current[index] = node;
                  }}
                  type="button"
                  onClick={() => go(index)}
                  aria-pressed={selected}
                  aria-label={`Show image ${index + 1} of ${total}`}
                  className="flex h-8 w-6 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
                >
                  <span
                    aria-hidden="true"
                    className={`rounded-full border-2 border-turquoise transition-all duration-300 ease-out motion-reduce:transition-none ${
                      selected ? "h-2.5 w-2.5 bg-turquoise" : "h-2 w-2 bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <button type="button" onClick={next} aria-label="Next image" className={indicatorChevron}>
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7.5 4.5 13 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ) : null}

      {total > 1 ? (
        <ul className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-7 max-md:hidden" aria-label="Product images">
          {images.map((src, index) => {
            const selected = index === active;
            return (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => go(index)}
                  aria-pressed={selected}
                  aria-label={`Show image ${index + 1} of ${total}`}
                  className={`block aspect-square min-h-11 w-full min-w-11 overflow-hidden rounded-xl border-2 bg-white p-0.5 transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none ${
                    selected
                      ? "border-turquoise shadow-[0_6px_16px_color-mix(in_srgb,var(--color-turquoise)_22%,transparent)]"
                      : "border-navy/10 hover:border-turquoise/60"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
