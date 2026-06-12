import Link from "next/link";
import { AppStoreBadge } from "@/components/landing/AppStoreBadge";
import { FitRing } from "@/components/landing/FitRing";
import { LandingNav } from "@/components/landing/LandingNav";
import { PhoneHero } from "@/components/landing/PhoneHero";
import { Reveal } from "@/components/landing/Reveal";
import { SwipeScrub } from "@/components/landing/SwipeScrub";
import { APP_STORE_URL, CONTACT_MAILTO } from "@/lib/site";

const FIT_FACTORS = [
  {
    up: true,
    name: "Skills",
    line: "Your design-systems work covers 8 of 10 requirements.",
    delta: "+12",
  },
  {
    up: true,
    name: "Pay",
    line: "$120–145k sits above your current target.",
    delta: "+8",
  },
  {
    up: true,
    name: "Location",
    line: "Hybrid in Austin — inside the radius you set.",
    delta: "+5",
  },
  {
    up: false,
    name: "Experience",
    line: "They want 6 years. You have 4 — expect a stretch.",
    delta: "−9",
  },
];

const CONTROL_STEPS = [
  {
    n: "01",
    title: "We draft",
    line: "A tailored application, written from your profile and the job's real requirements.",
  },
  {
    n: "02",
    title: "You review",
    line: "Read it. Edit it. Or toss it — nothing moves until you're happy.",
  },
  {
    n: "03",
    title: "You send",
    line: "One tap, sent as you. Never auto-sent. Never behind your back.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ember-bright">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="landing relative overflow-x-clip">
      {/* Page-scoped body color so overscroll edges stay dark on this route */}
      <style>{`body{background:#0b0b0c}`}</style>
      <noscript>
        <style>{`
          .landing [data-reveal]{opacity:1;transform:none}
          .landing .swipe-track{height:auto}
          .landing .swipe-stage{position:static;height:auto;padding:48px 0 64px}
        `}</style>
      </noscript>

      <div className="landing-grain" aria-hidden />
      <LandingNav />

      {/* ── 1 · Hero ─────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-24 pt-28 sm:px-8 sm:pt-36 lg:pb-32">
        <div
          className="glow-orb -left-40 -top-48 h-[640px] w-[640px] opacity-80"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1140px] items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-bone-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-bright" aria-hidden />
                PathBuild for iPhone
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-serif text-[clamp(2.75rem,7.5vw,4.6rem)] leading-[1.04] tracking-[-0.025em] text-bone">
                Stop guessing.
                <br />
                See what <em className="text-ember-bright">fits</em>.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-6 max-w-[460px] text-[16px] leading-relaxed text-bone-dim sm:text-[17px] lg:mx-0">
                PathBuild scores every job against your skills, pay, and goals
                — a 0–100 fit score before you apply. Swipe right on the ones
                worth your time.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-pill bg-ember px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_36px_rgba(193,80,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-bright"
                >
                  Get PathBuild
                </a>
                <AppStoreBadge eager />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 text-[13px] text-bone-mute">
                Free to download · iPhone
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <PhoneHero />
          </Reveal>
        </div>
      </section>

      {/* ── 2 · The swipe (scroll-scrubbed) ──────────────────────────── */}
      <section id="demo" aria-label="Swipe to apply demo">
        <SwipeScrub />
      </section>

      {/* ── 3 · Why it fits ──────────────────────────────────────────── */}
      <section id="features" className="relative px-5 py-24 sm:px-8 lg:py-36">
        <div
          className="glow-orb -right-64 top-12 h-[560px] w-[560px] opacity-60"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <Reveal>
              <SectionLabel>The fit score</SectionLabel>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-bone">
                Know <em className="text-ember-bright">why</em> — before you
                apply.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-[420px] text-[15.5px] leading-relaxed text-bone-dim lg:mx-0">
                Every score opens into plain reasons: what raises it, and what
                pulls it down. The score falls when something doesn&apos;t line
                up — and we say so. You decide with the whole picture.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto w-full max-w-[520px]">
            <Reveal>
              <div className="rounded-4xl border border-white/[0.07] bg-night-panel p-6 sm:p-8">
                <div className="flex items-center gap-4 border-b border-white/[0.06] pb-5">
                  <FitRing value={92} size={64} strokeWidth={9} label="" />
                  <div>
                    <p className="text-[15px] font-semibold text-bone">
                      Why this fits
                    </p>
                    <p className="mt-0.5 text-[13px] text-bone-dim">
                      Senior Product Designer · Northwind
                    </p>
                  </div>
                </div>

                <ul className="mt-2 list-none">
                  {FIT_FACTORS.map((f, i) => (
                    <Reveal as="li" key={f.name} delay={i * 70}>
                      <div className="flex items-start gap-3.5 border-b border-white/[0.05] py-4 last:border-b-0">
                        <span
                          aria-hidden
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${
                            f.up
                              ? "bg-ember/15 text-ember-bright"
                              : "bg-white/[0.07] text-bone-dim"
                          }`}
                        >
                          {f.up ? "+" : "–"}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[14px] font-semibold text-bone">
                            {f.name}
                            <span className="sr-only">
                              {f.up
                                ? " — raises the score"
                                : " — lowers the score"}
                            </span>
                          </p>
                          <p className="mt-0.5 text-[13.5px] leading-relaxed text-bone-dim">
                            {f.line}
                          </p>
                        </div>
                        <span
                          className={`text-[13px] font-semibold tabular-nums ${
                            f.up ? "text-ember-bright" : "text-bone-mute"
                          }`}
                        >
                          {f.delta}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · You're in control ────────────────────────────────────── */}
      <section id="how-it-works" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-[1140px]">
          <div className="mx-auto max-w-[560px] text-center">
            <Reveal>
              <SectionLabel>You&apos;re in control</SectionLabel>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-bone">
                Nothing sends without you.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-bone-dim">
                A swipe right starts a draft — not an application.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6">
            {CONTROL_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 140}>
                <div className="h-full rounded-4xl border border-white/[0.07] bg-night-panel p-7">
                  <p className="font-serif text-[28px] text-ember-bright">
                    {step.n}
                  </p>
                  <p className="mt-4 text-[17px] font-semibold text-bone">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-bone-dim">
                    {step.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 · Replies, tracked ─────────────────────────────────────── */}
      <section id="replies" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 mx-auto w-full max-w-[440px] lg:order-1">
            <Reveal>
              <div className="rounded-4xl border border-white/[0.07] bg-night-panel p-6">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div>
                    <p className="text-[14px] font-semibold text-bone">
                      Senior Product Designer
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-bone-dim">
                      Northwind · Applied Tuesday
                    </p>
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-bone-dim">
                    Sent
                  </span>
                </div>

                <Reveal delay={450}>
                  <div className="mt-4 flex items-start gap-3 rounded-3xl border border-ember/25 bg-night-raise p-4">
                    <span
                      aria-hidden
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember/15 text-[13px] font-bold text-ember-bright"
                    >
                      M
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="truncate text-[13px] font-semibold text-bone">
                          Mara · Northwind Recruiting
                        </p>
                        <span className="flex items-center gap-1.5 text-[11px] text-bone-mute">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-ember-bright"
                            aria-hidden
                          />
                          now
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-bone-dim">
                        Thanks for applying — are you free Thursday?
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <Reveal>
              <SectionLabel>After you apply</SectionLabel>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-bone">
                Replies land here, too.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-[400px] text-[15.5px] leading-relaxed text-bone-dim lg:mx-0">
                When a recruiter writes back, the reply shows up in PathBuild —
                and your phone tells you. No digging through email.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Closing CTA ──────────────────────────────────────────── */}
      <section id="download" className="relative px-5 pb-28 pt-24 sm:px-8 lg:pb-36 lg:pt-32">
        <div
          className="glow-orb -bottom-72 left-1/2 h-[680px] w-[680px] -translate-x-1/2 opacity-70"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[640px] text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.4rem,6vw,3.9rem)] leading-[1.06] tracking-[-0.02em] text-bone">
              Ready when you are.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-[16px] leading-relaxed text-bone-dim">
              Free to download. See your fit before you apply.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9 flex justify-center">
              <AppStoreBadge className="[&>img]:h-[52px]" />
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-bone-mute">
              <Link href="/legal/privacy" className="transition-colors hover:text-bone">
                Privacy
              </Link>
              <Link href="/legal/terms" className="transition-colors hover:text-bone">
                Terms
              </Link>
              <Link href="/support" className="transition-colors hover:text-bone">
                Support
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[13px] text-bone-mute">
            © {new Date().getFullYear()} PathBuild. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-bone-mute">
            <Link href="/legal/privacy" className="transition-colors hover:text-bone">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-bone">
              Terms
            </Link>
            <Link href="/legal/subscription" className="transition-colors hover:text-bone">
              Subscriptions
            </Link>
            <Link href="/support" className="transition-colors hover:text-bone">
              Support
            </Link>
            <a href={CONTACT_MAILTO} className="transition-colors hover:text-bone">
              Contact
            </a>
          </nav>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PathBuild",
            operatingSystem: "iOS",
            applicationCategory: "BusinessApplication",
            url: "https://pathbuild.app",
            description:
              "PathBuild scores every job against your skills, pay, and goals with a 0–100 fit score. Swipe right and PathBuild drafts the application — you review, you send.",
          }),
        }}
      />
    </div>
  );
}
