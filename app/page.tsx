"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const INTRO_KEY = "pathbuild_seen_intro_v1";

export default function RootPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const seen = localStorage.getItem(INTRO_KEY);
    if (seen) {
      router.replace("/onboarding");
    } else {
      router.replace("/intro");
    }
    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  return null;
}
