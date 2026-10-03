import AboutClosing from "@/components/about/AboutClosing";
import AboutCollage from "@/components/about/AboutCollage";
import AboutPetCards from "@/components/about/AboutPetCards";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About FurryFix | Thoughtful Care for Furry Friends",
  description:
    "Meet FurryFix, a pet-care brand inspired by the bond between pets and their families. Every furry friend deserves thoughtful care, comfort, and happiness.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="overflow-x-clip">
      <AboutCollage />
      <AboutPetCards />
      <AboutClosing />
    </main>
  );
}
