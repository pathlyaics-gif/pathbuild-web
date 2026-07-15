"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function OnboardingPage() {
  const handleReset = () => {
    localStorage.removeItem("pathbuild_seen_intro_v1");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-20 text-center">
      <Image
        src="/logo.png"
        alt=""
        width={64}
        height={64}
        className="h-16 w-16 rounded-md shadow-pb-md"
      />
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Welcome to PathBuild
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-secondary">
        You&apos;re all set. Open PathBuild on your iPhone to score jobs,
        prepare applications, and approve what gets sent.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/how-it-works">See how it works</Button>
        <Button variant="secondary" onClick={handleReset}>
          Replay intro
        </Button>
      </div>
    </div>
  );
}
