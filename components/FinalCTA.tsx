"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-navy-850 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-dark/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
            Ready to build your path?
          </h2>
          <p className="mt-5 text-[16px] text-white/45 max-w-lg mx-auto font-light leading-relaxed">
            Join thousands of people taking smarter steps toward their ideal
            career. Start for free today.
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
            href="#"
            className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm px-6 py-4 text-white hover:bg-white/15 transition-all"
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
                Coming Soon on the
              </div>
              <div className="text-[15px] font-semibold leading-tight">
                App Store
              </div>
            </div>
          </a>
        </motion.div>

        <motion.p
          className="mt-6 text-[11px] text-white/25 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Free to download. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
