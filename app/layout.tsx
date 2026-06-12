import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

const META_TITLE = "PathBuild — Stop guessing. See what fits.";
const META_DESCRIPTION =
  "PathBuild scores every job against your skills, pay, and goals — a 0–100 fit score before you apply. Swipe right and PathBuild drafts the application; you review, you send. For iPhone.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  metadataBase: new URL("https://pathbuild.app"),
  authors: [{ name: "PathBuild" }],
  keywords: [
    "career fit score",
    "job fit",
    "swipe to apply",
    "job search app",
    "career match",
    "application tracker",
    "what job fits me",
    "PathBuild",
    "iOS",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://pathbuild.app",
    siteName: "PathBuild",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PathBuild wordmark beside a 98% fit score ring on a dark background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
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
        <div className="grain-overlay" aria-hidden />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
