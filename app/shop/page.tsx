import ShopClosing from "@/components/shop/ShopClosing";
import ShopHero from "@/components/shop/ShopHero";
import ShopProductGrid from "@/components/shop/ShopProductGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop FurryFix | Everyday Pet Care Products",
  description:
    "Explore the FurryFix range. Available products are purchased on Amazon, and more pet-care products are coming soon.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <ShopHero />
      <ShopProductGrid />
      <ShopClosing />
    </main>
  );
}
