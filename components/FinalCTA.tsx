"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Sparkles } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/pathbuild/id6743108030";

const TRUST_POINTS = [
  { icon: Sparkles, text: "Subscribe via the App Store" },
  { icon: Shield, text: "Cancel anytime" },
  { icon: Clock, text: "One mission a day — 30 min" },
];

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-sunrise-from via-[#FFF3E4] to-sunrise-to overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/[0.08] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-tight">
            Your target role is waiting.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Start your first mission today.
            </span>
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Every day without a plan is another day of feeling stuck. PathBuild
            turns your career goals into a clear target role, gives you one
            focused daily mission, and tracks your readiness until you are
            hire-ready. Join thousands of people who stopped overthinking and
            started building.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-navy-900 px-8 py-4 text-white hover:bg-navy-800 transition-colors shadow-warm-lg"
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-none opacity-70 font-medium">
                Download on the
              </div>
              <div className="text-[15px] font-bold leading-tight">
                App Store
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {TRUST_POINTS.map((point) => (
            <div
              key={point.text}
              className="flex items-center gap-2 text-[13px] font-semibold text-navy-500"
            >
              <point.icon size={14} className="text-accent" strokeWidth={2} />
              <span>{point.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-[12px] text-navy-400 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Free to download. Plans start at $10.83/month billed annually ($129.99/yr).
        </motion.p>
      </div>
    </section>
  );
}
