import FinalMessage from "@/components/why-furryfix/FinalMessage";
import OurApproach from "@/components/why-furryfix/OurApproach";
import WhyHero from "@/components/why-furryfix/WhyHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why FurryFix | Everyday Pet Care with Love",
  description:
    "FurryFix makes everyday pet care a little easier and happier, with thoughtful products for the bond between pets and their people.",
  path: "/why-furryfix",
});

export default function WhyFurryFixPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <WhyHero />
      <OurApproach />
      <FinalMessage />
    </main>
  );
}
