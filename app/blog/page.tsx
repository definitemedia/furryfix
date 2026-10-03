import { PawIcon } from "@/components/why-furryfix/icons";
import BlogBrowser from "@/components/blog/BlogBrowser";
import BlogCard from "@/components/blog/BlogCard";
import PostMedia from "@/components/blog/PostMedia";
import {
  blogEmptyMessage,
  blogFilters,
  getBlogPosts,
  journalHero,
  journalJsonLd,
  resolveJournalHero,
  toBlogCard,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FurryFix Journal | Simple Care for Happier Pets",
  description: journalHero.lede,
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const featuredCard = toBlogCard(featured, featured.featuredBlurb ?? featured.excerpt);
  const cards = posts.map((post) => toBlogCard(post));
  const hero = resolveJournalHero();
  const jsonLd = JSON.stringify(journalJsonLd()).replace(/</g, "\\u003c");

  return (
    <main className="flex-1 overflow-x-clip bg-off-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section aria-labelledby="journal-heading" className="hero-surface">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-12 lg:py-20">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-navy uppercase">
              <PawIcon className="h-4 w-4 shrink-0 text-turquoise" />
              {journalHero.label}
            </p>
            <h1
              id="journal-heading"
              className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-balance text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              {journalHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-body sm:text-lg sm:leading-8">{journalHero.lede}</p>
          </div>
          <PostMedia
            src={hero?.src ?? null}
            alt={hero?.alt ?? "A pet parent sharing a calm moment with their dog"}
            imageClass={hero?.imageClass}
            sizes="(min-width: 1024px) 540px, 92vw"
            priority
            className="aspect-[4/3] rounded-[28px] sm:rounded-[32px]"
          />
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
        <p className="mb-4 text-xs font-bold tracking-[0.14em] text-turquoise-hover uppercase">Featured</p>
        <BlogCard post={featuredCard} variant="featured" />

        <section aria-labelledby="journal-stories" className="mt-12 sm:mt-16">
          <h2 id="journal-stories" className="text-2xl font-extrabold tracking-[-0.03em] text-navy sm:text-3xl">
            Stories for everyday care
          </h2>
          <div className="mt-6">
            <BlogBrowser posts={cards} filters={blogFilters} emptyMessage={blogEmptyMessage} />
          </div>
        </section>
      </div>
    </main>
  );
}
