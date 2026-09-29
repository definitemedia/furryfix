import ShopProductCard from "@/components/shop/ShopProductCard";
import { publicAsset } from "@/lib/brand-assets";
import { products } from "@/lib/products";

export default function ShopProductGrid() {
  return (
    <section aria-labelledby="shop-range-heading" className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <h2
          id="shop-range-heading"
          className="text-center text-3xl font-extrabold tracking-[-0.035em] text-navy sm:text-left sm:text-4xl"
        >
          The FurryFix Range
        </h2>

        <ul className="mx-auto mt-10 grid max-w-sm grid-cols-1 gap-5 min-[520px]:max-w-none min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product, index) => (
            <li
              key={product.slug}
              className="hero-rise"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <ShopProductCard product={product} imageSrc={publicAsset(product.images)} />
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-secondary sm:text-base">
          More products will appear here as they launch.
        </p>
      </div>
    </section>
  );
}
