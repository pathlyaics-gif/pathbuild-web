"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
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

  const finishIntro = useCallback(() => {
    localStorage.setItem(INTRO_KEY, "true");
    router.push("/onboarding");
  }, [router]);

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
  }, [phase, finishIntro]);

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
    <div className="fixed inset-0 z-[60] select-none overflow-hidden bg-bg">
      <AnimatePresence mode="wait">
        {/* PHASE 1: SPLASH / LOGO */}
        {phase === "splash" && (
          <motion.div
            key="splash"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg"
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
              <Image
                src="/logo.png"
                alt=""
                width={96}
                height={96}
                className="h-24 w-24 rounded-lg shadow-pb-lg"
              />
            </motion.div>

            <motion.h1
              className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              PathBuild
            </motion.h1>

            <motion.p
              className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-ink-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              Your whole job search. One app.
            </motion.p>

            <motion.div
              className="absolute h-44 w-44 rounded-full border border-accent-border"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        {/* PHASE 2: VIDEO */}
        {phase === "video" && (
          <motion.div
            key="video"
            className="absolute inset-0 z-10 flex items-center justify-center bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {!videoReady && (
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-divider border-t-accent" />
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
              className={`h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
            />

            <button
              onClick={handleSkip}
              className="absolute bottom-10 right-6 z-30 rounded-pill border border-divider px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-ink-muted transition-colors duration-standard hover:border-accent-border hover:text-ink"
            >
              Skip
            </button>
          </motion.div>
        )}

        {/* PHASE 3: QUOTE */}
        {phase === "quote" && (
          <motion.div
            key="quote"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <motion.h1
              className="max-w-md text-center text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Your whole job search.
              <br />
              One app.
            </motion.h1>

            <motion.div
              className="mt-8 h-px w-16 bg-accent-border"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.8, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            />

            <motion.button
              onClick={finishIntro}
              className="mt-12 rounded-pill bg-accent px-9 py-3.5 text-sm font-semibold tracking-wide text-accent-fg shadow-glow transition-colors duration-standard hover:bg-accent-hover"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
            </motion.button>

            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <div className="h-0.5 w-24 overflow-hidden rounded-full bg-divider">
                <motion.div
                  className="h-full rounded-full bg-accent-border"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: QUOTE_DISPLAY_MS / 1000, ease: "linear" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
