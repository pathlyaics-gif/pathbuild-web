import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PathBuild.app — Find clarity in your career",
  description:
    "PathBuild helps you discover meaningful career paths that fit your life.",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
