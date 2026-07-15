# PathBuild Web — post-launch spec verification (2026-07-15)

Production check of https://www.pathbuild.app after PR #1 merged (main `0568499`).
Evidence gathered from the live site via headless Chromium (gstack browse) and HTTP checks.

## Verified PASS on production

| Spec item | Evidence |
|---|---|
| All routes live | `/`, `/pricing`, `/support`, `/how-it-works`, `/about`, `/legal/privacy`, `/legal/terms`, `/legal/subscription` all 200 |
| Internal links | Full crawl of nav/footer/body hrefs across all routes — every internal link 200; `#how-it-works` anchor present |
| Hero + story | H1 "Your whole job search. One app.", eyebrow, trust line "You approve every application", six-scene "From swipe to sent" scroll story |
| System typography | `-apple-system` stack in compiled CSS; no self-hosted Apple fonts in repo |
| Reduced motion | `prefers-reduced-motion` rules in compiled CSS |
| Accessibility spot checks | "Skip to content" link, single H1, semantic landmarks, descriptive labels |
| SEO | Title, meta description, full Open Graph (`og.png` 1200×630 + alt), JSON-LD `SoftwareApplication` + `FAQPage` (FAQ visible on page), `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon set |
| Real product screens | `public/screenshots/` (jobs-card, should-you-apply, profile-career, profile-menu) rendered in phone frames; "Not a mockup. The product." section |
| No fake social proof | Old press logos (Stripe/Notion/Linear/Vercel), testimonials, counts all removed |
| Pricing consistency | $0 Free / $14.99 month / $34.99 year ($2.92/mo equivalent) consistent across homepage, /pricing, /legal/subscription; trial + auto-renew + cancel disclosures near CTA |
| Legal reconciliation | Privacy/terms/subscription describe application submission, employer sharing only after user approval, document uploads, deletion; support@pathbuild.app + privacy@pathbuild.app present |
| Console/network | No JS console errors; no failed requests on load |
| Responsive | Screenshots at 375×812 / 768×1024 / 1280×720 in this folder — no overflow, CTA above fold on mobile |

## FAIL found and fixed

- **App Store CTA 404** — `apps.apple.com/app/pathbuild/id6743108030` returns 404; iTunes
  lookup/search empty in US, MY, SG, GB, AU, CA storefronts. The app is not yet public.
  **Fix:** `APP_STORE_LIVE = false` flag in `lib/site.ts`; all download CTAs (hero, header,
  pricing, final CTA, about, how-it-works) render a non-interactive "Coming soon to the
  App Store" state; footer Download link hidden; JSON-LD `url` points to site instead of
  the dead listing. **At launch: flip `APP_STORE_LIVE` to `true` — everything restores.**

## Not measured this session (honest gaps)

- **Lighthouse scores** — no stored report; run post-launch. Perf-positive facts verified:
  static rendering, no console errors, transforms/opacity motion, single CSS bundle.
- **Cross-browser matrix** (Safari/Firefox) and full keyboard-only walkthrough — Chromium
  evidence only.
- **Analytics** — none detected on the site (no tracking scripts), so no cookie banner is
  required; nothing to document beyond "no analytics installed".

## Founder-review items still open

1. Legal pages are live but marked "founder/legal review required" in the build docs — read
   `/legal/privacy`, `/legal/terms`, `/legal/subscription` once.
2. Confirm support@ / privacy@ mailboxes actually receive mail.
3. Confirm Free vs Pro boundaries + $14.99/$34.99 match the App Store product before launch.
4. When the app is approved: verify the listing URL, then set `APP_STORE_LIVE = true` in
   `lib/site.ts` (single flag, restores every CTA).
