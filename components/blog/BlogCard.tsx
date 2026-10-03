import Link from "next/link";
import PostMedia from "@/components/blog/PostMedia";
import type { BlogCardModel } from "@/components/blog/types";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogCard({
  post,
  variant = "grid",
}: {
  post: BlogCardModel;
  variant?: "grid" | "featured";
}) {
  const featured = variant === "featured";
  const Heading = featured ? "h2" : "h3";

  return (
    <article className={`h-full ${featured ? "" : "min-w-0"}`}>
      <Link
        href={post.href}
        className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_12px_32px_-22px_color-mix(in_srgb,var(--color-navy)_55%,transparent)] transition duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing} ${
          featured ? "md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : ""
        }`}
      >
        <PostMedia
          src={post.imageSrc}
          alt={post.imageAlt}
          imageClass={post.imageClass}
          sizes={
            featured
              ? "(min-width: 768px) 560px, 92vw"
              : "(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          }
          priority={featured}
          className={featured ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[280px]" : "aspect-[16/10] shrink-0"}
        />
        <div className={`flex min-w-0 flex-1 flex-col p-5 sm:p-6 ${featured ? "md:p-8 lg:p-10" : ""}`}>
          <p className="text-xs font-bold tracking-[0.14em] text-turquoise-hover uppercase">{post.category}</p>
          <Heading
            className={`mt-3 font-extrabold tracking-[-0.03em] text-balance text-navy ${
              featured ? "text-2xl leading-tight sm:text-3xl" : "line-clamp-3 text-lg leading-snug sm:text-xl"
            }`}
          >
            {post.title}
          </Heading>
          <p className={`mt-3 leading-7 text-body ${featured ? "text-base sm:text-[1.05rem]" : "line-clamp-3 flex-1 text-[0.95rem]"}`}>
            {post.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <span className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-turquoise">
              Read Article
              <ArrowIcon />
            </span>
            <span className="text-sm font-medium text-secondary">{post.minutes} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
