import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InstagramReels from "@/components/layout/InstagramReels";
import { defaultDescription, defaultTitle, openGraphImage, siteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    siteName: "FurryFix",
    ...(siteUrl ? { url: "/" } : {}),
    ...(siteUrl && openGraphImage ? { images: [{ url: openGraphImage.url, alt: openGraphImage.alt }] } : {}),
  },
  icons: {
    icon: [{ url: "/brand/favicon.png", type: "image/png", sizes: "500x500" }],
    apple: "/brand/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AnnouncementBar />
        <Header />
        {children}
        <InstagramReels />
        <Footer />
      </body>
    </html>
  );
}
