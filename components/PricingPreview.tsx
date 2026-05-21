"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  APP_STORE_URL,
  FREE_FEATURES,
  PRICING_FOOTNOTE,
  PRICING_SUB,
} from "@/lib/site";

export function PricingPreview() {
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
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Free for now
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            {PRICING_SUB}
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to border border-accent/20 p-8 lg:p-9 h-full flex flex-col shadow-warm-lg relative">
            <span className="inline-block self-start text-[10px] font-bold text-accent-dark uppercase tracking-[0.12em] bg-accent/15 px-3 py-1.5 rounded-full mb-5">
              Early Access
            </span>
            <h3 className="text-lg font-extrabold text-navy-900 mb-1">
              Full access
            </h3>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl font-extrabold text-navy-900">$0</span>
            </div>
            <p className="text-[13px] leading-relaxed mb-6 text-navy-500">
              Every feature included — no subscription required.
            </p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {FREE_FEATURES.slice(0, 6).map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-accent-dark"
                    strokeWidth={2.5}
                  />
                  <span className="text-[13px] text-navy-700 font-medium">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-full py-3 text-[13px] font-bold bg-navy-900 text-white hover:bg-navy-800 shadow-warm transition-all"
            >
              Download Free on the App Store
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-accent-dark hover:text-accent transition-colors"
          >
            See full pricing details & FAQ
            <ArrowRight size={15} />
          </Link>
          <p className="mt-4 text-[11px] text-navy-400">{PRICING_FOOTNOTE}</p>
        </motion.div>
      </div>
    </section>
  );
}
