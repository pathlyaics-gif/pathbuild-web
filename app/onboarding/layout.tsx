import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get started — PathBuild",
  description:
    "You're set up with PathBuild, the iPhone job-search and application assistant. Score jobs, prepare applications, and approve what gets sent.",
  robots: { index: false, follow: false },
};

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
