import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import PostMedia from "@/components/blog/PostMedia";
import JsonLd from "@/components/seo/JsonLd";
import {
  articleJsonLd,
  blogLastUpdatedLabel,
  blogStaticParams,
  getBlogPost,
  relatedPosts,
  toBlogCard,
  type BlogPost,
} from "@/lib/blog";
import { featuredProduct, productHref } from "@/lib/products";
import { breadcrumbJsonLd, pageMetadata, withJsonLdContext } from "@/lib/seo";

const focusRing =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};

  return pageMetadata({
    title: `${post.title} | FurryFix`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    openGraphType: "article",
  });
}

function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <div className="mt-8 space-y-5 text-[1.0625rem] leading-8 text-body">
      {post.body.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="pt-3 text-[1.65rem] font-bold tracking-[-0.03em] text-balance text-navy">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5 marker:text-turquoise">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const imageSrc = toBlogCard(post).imageSrc;
  const related = relatedPosts(post.slug).map((item) => toBlogCard(item));
  const jsonLd = JSON.stringify(articleJsonLd(post)).replace(/</g, "\\u003c");
  const productPath = productHref(featuredProduct);

  return (
    <main className="flex-1 overflow-x-clip bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <JsonLd
        data={withJsonLdContext([
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ])}
      />

      <article className="mx-auto w-full max-w-[1200px] px-5 pt-8 pb-12 sm:px-8 sm:pt-10">
        <nav aria-label="Breadcrumb" className="text-sm font-medium text-secondary">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className={`inline-flex min-h-11 items-center hover:text-navy hover:underline ${focusRing}`}>
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-navy/35">
              &gt;
            </li>
            <li>
              <Link href="/blog" className={`inline-flex min-h-11 items-center hover:text-navy hover:underline ${focusRing}`}>
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-navy/35">
              &gt;
            </li>
            <li aria-current="page" className="min-w-0 py-2 break-words text-navy">
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-4 w-full max-w-[740px]">
          <p className="inline-flex items-center rounded-full bg-aqua px-3 py-1 text-xs font-bold tracking-[0.14em] text-turquoise-hover uppercase">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-balance text-navy sm:text-4xl sm:leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-sm font-medium text-secondary">Last updated {blogLastUpdatedLabel}</p>
          <p className="mt-6 text-lg leading-8 text-body">{post.intro}</p>

          <PostMedia
            src={imageSrc}
            alt={post.imageAlt}
            imageClass={post.imageClass}
            sizes="(min-width: 768px) 740px, 92vw"
            priority
            className="mt-8 aspect-[16/9] rounded-[28px]"
          />

          <ArticleBody post={post} />

          <section aria-labelledby="takeaways" className="mt-12 rounded-3xl bg-lavender px-5 py-7 sm:px-8">
            <h2 id="takeaways" className="text-xl font-bold tracking-[-0.02em] text-navy">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-3">
              {post.takeaways.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-body">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-turquoise" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <section aria-labelledby="related-articles" className="bg-off-white">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
          <h2 id="related-articles" className="text-2xl font-extrabold tracking-[-0.03em] text-navy sm:text-3xl">
            Related articles
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {related.map((card) => (
              <li key={card.href} className="min-w-0">
                <BlogCard post={card} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="explore-furryfix" className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-[28px] bg-navy px-6 py-8 text-white sm:px-10 sm:py-10">
          <h2 id="explore-furryfix" className="text-2xl font-extrabold tracking-[-0.03em] text-balance sm:text-3xl">
            Care that fits ordinary days
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/80">
            When bath day comes around, explore{" "}
            {productPath ? (
              <Link
                href={productPath}
                className={`font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white ${focusRing}`}
              >
                {featuredProduct.name}
              </Link>
            ) : (
              featuredProduct.name
            )}
            .
          </p>
          <Link
            href={productPath ?? "/shop"}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-turquoise px-6 text-[15px] font-semibold text-navy transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
          >
            Explore FurryFix
          </Link>
        </div>
      </section>
    </main>
  );
}
