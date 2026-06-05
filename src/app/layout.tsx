import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { localBusinessSchema, personSchema } from "@/lib/schema";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-family",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Ventura Family Law & Criminal Defense Attorney`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ventura family law attorney",
    "Ventura criminal defense attorney",
    "Ventura divorce lawyer",
    "Ventura DUI attorney",
    "Ventura personal injury lawyer",
    "Rachel Reed attorney",
  ],
  authors: [{ name: site.attorney }],
  creator: site.attorney,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Ventura Family Law & Criminal Defense`,
    description: site.description,
    images: [
      {
        url: "/images/rachelreedlawherstanding.png",
        width: 1024,
        height: 1536,
        alt: `${site.attorney}, Ventura attorney`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Ventura Family Law & Criminal Defense`,
    description: site.description,
    images: ["/images/rachelreedlawherstanding.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ink text-cream antialiased">
        <JsonLd data={[localBusinessSchema(), personSchema()]} />
        <Header />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
