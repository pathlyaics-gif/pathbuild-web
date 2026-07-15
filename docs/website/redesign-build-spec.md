# PathBuild Web — Premium Redesign Build Spec

Reference for page-building agents. The shared foundation (design tokens +
`components/ui/*` + site chrome) is built and locked. Build pages **only** with
the vocabulary and components below. Do not add fonts, external hosts, or CDNs
(the CSP in `next.config.ts` blocks them). System font stack only.

---

## 1. Token & Tailwind vocabulary

Semantic Tailwind names map to CSS variables in `app/globals.css`. **Always use
the semantic names below — never raw hex, and never the legacy `cream`/`ebony`.**

### Color (60 / 30 / 10 — terracotta is accent only)
| Purpose | Class(es) |
| --- | --- |
| Page background (warm white) | `bg-bg` / alt band `bg-bg-alt` |
| Card / panel surface | `bg-surface`, `bg-surface-elevated`, `bg-surface-peach` |
| Primary text | `text-ink` |
| Secondary / body text | `text-ink-secondary` |
| Muted / meta text | `text-ink-muted` |
| Accent fill (buttons) | `bg-accent`, hover `bg-accent-hover` |
| Accent text on light (AA) | `text-accent-strong` |
| Accent tint / soft bg | `bg-accent-soft` |
| Accent hairline | `border-accent-border` |
| Text on accent fill | `text-accent-fg` |
| Hairline divider | `border-divider` |

Use accent for **one** thing per view (CTA or a single highlight). No blue/purple
gradients, no neon, no glow except the primary button's built-in `shadow-glow`.

### Layout, spacing, shape, depth, motion
- Width: `max-w-content` (1280) for bands, `max-w-prose` (760) for reading columns.
- Horizontal padding: get it from `<Container>` — don't hand-roll.
- Vertical rhythm: get it from `<Section>` (`py-20 sm:py-28 lg:py-36`). Spacing values divisible by 4/8 only.
- Radii: `rounded-sm|md|lg|xl|2xl` (12→40px), `rounded-pill`.
- Shadow: `shadow-pb-sm|md|lg|xl` (soft, warm), `shadow-glow` (primary CTA only).
- Motion: `duration-fast|standard|slow|editorial` + `ease-smooth`. Transform/opacity only. Reveal-on-scroll = `<MotionReveal>` (never animate layout/color in JS).
- Font: `font-sans` (Apple system stack) is the only family. Build hierarchy with weight/size, not typefaces. No serif.

---

## 2. Components

All under `@/components/ui/*` unless noted. Signatures are exact.

### `Container` — `@/components/ui/Container`
`{ children; className?; as?: ElementType }` — centered max-w-content + responsive padding.
```tsx
<Container className="flex items-center justify-between">…</Container>
```

### `Section` — `@/components/ui/Section`
`{ children; className?; id?; alt?: boolean; bleed?: boolean; "aria-label"?: string }` — semantic section + vertical rhythm; wraps in Container unless `bleed`.
```tsx
<Section id="product" alt aria-label="What PathBuild does">…</Section>
```

### `Button` — `@/components/ui/Button`
`{ variant?: "primary"|"secondary"|"ghost"; size?: "md"|"lg"; className?; children } & (anchor props with href | button props)`. Renders `<a>` when `href` is set, else `<button>`.
```tsx
<Button href="/pricing" variant="secondary" size="lg">See pricing</Button>
```

### `AppStoreCTA` — `@/components/ui/AppStoreCTA`
`{ variant?: "button"|"badge"; size?: "md"|"lg"; className? }`. The one download control — links to `APP_STORE_URL`, opens a new tab, accessible name `APP_STORE_A11Y_LABEL`. **Use this for every "download" action; never hand-build App Store links.**
```tsx
<AppStoreCTA />                    {/* terracotta button + Apple glyph */}
<AppStoreCTA variant="badge" size="lg" />
```

### `PhoneFrame` — `@/components/ui/PhoneFrame`
`{ children; className?; size?: "sm"|"md"|"lg" }` — pure-CSS iPhone bezel at 9:19.5. Put any screen content inside.
```tsx
<PhoneFrame size="lg"><video … /></PhoneFrame>
```

### `ProductScreenshot` — `@/components/ui/ProductScreenshot`
`{ src; alt (required, descriptive); priority?; className? }` — a real screenshot inside a PhoneFrame. Screenshots live in `/public/screenshots/*`.
```tsx
<ProductScreenshot src="/screenshots/should-you-apply.png" alt="A job showing a 92 out of 100 fit score with reasons" priority />
```

### `MotionReveal` — `@/components/ui/MotionReveal` (client)
`{ children; className?; delay?: number (ms); as?: ElementType }` — reveal-on-scroll (once). CSS does the animation and reduced-motion; this only toggles a class. Stagger siblings with `delay`.
```tsx
<MotionReveal delay={80}><Card/></MotionReveal>
```

### Site chrome (already mounted in `app/layout.tsx` — do not re-add per page)
- `SiteHeader` — `@/components/SiteHeader` (sticky, glass-on-scroll, mobile menu).
- `SiteFooter` — `@/components/SiteFooter` (columns, trust row, © 2026 literal).

### `LegalLayout` — `@/components/LegalLayout`
`{ title; effectiveDate: string; children; toc?: { id; label }[] }` — readable legal shell; pass plain `<h2 id>`, `<h3>`, `<p>`, `<ul>` as children (auto-styled). `toc` renders a sticky rail ≥1024px.
```tsx
<LegalLayout title="Privacy Policy" effectiveDate="July 15, 2026" toc={[{id:"data",label:"Data we handle"}]}>…</LegalLayout>
```

All copy/links come from `@/lib/site.ts` (`APP_STORE_URL`, `CTA_PRIMARY`,
`CONTACT_EMAIL`/`CONTACT_MAILTO`, `FEATURE_CARDS`, `HOW_IT_WORKS_STEPS`,
`FAQ_ITEMS`, pricing, etc.). Import copy; do not inline new marketing strings.

---

## 3. Honest-copy guardrails (non-negotiable)

PathBuild is an **iPhone job-search + application assistant**. Keep every claim true:

- **"Submits after you approve"** is the core promise — always pair it with the
  qualifiers: some roles are **external-apply** (finished on the employer's site)
  or need **one secure step** (verification / CAPTCHA). Never imply fully
  automatic, hands-off applying to *every* job.
- It **scores each job 0–100** and **prepares/fills supported employer forms**.
  Say "supported employer forms," not "any job everywhere."
- **No career-quiz / personality-test language.** It is not a quiz. It scores
  real jobs against the user's profile.
- **No fabricated proof** — no invented user counts, testimonials, star ratings,
  "#1", success rates, or logos of companies not actually involved.
- **No overpromising outcomes** — don't promise interviews, offers, or that it
  applies "for you" without the approval + external-apply/secure-step caveats.
- Employer **replies come back into the app**, linked to the application.
- Control language stays true: user reviews before anything is sent; documents
  stay attached to the account; sensitive questions are asked, never guessed;
  account/data deletable in-app.
- CTAs: clear over clever. The download CTA is `CTA_PRIMARY`
  ("Download for iPhone") via `<AppStoreCTA>`.

When in doubt, mirror the wording already in `lib/site.ts` — it is the approved
source of truth.
