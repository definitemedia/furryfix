import type { Metadata } from "next";
import FinalMessage from "@/components/why-furryfix/FinalMessage";
import OurApproach from "@/components/why-furryfix/OurApproach";
import WhyHero from "@/components/why-furryfix/WhyHero";

export const metadata: Metadata = {
  title: "Why FurryFix? | FurryFix",
  description:
    "The love behind FurryFix: why we care about everyday pet care, the bond between pets and their people, and the thoughtful products we create for your furry friend.",
};

export default function WhyFurryFixPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <WhyHero />
      <OurApproach />
      <FinalMessage />
    </main>
  );
}
