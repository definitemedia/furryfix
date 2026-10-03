import type { Metadata } from "next";
import { publicAsset } from "@/lib/brand-assets";

export const defaultTitle = "FurryFix | Pet Care & Grooming for Happier Pets";

export const defaultDescription =
  "Discover FurryFix pet care and grooming products made for everyday care, comfort, and happier moments with your furry friend.";

export const supportEmail = "care@neurishfuturekind.com";

export const legalName = "NEURISH FUTURE KIND INDIA PRIVATE LIMITED";

/**
 * Production origin. Absolute canonicals, Open Graph URLs, and sitemap locations
 * stay unset until NEXT_PUBLIC_SITE_URL is a real http(s) origin.
 */
function readSiteUrl(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.username || url.password) return null;

  url.hash = "";
  url.search = "";
  const pathname = url.pathname.replace(/\/+$/, "");
  return `${url.origin}${pathname}`;
}

export const siteUrl = readSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

const ogCandidates = [
  { file: "cta/happy-dog.jpg", alt: "A happy, fluffy dog smiling outdoors" },
  {
    file: "lifestyle/playing-with-owner.jpg",
    alt: "A woman leaning down to play with her excited corgi on a sunny park lawn",
  },
  { file: "brand/furryfix-logo.png", alt: "FurryFix" },
] as const;

function resolveOpenGraphImage(): { url: string; alt: string } | null {
  for (const candidate of ogCandidates) {
    const url = publicAsset([candidate.file]);
    if (url) return { url, alt: candidate.alt };
  }
  return null;
}

export const openGraphImage = resolveOpenGraphImage();

/** App routes have no trailing slash. The homepage resolves to the origin. */
export function absoluteUrl(path: string): string | null {
  if (!siteUrl) return null;
  if (path === "/" || path === "") return siteUrl;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const hasOrigin = Boolean(siteUrl);

  return {
    title: { absolute: title },
    description,
    ...(hasOrigin ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title,
      description,
      type: openGraphType,
      siteName: "FurryFix",
      ...(hasOrigin ? { url: path } : {}),
      ...(hasOrigin && openGraphImage
        ? { images: [{ url: openGraphImage.url, alt: openGraphImage.alt }] }
        : {}),
    },
  };
}

export function withJsonLdContext(nodes: Record<string, unknown>[]): {
  "@context": string;
  "@graph": Record<string, unknown>[];
} {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function organizationNode(): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": "Organization",
    name: "FurryFix",
    legalName,
    email: supportEmail,
  };
  const url = absoluteUrl("/");
  if (url) node.url = url;

  const sameAs = [
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_YOUTUBE_URL,
  ].filter((value): value is string => typeof value === "string" && value.startsWith("https://"));
  if (sameAs.length > 0) node.sameAs = sameAs;

  return node;
}

export function websiteNode(): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": "WebSite",
    name: "FurryFix",
    description: defaultDescription,
  };
  const url = absoluteUrl("/");
  if (url) node.url = url;
  return node;
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };
      const url = absoluteUrl(item.path);
      if (url) entry.item = url;
      return entry;
    }),
  };
}

export function productJsonLd(input: {
  name: string;
  size: string;
  path: string;
  images: readonly string[];
}): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": "Product",
    name: input.name,
    size: input.size,
    brand: {
      "@type": "Brand",
      name: "FurryFix",
    },
  };

  const url = absoluteUrl(input.path);
  if (url) node.url = url;

  if (input.images.length === 1) {
    node.image = absoluteUrl(input.images[0]) ?? input.images[0];
  } else if (input.images.length > 1) {
    node.image = input.images.map((image) => absoluteUrl(image) ?? image);
  }

  return node;
}
