import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "PathBuild — Build Your Future With AI",
  description:
    "Discover your ideal career path. Get a personalized roadmap powered by AI. Take action with step-by-step guidance.",
  metadataBase: new URL("https://pathbuild.app"),
  authors: [{ name: "PathBuild" }],
  keywords: [
    "career guidance",
    "AI career advisor",
    "career roadmap",
    "career path finder",
    "job planning",
    "career change",
    "PathBuild",
  ],
  openGraph: {
    title: "PathBuild — Build Your Future With AI",
    description:
      "Discover your ideal career path. Get a personalized roadmap powered by AI. Take action with step-by-step guidance.",
    url: "https://pathbuild.app",
    siteName: "PathBuild",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PathBuild — Build Your Future With AI",
    description:
      "Discover your ideal career path. Get a personalized roadmap powered by AI.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
