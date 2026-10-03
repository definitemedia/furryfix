import type { MetadataRoute } from "next";
import { blogLastUpdated, getBlogPosts } from "@/lib/blog";
import { launchedProducts } from "@/lib/products";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const entries: { path: string; lastModified?: string }[] = [
    { path: "/" },
    { path: "/shop" },
    ...launchedProducts.map((product) => ({ path: `/products/${product.slug}` })),
    { path: "/about" },
    { path: "/why-furryfix" },
    { path: "/contact" },
    { path: "/blog" },
    ...getBlogPosts().map((post) => ({ path: `/blog/${post.slug}`, lastModified: blogLastUpdated })),
    { path: "/privacy" },
    { path: "/terms" },
    { path: "/disclaimer" },
    { path: "/cookies" },
  ];

  return entries.flatMap(({ path, lastModified }) => {
    const url = absoluteUrl(path);
    if (!url) return [];
    return [lastModified ? { url, lastModified } : { url }];
  });
}
