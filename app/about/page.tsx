import type { Metadata } from "next";
import AboutClosing from "@/components/about/AboutClosing";
import AboutCollage from "@/components/about/AboutCollage";
import AboutPetCards from "@/components/about/AboutPetCards";

export const metadata: Metadata = {
  title: "About Us | FurryFix",
  description:
    "Meet FurryFix, a pet-care brand inspired by the bond between pets and their families. Discover our story, our philosophy, and the thoughtful care behind everything we do.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-clip">
      <AboutCollage />
      <AboutPetCards />
      <AboutClosing />
    </main>
  );
}
