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

export const metadata: Metadata = {
  title: "PathBuild — Career Execution for iOS",
  description:
    "PathBuild turns vague career goals into a clear roadmap with one focused daily mission — so you always know what to do next and can prove you're ready.",
  metadataBase: new URL("https://pathbuild.app"),
  authors: [{ name: "PathBuild" }],
  keywords: [
    "career execution",
    "career roadmap",
    "daily career mission",
    "job search",
    "career change",
    "PathBuild",
    "iOS",
  ],
  openGraph: {
    title: "PathBuild — Career Execution for iOS",
    description:
      "From lost to hire-ready, one mission at a time. Premium career execution for iPhone.",
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
    title: "PathBuild — Career Execution for iOS",
    description:
      "One focused daily mission. Clear roadmap. Real proof toward getting hired.",
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
