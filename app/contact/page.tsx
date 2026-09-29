import type { Metadata } from "next";
import ClosingMessage from "@/components/contact/ClosingMessage";
import ContactHero from "@/components/contact/ContactHero";
import QuickHelp from "@/components/contact/QuickHelp";

export const metadata: Metadata = {
  title: "Contact Us | FurryFix",
  description:
    "Questions, feedback, or just want to say hello? Email the FurryFix team at care@neurishfuturekind.com.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip">
      <ContactHero />
      <QuickHelp />
      <ClosingMessage />
    </main>
  );
}
