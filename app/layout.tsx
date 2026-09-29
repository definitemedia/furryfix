import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "FurryFix | Better Care For Every Pet",
  description:
    "Thoughtful grooming care for happier, healthier-looking coats. Discover FurryFix Shed Control 2-in-1 Conditioning Shampoo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AnnouncementBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
