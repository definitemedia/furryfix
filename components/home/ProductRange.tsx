import ProductCard from "@/components/home/ProductCard";
import { publicAsset } from "@/lib/brand-assets";
import { products } from "@/lib/products";

export default function ProductRange() {
  return (
    <section id="product" aria-labelledby="product-range-heading" className="bg-aqua">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="product-range-heading"
            className="text-3xl font-extrabold tracking-[-0.035em] text-navy sm:text-4xl lg:text-[2.75rem]"
          >
            Our Product Range
          </h2>
          <p className="mt-3 text-base leading-7 text-body sm:text-lg">
            Thoughtful care for every furry friend.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-sm grid-cols-1 gap-5 sm:mt-12 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} imageSrc={publicAsset(product.images)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
