"use client";

import { useEffect, useRef } from "react";

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

type InstagramEmbedApi = {
  Embeds: { process: () => void };
};

declare global {
  interface Window {
    instgrm?: InstagramEmbedApi;
  }
}

type InstagramReelEmbedsProps = {
  reels: readonly string[];
};

function withoutAutoplay(allow: string | null) {
  return (allow ?? "")
    .split(";")
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && part !== "autoplay")
    .join("; ");
}

export default function InstagramReelEmbeds({ reels }: InstagramReelEmbedsProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    const keepEmbedsQuiet = () => {
      root.querySelectorAll("iframe").forEach((iframe) => {
        iframe.setAttribute("allow", withoutAutoplay(iframe.getAttribute("allow")));
        iframe.loading = "lazy";
      });
    };

    const processEmbeds = () => {
      if (cancelled) return;
      window.instgrm?.Embeds.process();
      keepEmbedsQuiet();
    };

    const mountScript = () => {
      if (cancelled) return;

      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${EMBED_SCRIPT_SRC}"]`,
      );

      if (existing) {
        if (window.instgrm) processEmbeds();
        else existing.addEventListener("load", processEmbeds, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = EMBED_SCRIPT_SRC;
      script.async = true;
      script.onload = processEmbeds;
      root.appendChild(script);
    };

    const embedObserver = new MutationObserver(keepEmbedsQuiet);
    embedObserver.observe(root, { childList: true, subtree: true });

    const visibility = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        visibility.disconnect();
        mountScript();
      },
      { rootMargin: "240px" },
    );
    visibility.observe(root);

    return () => {
      cancelled = true;
      visibility.disconnect();
      embedObserver.disconnect();
    };
  }, [reels]);

  return (
    <div
      ref={rootRef}
      className="mt-4 flex max-w-full gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory motion-reduce:scroll-auto"
    >
      {reels.map((permalink) => (
        <div
          key={permalink}
          className="w-[min(78vw,280px)] max-w-full shrink-0 snap-start lg:w-[calc((100%-3rem)/4)] lg:max-w-[280px]"
        >
          <blockquote
            className="instagram-media !m-0 !min-w-0 !w-full !max-w-full"
            data-instgrm-permalink={permalink}
            data-instgrm-version="14"
            cite={permalink}
          >
            <a href={permalink} target="_blank" rel="noopener noreferrer">
              Watch this reel on Instagram
            </a>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
