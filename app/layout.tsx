import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Using Google Fonts as alternatives to Clash Grotesk and Manrope
// Outfit is similar to Clash Grotesk
// Inter is similar to Manrope
const outfit = Inter({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tribly - AI-Powered Customer Engagement & Retention Platform",
  description: "Tribly helps you retain more customers, boost revenue, and run automated campaigns that actually work. AI-powered engagement and retention platform for businesses.",
  keywords: ["customer engagement", "customer retention", "AI automation", "business growth", "customer loyalty"],
  authors: [{ name: "Tribly" }],
  openGraph: {
    title: "Tribly - AI-Powered Customer Engagement & Retention Platform",
    description: "Supercharge your business growth with AI-powered customer engagement and retention",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

