import HeroSection from "@/components/hero/HeroSection";
import ProductRange from "@/components/home/ProductRange";
import WhyFurryFix from "@/components/home/WhyFurryFix";
import Ingredients from "@/components/home/Ingredients";
import FinalCTA from "@/components/home/FinalCTA";
import HappyPets from "@/components/home/HappyPets";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductRange />
      <WhyFurryFix />
      <Ingredients />
      <HappyPets />
      <FinalCTA />
    </main>
  );
}
