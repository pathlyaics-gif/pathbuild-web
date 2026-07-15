import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const META_TITLE = "PathBuild — Your whole job search. One app.";
const META_DESCRIPTION =
  "PathBuild scores every job 0–100, prepares each application, fills supported employer forms, and submits after you approve — then keeps employer replies in one place. Built for iPhone.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  metadataBase: new URL("https://pathbuild.app"),
  authors: [{ name: "PathBuild" }],
  keywords: [
    "ai job application assistant",
    "iphone job search",
    "job application tracker",
    "resume tailoring",
    "job fit score",
    "employer replies",
    "apply for jobs with ai",
    "career matching",
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
        alt: "PathBuild — your whole job search in one iPhone app",
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
    <html lang="en">
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
