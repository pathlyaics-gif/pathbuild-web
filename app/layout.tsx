import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_HERO_SUB, APP_HERO_TITLE } from "@/lib/site";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PathBuild — AI Career Discovery for iOS",
  description: APP_HERO_SUB,
  metadataBase: new URL("https://pathbuild.app"),
  authors: [{ name: "PathBuild" }],
  keywords: [
    "career discovery",
    "career quiz",
    "AI career match",
    "find your career",
    "what career fits me",
    "career change app",
    "company match",
    "PathBuild",
    "iOS",
  ],
  openGraph: {
    title: "PathBuild — AI Career Discovery for iOS",
    description: APP_HERO_TITLE,
    url: "https://pathbuild.app",
    siteName: "PathBuild",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-full.png",
        width: 534,
        height: 566,
        alt: "PathBuild — winding path and arrow icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PathBuild — AI Career Discovery for iOS",
    description: APP_HERO_TITLE,
    images: ["/logo-full.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${instrumentSans.variable}`}>
      <body className={`${instrumentSans.className} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
