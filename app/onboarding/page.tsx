"use client";

import { motion } from "framer-motion";

export default function OnboardingPage() {
  const handleReset = () => {
    localStorage.removeItem("pathbuild_seen_intro_v1");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/logo.png"
          alt="PathBuild"
          className="w-16 h-16 rounded-xl mx-auto mb-6"
          style={{ boxShadow: "0 4px 16px rgba(232, 115, 74, 0.2)" }}
        />

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          Welcome to PathBuild
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-400">
          This is the onboarding page. The intro flow has been completed
          and won&apos;t show again on your next visit.
        </p>

        <button
          onClick={handleReset}
          className="mt-10 px-6 py-3 rounded-full text-sm font-medium
                     transition-all duration-200 cursor-pointer
                     border border-orange-200 text-gray-500
                     hover:border-orange-400 hover:text-gray-900"
        >
          Replay Intro
        </button>
      </motion.div>
    </div>
  );
}
