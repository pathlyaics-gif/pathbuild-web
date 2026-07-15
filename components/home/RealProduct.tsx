import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";

// Real screens from the iPhone app, each with an honest one-line caption.
const SHOTS = [
  {
    src: "/screenshots/jobs-card.png",
    alt: "A swipeable PathBuild job card for a B2B Marketing Manager role, showing a fit-score ring, a “mixed fit” summary, salary range, and skip (✕) and add (✓) buttons above the Jobs, Applications, Emails and Profile tab bar.",
    caption:
      "Swipe through real roles. Every card carries a 0–100 fit score and the reasons behind it.",
  },
  {
    src: "/screenshots/should-you-apply.png",
    alt: "PathBuild's “Should you apply?” sheet for a role, listing the reasons for a 55-out-of-100 score and a terracotta “Apply with PathBuild” button.",
    caption:
      "See why a job fits, then apply. Nothing is submitted until you review and approve it.",
  },
  {
    src: "/screenshots/profile-career.png",
    alt: "The PathBuild Profile screen showing a best-fit career with an 89 score, an applications summary, and the résumé PathBuild tailors for each application.",
    caption:
      "Your profile and résumé power every application, tailored to each role.",
  },
] as const;

/**
 * Proof that the product is real: three actual iPhone screens in phone frames,
 * revealed with a gentle stagger. id="product" matches the header's Product link.
 */
export function RealProduct() {
  return (
    <Section id="product" aria-label="Real screens from the PathBuild app">
      <div className="max-w-prose">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          Real screens
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Not a mockup. The product.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
          These are real screens from PathBuild on iPhone — the same fit scores,
          application prep, and profile you use every day.
        </p>
      </div>

      <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {SHOTS.map((shot, i) => (
          <MotionReveal key={shot.src} as="li" delay={i * 90} className="flex flex-col items-center">
            <ProductScreenshot src={shot.src} alt={shot.alt} />
            <p className="mt-6 max-w-xs text-center text-base leading-relaxed text-ink-secondary">
              {shot.caption}
            </p>
          </MotionReveal>
        ))}
      </ul>
    </Section>
  );
}
