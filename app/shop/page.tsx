import type { Metadata } from "next";
import ShopClosing from "@/components/shop/ShopClosing";
import ShopHero from "@/components/shop/ShopHero";
import ShopProductGrid from "@/components/shop/ShopProductGrid";

export const metadata: Metadata = {
  title: "Shop | FurryFix",
  description:
    "Browse the FurryFix pet-care range. Available products are purchased on Amazon; more products are coming soon.",
};

export default function ShopPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <ShopHero />
      <ShopProductGrid />
      <ShopClosing />
    </main>
  );
}
