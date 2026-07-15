import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Welcome — PathBuild",
  description:
    "A quick intro to PathBuild, the iPhone job-search and application assistant that scores jobs, prepares applications, and submits after you approve.",
  robots: { index: false, follow: false },
};

export default function IntroLayout({ children }: { children: ReactNode }) {
  return children;
}
