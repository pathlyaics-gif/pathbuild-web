# PathBuild Web — Current Production Site Audit

**Author:** Agent A (product / brand direction)
**Purpose:** Baseline audit of the **pre-redesign** live site, required before the `redesign/premium-website` work lands. This documents what exists *today* so the redesign can be judged against a known starting point.
**Snapshot audited:** `main` branch (the live/production state). Inspected via `git show main:<file>` — the working tree already contains redesign edits and was deliberately **not** used.
**Repo:** `pathlyaics-gif/pathbuild-web`
**Routes covered:** `/`, `/about`, `/how-it-works`, `/pricing`, `/support`, `/legal/privacy`, `/legal/terms`, `/legal/subscription` (plus two orphan routes `/intro`, `/onboarding`).

---

## Executive summary

The current site is **two products wearing three skins and telling three different stories.**

1. **Split design system.** The homepage (`/`) is a dark, cinematic, Playfair-serif film set on `#0B0B0C` with a terracotta accent `#C1502A`. Every other page is a light cream (`#FBF7F0`) layout — and even those split into a *marketing* treatment (DM Serif headings, coral `#E8734A` accent, warm cards/gradients) and a plainer *legal* treatment (bold sans headings, brown text mislabelled `navy`). Two different accent oranges and four font families ship site-wide.

2. **Three conflicting product narratives.** The homepage sells a **swipe-to-apply application assistant** that "scores every job 0–100" and "drafts each application for you to review and send." The marketing sub-pages + `lib/site.ts` still sell an **AI career-discovery quiz**. The Terms of Service describe **only the career quiz** and never mention applications at all. A visitor gets a different value proposition depending on which page they land on.

3. **Legal and commerce are internally contradictory.** The Terms say the app is "free during early access" with paid plans purely "hypothetical," while the Subscription Terms + Pricing page **actively sell PathBuild Pro at $14.99/mo · $34.99/yr today.** Effective dates are out of sync (Terms/Privacy Mar 31 2026 vs Subscription May 25 2026). The Privacy Policy is silent on résumés, application documents, employer submission, and inbox/reply monitoring — the very things the homepage now advertises — and three surfaces still promise the data is "never shared with employers/recruiters," which cannot be true for an app that submits applications.

4. **A capability-truth gap.** "We draft, you send — nothing goes out on its own" is the load-bearing honesty claim on the homepage. The product now submits supported applications after approval and surfaces employer replies. This copy must be rewritten to be truthful, and Privacy/Terms updated to match.

5. **Polish/perf/quality debt.** A 101-frame JPG canvas-scrub hero preloads all 101 images on mount (LCP/bandwidth risk); there is no analytics and no test suite; and the repo carries an entire orphaned prior landing system (dead components + dead CSS + unused assets). The security-header/CSP posture in `next.config.ts` is a genuine strength.

The prioritized **"Must fix in redesign"** list is at the end.

---

## 1. Design system — split brain

The layout in `app/layout.tsx` loads **four** Google font families and exposes them as CSS variables:

- `DM_Serif_Display` → `--font-dm-serif` (site default headings, `font-serif`)
- `Instrument_Sans` → `--font-instrument` (site default body, applied on `<body>`)
- `Playfair_Display` → `--font-playfair` (homepage headings)
- `Inter` → `--font-inter` (homepage body)

There are effectively **three visual treatments**:

