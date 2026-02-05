import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Premium Product Showcase",
    template: "%s | Premium Showcase",
  },
  description: "A modern, professional website showcasing premium products with stunning animations and design.",
  keywords: ["premium", "products", "showcase", "modern design"],
  authors: [{ name: "Premium Showcase" }],
  creator: "Premium Showcase",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://premium-showcase.com",
    siteName: "Premium Showcase",
    title: "Premium Product Showcase",
    description: "A modern, professional website showcasing premium products with stunning animations and design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Product Showcase",
    description: "A modern, professional website showcasing premium products with stunning animations and design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
