"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            From scattered to
            <br />
            organized
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Connect Gmail. Auto-import applications. Get matched to roles and
            companies. Never miss a recruiter reply again.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-[23px] md:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/30 via-secondary/20 to-gold/15" />

          <div className="space-y-10">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 shrink-0 w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-[0_4px_16px_rgba(255,138,108,0.25)]">
                    <span className="text-white font-extrabold text-base md:text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-[17px] md:text-lg font-bold text-navy-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-navy-500">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
