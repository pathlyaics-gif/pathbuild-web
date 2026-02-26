"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Star } from "lucide-react";

function AppStoreButton() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3.5 text-white hover:bg-gray-900 transition-colors"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none opacity-80">
          Coming Soon on the
        </div>
        <div className="text-base font-semibold leading-tight">App Store</div>
      </div>
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-navy-600/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs font-medium text-white/80">
              <Sparkles size={14} className="text-accent-light" />
              AI-Powered Career Guidance
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Build Your Future
            <br />
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              With AI
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-navy-300 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Discover your ideal career path. Get a personalized roadmap.
            <br className="hidden sm:block" />
            Take action with step-by-step guidance.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <AppStoreButton />
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-navy-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>500+ early users</span>
            </div>
            <div className="w-px h-4 bg-navy-600" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-accent text-accent"
                />
              ))}
              <span className="ml-1">4.9 rating</span>
            </div>
            <div className="w-px h-4 bg-navy-600 hidden sm:block" />
            <span className="hidden sm:block">Free to start</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
