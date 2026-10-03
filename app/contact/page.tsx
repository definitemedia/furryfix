import ClosingMessage from "@/components/contact/ClosingMessage";
import ContactHero from "@/components/contact/ContactHero";
import QuickHelp from "@/components/contact/QuickHelp";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact FurryFix | Pet Care & Support",
  description:
    "Have a question about FurryFix? Email care@neurishfuturekind.com for product information, feedback, or a hello.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="overflow-x-clip">
      <ContactHero />
      <QuickHelp />
      <ClosingMessage />
    </main>
  );
}
