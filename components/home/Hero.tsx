import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import {
  HERO_EYEBROW,
  HERO_HEADLINE_LINES,
  HERO_SUB,
  HERO_TRUST_LINE,
  HERO_QUALIFIER,
  CTA_SECONDARY,
} from "@/lib/site";

// Descriptive alt for the LCP hero screenshot (real product screen).
const HERO_SHOT_ALT =
  "The PathBuild app open to a job's fit breakdown: a 55-out-of-100 fit score labeled a mixed fit, a “Should you apply?” summary listing the reasons behind it, and a terracotta “Apply with PathBuild” button.";

/**
 * Homepage hero. Copy-first on the left (holds the page's single <h1>), the real
 * LCP screenshot on the right inside a large phone frame with soft layered cards
 * and a subtle accent radial behind it. ProductScreenshot has no size prop, so we
 * compose PhoneFrame(size="lg") + next/image directly to honor the large frame
 * while keeping this the priority LCP image.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
            {HERO_EYEBROW}
          </p>
          <h1 className="mt-4 text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
            {HERO_HEADLINE_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-secondary">
            {HERO_SUB}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AppStoreCTA size="lg" />
            <Button variant="ghost" size="lg" href="#how-it-works">
              {CTA_SECONDARY}
            </Button>
          </div>

          <div className="mt-8 flex flex-col gap-1.5">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-ink">
              <Check className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden />
              {HERO_TRUST_LINE}
            </p>
            <p className="text-sm text-ink-muted">{HERO_QUALIFIER}</p>
          </div>
        </div>

        {/* Right: LCP screenshot with layered cards + accent radial behind it */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          >
            <div className="h-[380px] w-[380px] rounded-full bg-accent-soft opacity-70 blur-3xl sm:h-[460px] sm:w-[460px]" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-2 top-8 z-0 hidden h-64 w-48 rotate-6 rounded-2xl bg-surface shadow-pb-lg sm:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-2 z-0 hidden h-56 w-44 -rotate-6 rounded-2xl bg-surface-peach shadow-pb-md sm:block"
          />

          <PhoneFrame size="lg" className="relative z-10">
            <Image
              src="/screenshots/should-you-apply.png"
              alt={HERO_SHOT_ALT}
              width={390}
              height={844}
              priority
              sizes="(max-width: 640px) 78vw, 360px"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      </Container>
    </section>
  );
}
