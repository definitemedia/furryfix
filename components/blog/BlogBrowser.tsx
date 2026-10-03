"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogCardModel } from "@/components/blog/types";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

export default function BlogBrowser({
  posts,
  filters,
  emptyMessage,
}: {
  posts: readonly BlogCardModel[];
  filters: readonly string[];
  emptyMessage: string;
}) {
  const [active, setActive] = useState(filters[0] ?? "All");
  const visible = active === "All" ? posts : posts.filter((post) => post.filters.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter articles" className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none ${focusRing} ${
                selected ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-navy/10 hover:bg-aqua"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-8">
        {visible.length === 0 ? (
          <p className="rounded-3xl bg-white px-6 py-14 text-center text-base leading-7 text-body ring-1 ring-navy/10">
            {emptyMessage}
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {visible.map((post) => (
              <li key={post.href} className="min-w-0">
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
