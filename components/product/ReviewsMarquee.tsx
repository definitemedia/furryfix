"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const SPEED = 28; // px per second
const DRAG_THRESHOLD = 6;

const control =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:border-turquoise hover:text-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d={dir === "left" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Children must be `<li>` cards. They are rendered twice; the copy is inert and hidden from assistive tech. */
export default function ReviewsMarquee({ children, label }: { children: ReactNode; label: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLUListElement>(null);

  const offset = useRef(0);
  const target = useRef<number | null>(null);
  const hovered = useRef(false);
  const focused = useRef(false);
  const drag = useRef<{ id: number; x: number; start: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const reducedRef = useRef(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reducedRef.current = mq.matches;
      setReducedMotion(mq.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    userPausedRef.current = userPaused;
  }, [userPaused]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const period = firstSetRef.current?.offsetWidth ?? 0;

      if (period > 0) {
        if (target.current !== null) {
          const diff = target.current - offset.current;
          if (reducedRef.current || Math.abs(diff) < 0.5) {
            offset.current = target.current;
            target.current = null;
          } else {
            offset.current += diff * Math.min(1, dt * 8);
          }
        } else if (
          !reducedRef.current &&
          !userPausedRef.current &&
          !hovered.current &&
          !focused.current &&
          !drag.current
        ) {
          offset.current += SPEED * dt;
        }

        const wrapped = ((offset.current % period) + period) % period;
        if (target.current !== null) target.current += wrapped - offset.current;
        offset.current = wrapped;

        if (trackRef.current) trackRef.current.style.transform = `translate3d(${-offset.current}px,0,0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      target.current = null;
      offset.current += e.deltaX;
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, []);

  const step = () => {
    const card = firstSetRef.current?.firstElementChild as HTMLElement | null;
    if (!card) return 320;
    return card.offsetWidth + parseFloat(getComputedStyle(card).marginRight || "0");
  };

  const move = (dir: 1 | -1) => {
    target.current = (target.current ?? offset.current) + dir * step();
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="mt-8"
      onFocus={(e) => {
        focused.current = true;
        const viewport = viewportRef.current;
        if (!viewport || !viewport.contains(e.target)) return;
        viewport.scrollLeft = 0;
        const card = (e.target as HTMLElement).closest("li");
        if (!card) return;
        const vp = viewport.getBoundingClientRect();
        const rect = card.getBoundingClientRect();
        if (rect.left < vp.left || rect.right > vp.right) {
          target.current = offset.current + (rect.left - vp.left);
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) focused.current = false;
      }}
    >
      <div className="mb-4 flex items-center justify-end gap-2">
        {!reducedMotion ? (
          <button
            type="button"
            className={control}
            aria-pressed={userPaused}
            aria-label={userPaused ? "Resume scrolling reviews" : "Pause scrolling reviews"}
            onClick={() => setUserPaused((p) => !p)}
          >
            {userPaused ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M6 4.5v11l9-5.5-9-5.5Z" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M5.5 4h3v12h-3zM11.5 4h3v12h-3z" />
              </svg>
            )}
          </button>
        ) : null}
        <button type="button" className={control} aria-label="Previous reviews" onClick={() => move(-1)}>
          <Chevron dir="left" />
        </button>
        <button type="button" className={control} aria-label="Next reviews" onClick={() => move(1)}>
          <Chevron dir="right" />
        </button>
      </div>

      <div
        ref={viewportRef}
        className="cursor-grab touch-pan-y reviews-marquee-fade overflow-hidden active:cursor-grabbing"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") hovered.current = true;
        }}
        onPointerLeave={() => {
          hovered.current = false;
        }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse" && e.button !== 0) return;
          target.current = null;
          drag.current = { id: e.pointerId, x: e.clientX, start: offset.current, moved: false };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d || d.id !== e.pointerId) return;
          const dx = e.clientX - d.x;
          if (!d.moved && Math.abs(dx) > DRAG_THRESHOLD) {
            d.moved = true;
            try {
              e.currentTarget.setPointerCapture(e.pointerId);
            } catch {}
          }
          if (d.moved) offset.current = d.start - dx;
        }}
        onPointerUp={(e) => {
          if (drag.current?.moved) {
            suppressClick.current = true;
            setTimeout(() => {
              suppressClick.current = false;
            }, 0);
          }
          drag.current = null;
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
        onClickCapture={(e) => {
          if (suppressClick.current) {
            e.preventDefault();
            e.stopPropagation();
            suppressClick.current = false;
          }
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          <ul ref={firstSetRef} className="flex shrink-0 py-2">
            {children}
          </ul>
          <ul aria-hidden="true" inert className="flex shrink-0 py-2">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}
