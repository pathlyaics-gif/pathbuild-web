"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const INTRO_KEY = "pathbuild_seen_intro_v1";
const SPLASH_DURATION_MS = 2400;
const QUOTE_DISPLAY_MS = 4000;

type Phase = "splash" | "video" | "quote";

export default function IntroPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [phase, setPhase] = useState<Phase>("splash");
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(INTRO_KEY)) {
      router.replace("/onboarding");
    }
  }, [router]);

  useEffect(() => {
    if (phase !== "splash") return;
    const timer = setTimeout(() => setPhase("video"), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [phase, videoReady]);

  const handleVideoEnd = useCallback(() => {
    setPhase("quote");
  }, []);

  useEffect(() => {
    if (phase !== "quote") return;
    const timer = setTimeout(() => finishIntro(), QUOTE_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const finishIntro = useCallback(() => {
    localStorage.setItem(INTRO_KEY, "true");
    router.push("/onboarding");
  }, [router]);

  const handleSkip = useCallback(() => {
    if (phase === "splash") {
      setPhase("video");
    } else if (phase === "video") {
      setPhase("quote");
    } else {
      finishIntro();
    }
  }, [phase, finishIntro]);

  return (
    <div className="fixed inset-0 bg-white overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {/* PHASE 1: SPLASH / LOGO */}
        {phase === "splash" && (
          <motion.div
            key="splash"
            className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <motion.div
              className="relative mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/logo.png"
                alt="PathBuild"
                className="w-24 h-24 rounded-2xl"
                style={{
                  boxShadow: "0 8px 32px rgba(232, 115, 74, 0.3)",
                }}
              />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              PathBuild
            </motion.h1>

            <motion.p
              className="mt-3 text-sm font-light tracking-[0.2em] uppercase text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              Your career, clarified
            </motion.p>

            <motion.div
              className="absolute w-44 h-44 rounded-full border border-orange-200/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}

        {/* PHASE 2: VIDEO */}
        {phase === "video" && (
          <motion.div
            key="video"
            className="absolute inset-0 flex items-center justify-center z-10 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {!videoReady && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-8 h-8 border-2 border-gray-200 border-t-orange-500 rounded-full animate-spin" />
              </div>
            )}

            <video
              ref={videoRef}
              src="/intro/pathbuild-intro.mp4"
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              onEnded={handleVideoEnd}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
            />

            <button
              onClick={handleSkip}
              className="absolute bottom-10 right-6 z-30 text-gray-400 hover:text-gray-600
                         text-xs font-medium tracking-widest uppercase
                         transition-colors duration-200 px-5 py-2.5 rounded-full
                         border border-gray-200 hover:border-gray-400
                         backdrop-blur-sm"
            >
              Skip
            </button>
          </motion.div>
        )}

        {/* PHASE 3: QUOTE */}
        {phase === "quote" && (
          <motion.div
            key="quote"
            className="absolute inset-0 flex flex-col items-center justify-center px-8 z-10 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-light text-center
                         leading-snug tracking-tight max-w-md text-gray-900"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Find clarity in
              <br />
              your career.
            </motion.h1>

            <motion.div
              className="mt-8 h-px w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, #E8734A, transparent)",
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.6, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            />

            <motion.button
              onClick={finishIntro}
              className="mt-12 px-9 py-3.5 rounded-full text-sm font-medium tracking-wide
                         cursor-pointer transition-all duration-200 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #E8734A 0%, #D4956B 100%)",
                boxShadow: "0 4px 20px rgba(232, 115, 74, 0.25)",
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 6px 28px rgba(232, 115, 74, 0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.button>

            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <div className="h-0.5 w-24 rounded-full overflow-hidden bg-gray-200">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "rgba(232,115,74,0.4)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: QUOTE_DISPLAY_MS / 1000,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