| Surface | Background | Headings | Body | Accent | Notes |
|---|---|---|---|---|---|
| Homepage `/` | `#0B0B0C` (`night`) | Playfair Display, weight 400 "light" | Inter | **`#C1502A`** (`ember`) | Dark, cinematic; body forced dark via inline `<style>{`body{background:#0B0B0C}`}</style>` in `app/page.tsx` |
| Marketing (`/about`, `/how-it-works`, `/pricing`, `/support`) | `bg-cream` `#FBF7F0` | `font-serif` = DM Serif Display | Instrument Sans | **`#E8734A`** (`coral`/`accent`) | Warm white cards, coral gradient CTAs |
| Legal (`/legal/*`) | inherits cream body | **bold sans** (`text-3xl font-bold`, *not* serif) | `text-navy-500` | `#E8734A` (`text-accent`) | Plainer; no serif, no cream cards |

### 1a. Two accent oranges
Both are defined in `tailwind.config.ts` and both are in active use:

```ts
ember: { DEFAULT: "#C1502A", bright: "#E68A52" },   // homepage
coral: { DEFAULT: "#E8734A", light: "#F09070", dark: "#D45A30" },
accent:{ DEFAULT: "#E8734A", ... },                 // == coral, sub-pages
```
- Homepage components hard-code `text-[#C1502A]` inline (see `components/lp/ScrollHero.tsx`, `HowItWorks.tsx`, `RealAppProof.tsx`, `Credibility.tsx`, `ClosingCTA.tsx`) rather than using the `ember` token.
- Sub-pages use `text-coral` / `text-accent` (`#E8734A`).
- Net effect: the brand "orange" is **two different oranges** depending on route, and one of them bypasses the token system entirely.

### 1b. Token naming smells (`tailwind.config.ts`)
- `navy.900 = #1A1410` … `navy.400 = #9A8B7A` — the scale named **"navy" is actually warm brown.** Legal pages read `text-navy-900` / `text-navy-500` for near-black-brown text.
- `navy.900` (`#1A1410`) is **identical** to `ink.DEFAULT` (`#1A1410`) — duplicated values under two names.
- `coral` and `accent` are the same three hexes duplicated. `background`, `warm`, `sunrise`, `cream`, `wood` all overlap in the same warm-brown space. The palette has many redundant aliases, which is how the two-orange drift crept in.

### 1c. Homepage vs global chrome (correctly suppressed)
The global `components/Navbar.tsx` and `components/Footer.tsx` both early-return `null` for `pathname === "/"` (and `/intro`, `/onboarding`), so the dark homepage is **not** double-chromed — it ships its own `LandingNav` (`components/landing/LandingNav.tsx`) and its own footer inside `ClosingCTA`. This is the one place the split is handled cleanly; worth preserving the intent in the redesign.

---

## 2. Product-story inconsistency — three narratives

### Narrative A — Homepage: a swipe-to-apply **application assistant**
`components/lp/ScrollHero.tsx`:
> **"One tap. / Your whole job search."**
> "PathBuild learns your best-fit career, scores every job 0–100, and drafts each application for you to review and send."

`components/lp/HowItWorks.tsx` — heading "From your profile to applied — without the guesswork." with three steps:
> "See your fit" — "A 0–100 score shows how well each job matches you — and why."
> "Swipe to apply" — "Swipe right to apply, left to skip. You decide what moves forward."
> "We draft, you send" — "We write a tailored application; you review and send it. Nothing goes out on its own."

`app/page.tsx` JSON-LD reinforces it:
> "It drafts each application for you to review and send — nothing auto-sends — and surfaces recruiter replies in-app."

### Narrative B — Marketing sub-pages + `lib/site.ts`: an **AI career-discovery quiz**
`lib/site.ts`:
> `APP_TAGLINE = "AI career discovery for iOS. Find your fit. Discover who's hiring."`
> `APP_HERO_TITLE = "Discover the career that actually fits you."`
> `APP_HERO_SUB = "Answer a few smart questions. AI surfaces the careers that match your interests, strengths, and values — then shows you the companies hiring for them."`

`app/how-it-works/page.tsx` steps (from `HOW_IT_WORKS_STEPS` in `lib/site.ts`): "Answer a few questions" (five-minute quiz) → "Get matched to careers" → "Discover who's hiring" → "Track your applications" → "Nail the application with Pro." **No swipe-to-apply, no drafting-and-sending, no recruiter replies.**

`app/about/page.tsx`:
> "PathBuild is a small team building an AI career discovery app for iOS."
> Value card **"Discovery, Not Quizzes"** — "PathBuild gives you ranked careers, real companies hiring, and the tools to land them."

`app/support/page.tsx`:
> "PathBuild is an AI career discovery app for iOS. Answer a five-minute quiz and we'll match you to careers…"
> "About five minutes. **Twelve thoughtful questions**…"

### Narrative C — Terms of Service: **career quiz only**
`app/legal/terms/page.tsx` §3 "Description of the Service":
> "PathBuild is an AI-powered career discovery app… including but not limited to: An AI-powered career-discovery quiz; AI-powered career matching…; AI-powered company matching and discovery; Job posting fit analysis tools; Daily curated career and company suggestions."

No mention of drafting or submitting applications. (Tellingly, Terms §5 already leaks a newer capability — "email status detections" — that none of the three narratives fully describes, showing the docs were patched piecemeal.)

**Impact:** the single most important thing a marketing site must do — say what the product is — changes on every page. This is the #1 redesign problem to solve before visual polish.

---

## 3. Legal & commerce contradictions

### 3a. "Free early access" vs Pro sold live
`app/legal/terms/page.tsx` §7 "Pricing and Subscriptions":
> "PathBuild is currently free during early access. All features are available at no charge. **We may introduce paid subscription plans in the future; if we do, the following would apply**…"
> "See our Subscription Terms for full details on how paid plans **would work if introduced**."

But paid plans already exist and are actively sold:
- `app/legal/subscription/page.tsx` §1: "**Monthly Plan:** $14.99 per month… **Annual Plan:** $34.99 per year." (values from `MONTHLY_PRICE`/`ANNUAL_PRICE` in `lib/site.ts`).
- `app/pricing/page.tsx`: live "Start 3-Day Free Trial" CTA, "$34.99 /year", "Best Value — 3-Day Free Trial."
- `app/about/page.tsx`: "Pro is $14.99/month or $34.99/year."

The Terms describe a pricing reality that the rest of the site contradicts.

### 3b. Effective dates out of sync
- `app/legal/terms/page.tsx`: "Effective Date: **March 31, 2026**"
- `app/legal/privacy/page.tsx`: "Effective Date: **March 31, 2026**"
- `app/legal/subscription/page.tsx`: "Effective Date: **May 25, 2026**"

The May Subscription doc introduced paid plans; the March Terms were never updated to match (see 3a).

### 3c. Privacy Policy is silent on the actual data flows
`app/legal/privacy/page.tsx` §1 enumerates quiz/profile/activity data and "job postings you submit for fit analysis," but **never mentions**: résumé/CV, application documents or drafts, submitting applications to employers, employer email/inbox reading, or browser automation. §3 "How We Share" lists only:
> "cloud hosting (**Supabase**), **AI processing services**, and analytics tools."

No employers, job boards, or application-delivery processors are named as recipients. §4 even states:
> "We do not send your name, email address, or other directly identifying information to AI services."

That is very hard to reconcile with an app that drafts and submits real applications (which requires name, contact details, and résumé to leave the app and reach employers). **This is the largest legal exposure: the product now transmits user PII/documents to third parties the policy neither discloses nor lists.**

### 3d. "Never shared with employers/recruiters" — untrue for an application-submitting product
- `app/support/page.tsx`: "We never sell your data, **never share it with recruiters or employers**…"
- `app/about/page.tsx` (Shield value): "**Never sold, never shared with recruiters**, deletable anytime."
- `lib/site.ts` FAQ ("Is my data private?"): "We never sell your data, **never share it with recruiters**…"
- Homepage `components/lp/Credibility.tsx` badge: "Private by design."

Meanwhile the homepage advertises drafting/sending applications and "surfaces recruiter replies in-app" — which necessarily shares the user's information *with* employers/recruiters. Flat contradiction between the privacy promise and the product promise.

### 3e. Contact is a personal Gmail on every legal/support page
`lib/site.ts`: `CONTACT_EMAIL = "pathly.ai.cs@gmail.com"`. It surfaces on Privacy (5×), Terms, Subscription, Support ("Email pathly.ai.cs@gmail.com"), and the global Footer ("Contact" / "Email Us"). A consumer Gmail as the sole legal/DPO/support contact reads as pre-launch and creates continuity/deliverability risk for a paid product handling career data.

### 3f. Pricing has two drifting sources of truth
On the **same** `app/pricing/page.tsx`:
- The plan **cards** render `FREE_FEATURES` / `PRO_FEATURES` from `lib/site.ts` — **7 items each**, verbose (e.g. Free includes "Private by design — your data stays yours"; Pro ends with "Every future update, included").
- The comparison **table** renders local arrays `FREE_ROWS` / `PRO_ROWS` — **6 items each**, terse ("AI career quiz", "Career matches with fit scores", …).

Two hand-maintained lists describe the same plans with different wording and different counts; they have already drifted and will keep drifting. There should be one source.

---

## 4. Capability-truth gap (the copy that must become honest)

The homepage's credibility rests on an explicit "you're always in control / nothing auto-happens" promise:

- `components/lp/HowItWorks.tsx`: "We write a tailored application; you review and send it. **Nothing goes out on its own.**"
- `app/layout.tsx` meta description: "Swipe right and PathBuild drafts the application; **you review, you send.**"
- `app/page.tsx` JSON-LD: "drafts each application for you to review and send — **nothing auto-sends**…"
- `components/lp/ClosingCTA.tsx`: "Find the jobs that fit you, see why they do, and **apply on your terms.**"

Per the redesign brief, the product now **submits supported applications after approval** (including external-apply handoffs and a one-secure-action path) and monitors employer email replies. So things *do* leave the app on the user's behalf. The current copy understates/misdescribes real behavior. In the redesign this must be rewritten to be truthful — disclose approval-then-submit, external-apply handoffs, and inbox/reply monitoring — and Privacy/Terms updated in lockstep (see §3c).

---

## 5. Motion & performance

- **101-frame canvas-scrub hero** (`components/lp/ScrollHero.tsx`, `FRAME_COUNT = 101`, `/frames/frame_0001.jpg … frame_0101.jpg`). On mount it loops `new Image()` over **all 101 frames**, firing ~101 parallel JPG requests → bandwidth spike and LCP/interactivity risk on mobile. The track is a 380vh pinned `<canvas>`. Reduced-motion correctly holds the final frame. Note the true hero visual is canvas-drawn (`aria-hidden`) so it contributes nothing to LCP text or assistive tech.
- **framer-motion** reveals/animations throughout (`ScrollHero` copy, `HowItWorks` hover-lift, `RealAppProof` `useInView` slide + infinite `y:[0,-14,0]` float, `ClosingCTA` infinite breathing glow). The infinite float/pulse loops run continuously (minor battery/CPU cost).
- **No analytics.** `package.json` has no analytics dependency, and CSP `connect-src 'self'` (see below) would block third-party beacons anyway. The funnel is entirely unmeasured.
- **No tests.** No `jest` / `vitest` / `playwright` / testing-library in `package.json`; no test files. No automated regression signal.
- **Strict CSP is a real strength** (`next.config.ts`): `default-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, `form-action 'self'`, `connect-src 'self'`, plus HSTS `max-age=63072000`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and a locked `Permissions-Policy` (camera/mic/geo/browsing-topics all `()`), `poweredByHeader: false`. Caveat the file documents: `script-src`/`style-src` still allow `'unsafe-inline'` (a tracked hardening follow-up). Keep this posture through the redesign.

---

## 6. Assets & dead code

**Real screenshots** (`public/screenshots/`): `jobs-card.png`, `should-you-apply.png`, `profile-career.png` are used by `components/lp/RealAppProof.tsx` with honest, matching captions ("Not a mockup. The product."). `profile-menu.png` is referenced **only** by a dead component (`ScrollPhoneShowcase.tsx`) → effectively unused.

**OG image**: `public/og.png`, dark, alt "PathBuild wordmark beside a 98% fit score ring on a dark background" (`app/layout.tsx`). Matches the dark homepage; note it hard-codes "98%" while the product framing is "0–100."

**Unused / legacy assets still in the repo:**
- `public/hero.mp4` — **unused** (the hero is now the frame-canvas).
- `public/logos/{linear,notion,stripe,vercel}.svg` — **unused**. `Credibility.tsx` deliberately shows no partner logos ("No fabricated partner logos, no fake ratings"), which is good — but the fake-partner SVGs still sit in the repo as a temptation/liability.

**Legacy dead components** (orphaned prior landing iteration — imported by nothing that renders):
- `components/landing/`: `AppStoreBadge.tsx`, `FitRing.tsx`, `PhoneHero.tsx`, `SwipeScrub.tsx`, `Reveal.tsx` (they only reference each other).
- `components/lp/`: `AnimatedFitRing.tsx`, `ScrollPhoneShowcase.tsx`, `WhyItFits.tsx`.
- **Dead CSS** that only these dead components use: the entire `.landing { … }` scoped block in `app/globals.css` (`.landing`, `[data-reveal]`, `.glow-orb`, `.swipe-stage`, `.landing-grain`, focus-visible outlines) plus `.text-gradient-coral`, `.glass`, `.float-slow` — none are referenced by any rendered route.

**Orphan routes** (publicly reachable, zero inbound links):
- `app/intro/page.tsx` — a 243-line framer-motion splash that `router.push("/onboarding")`.
- `app/onboarding/page.tsx` — a placeholder: "This is the onboarding page. The intro flow has been completed…" with a "Replay Intro" button that clears `localStorage`. It uses **off-token utility colors** (`text-gray-900`, `text-gray-400`, `border-orange-200`) and a raw `<img>` — off-brand and unfinished. Both should be removed or finished, not left live.

---

## 7. Accessibility & SEO quick flags (from source)

**Positives**
- `<html lang="en">`; `metadataBase` + per-page `title`/`description` set on every route.
- Clean heading order per page: one `<h1>` then `<h2>`/`<h3>`.
- Descriptive `alt` on real screenshots and OG; `AppBadge` has `aria-label`; nav/section `aria-label`s present; `NavLogo` uses the correct decorative-image pattern (`alt="" aria-hidden` beside the "PathBuild" text that names the link).
- Reduced-motion honored in the hero, framer-motion, and CSS.

**Flags**
- **No `robots.txt`, no `sitemap.xml` / `app/sitemap.ts`, no web manifest** anywhere in the repo (CSP even allows `manifest-src` but no manifest exists). Baseline SEO/PWA hygiene is missing for a marketing site.
- **Hero product imagery is invisible to SEO/AT.** The actual hero (phone + fit-score ring) is drawn to an `aria-hidden` `<canvas>` with no text alternative; the real `<h1>` fades out on scroll. Search/assistive tech get little from the most important above-the-fold asset.
- **Contrast to re-check in redesign:** small `#888888` on `#0B0B0C` (Credibility eyebrow, ClosingCTA fine print) and the 0.65rem `#C1502A` uppercase eyebrows on near-black are borderline for small text; `text-ink-muted` (`#8A7D72`) footnotes on cream are similar. Run a contrast pass.
- **Inconsistent heading treatment:** legal pages render headings as bold *sans* while marketing pages use *serif* — a visual inconsistency (not a structural one).

---

## Must fix in redesign (prioritized)

### P0 — truth, legal, and one product story (ship-blockers)
1. **Pick one product narrative and apply it everywhere.** Decide: is PathBuild a career-discovery quiz, a job-fit scorer, or a swipe-to-apply application assistant? Rewrite the homepage, `lib/site.ts`, `/about`, `/how-it-works`, `/pricing`, `/support`, and Terms §3 to tell the *same* story. (§2)
2. **Make the capability copy honest.** Replace "nothing goes out on its own / we draft, you send" with truthful language about approve-then-submit, external-apply handoffs, and reply monitoring. (§4)
3. **Reconcile Terms with reality.** Terms §7 must stop calling paid plans "hypothetical/future" — Pro is sold today. Re-date and align Terms/Privacy/Subscription to one effective date. (§3a, §3b)
4. **Rewrite the Privacy Policy to disclose the real data flows** — résumé/application documents, submission to employers/job platforms, inbox/reply monitoring, browser automation, and the actual list of processors/recipients. Remove or qualify the §4 "we don't send identifying info" claim. (§3c)
5. **Remove or correct "never shared with employers/recruiters"** on `/support`, `/about`, and in `lib/site.ts` — it cannot coexist with an application-submitting product. (§3d)

### P1 — brand coherence and commerce integrity
6. **Unify the design system into one brand.** One background/theme strategy, **one** accent orange (retire either `#C1502A` or `#E8734A`), one heading font decision (serif or sans, applied to legal pages too), and a de-duplicated token set (kill the mislabelled `navy` scale and the `coral`/`accent` duplication). (§1)
7. **Single source of truth for pricing/features.** Collapse `FREE_ROWS`/`PRO_ROWS` and `FREE_FEATURES`/`PRO_FEATURES` into one dataset feeding both the cards and the table. (§3f)
8. **Replace the personal Gmail** with a branded support/legal address (or at least a role alias) across legal, support, and footer. (§3e)

### P2 — performance, hygiene, measurement
9. **Fix the hero load.** Don't eager-fetch all 101 frames on mount — lazy/deferred decode, fewer/optimized frames (or `<video>`/AVIF), and give the hero a real text/LCP element. (§5)
10. **Add baseline SEO/PWA:** `robots`, `sitemap`, and a web manifest; keep the strong CSP/security headers. (§5, §7)
11. **Add analytics** (CSP-compatible / self-hosted given `connect-src 'self'`) so the redesign's funnel is measurable. (§5)
12. **Delete the dead weight:** orphaned `components/landing/*` and `components/lp/{AnimatedFitRing,ScrollPhoneShowcase,WhyItFits}`, the `.landing`/`text-gradient-coral`/`glass`/`float-slow` CSS, `hero.mp4`, the fake partner logos in `public/logos/`, and the unfinished `/intro` + `/onboarding` routes. (§6)
13. **Run an accessibility pass** on small-text contrast and give the hero product imagery a text alternative. (§7)
14. **Introduce at least smoke tests** (build + a couple of route/render checks) — there are currently none. (§5)
