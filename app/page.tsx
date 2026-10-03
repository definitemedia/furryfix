import HeroSection from "@/components/hero/HeroSection";
import ProductRange from "@/components/home/ProductRange";
import WhyFurryFix from "@/components/home/WhyFurryFix";
import Ingredients from "@/components/home/Ingredients";
import FinalCTA from "@/components/home/FinalCTA";
import HappyPets from "@/components/home/HappyPets";
import JsonLd from "@/components/seo/JsonLd";
import { defaultDescription, defaultTitle, organizationNode, pageMetadata, websiteNode, withJsonLdContext } from "@/lib/seo";

export const metadata = pageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={withJsonLdContext([organizationNode(), websiteNode()])} />
      <HeroSection />
      <ProductRange />
      <WhyFurryFix />
      <Ingredients />
      <HappyPets />
      <FinalCTA />
    </main>
  );
}
