import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AmazonButton from "@/components/layout/AmazonButton";
import AmazonPrice from "@/components/product/AmazonPrice";
import APlusContent from "@/components/product/APlusContent";
import AmazonReviews from "@/components/product/AmazonReviews";
import IngredientList from "@/components/product/IngredientList";
import ProductGallery from "@/components/product/ProductGallery";
import { publicAsset } from "@/lib/brand-assets";
import { isAmazonProductUrl, launchedProducts } from "@/lib/products";
import { amazonReviewSectionUrls, getAmazonReviews } from "@/lib/reviews";

export const dynamicParams = false;

export function generateStaticParams() {
  return launchedProducts.map((product) => ({ slug: product.slug }));
}

function findLaunchedProduct(slug: string) {
  return launchedProducts.find((product) => product.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = findLaunchedProduct((await params).slug);
  if (!product) return {};

  return {
    title: `${product.name} | FurryFix`,
    description: `${product.name}, ${product.size}. Available now on Amazon.`,
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = findLaunchedProduct((await params).slug);
  if (!product) notFound();

  const amazonUrl = isAmazonProductUrl(product.amazonUrl) ? product.amazonUrl : null;
  const gallery = (product.gallery ?? product.images)
    .map((file) => publicAsset([file]))
    .filter((src): src is string => src !== null);
  const label = `${product.name}, ${product.size}`;
  const reviewsUrl = amazonReviewSectionUrls[product.slug];

  return (
    <main className="flex-1 overflow-x-clip">
      <section className="hero-surface">
        <div className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:pb-28">
          <nav aria-label="Breadcrumb" className="text-sm font-medium text-secondary">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/shop"
                  className="-mr-2.5 inline-flex min-h-11 min-w-11 items-center rounded-md underline-offset-4 hover:text-navy hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise"
                >
                  Shop
                </Link>
              </li>
              <li aria-hidden="true" className="text-navy/30">
                /
              </li>
              <li aria-current="page" className="min-w-0 text-navy">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:mt-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="hero-rise">
              <ProductGallery images={gallery} label={label} />
            </div>

            <div className="hero-rise lg:sticky lg:top-28 lg:pt-6" style={{ animationDelay: "120ms" }}>
              <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-turquoise-hover shadow-sm">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                Available Now
              </p>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {product.name}
              </h1>

              <p className="mt-4 text-lg font-semibold text-body">{product.size}</p>

              <AmazonPrice slug={product.slug} amazonUrl={amazonUrl} />

              <div className="mt-8 border-t border-navy/10 pt-8">
                <AmazonButton url={amazonUrl} productName={product.name} className="w-full sm:w-auto sm:min-w-64" />
                {!amazonUrl ? (
                  <p className="mt-2 text-center text-sm text-secondary sm:pl-6 sm:text-left">Amazon link not added yet</p>
                ) : null}

                <p className="mt-6 max-w-md text-base leading-7 text-body">
                  Purchases are completed on Amazon. This site has no cart or checkout.
                </p>
              </div>
            </div>
          </div>

          {product.ingredients ? <IngredientList ingredients={product.ingredients} /> : null}

          {product.aPlusDir ? <APlusContent dir={product.aPlusDir} /> : null}

          {reviewsUrl ? <AmazonReviews snapshot={getAmazonReviews(product.slug)} reviewsUrl={reviewsUrl} /> : null}
        </div>
      </section>
    </main>
  );
}
