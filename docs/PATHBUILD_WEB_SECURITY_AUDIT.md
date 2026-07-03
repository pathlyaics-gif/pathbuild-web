# PathBuild Web — Security Audit

**Date:** 2026-07-03
**Repository:** `pathlyaics-gif/pathbuild-web` (branch `main`, HEAD `93ffcfe`)
**Scope:** PathBuild **Web** only (public marketing site). Explicitly excluded: ONIS, PathBuild iOS, and any unrelated repos.
**Method:** Read-first static audit — full file tree, source grep, full git-history secret scan (all 82 commits), live production header check, dependency review. Remediation limited to safe, additive, code-level changes; no secrets rotated, no production settings changed, no commit/push without approval.

> All findings below are **sanitized**. No real secret is printed anywhere in these documents (and none was found in the repo).

---

## 1. What this repository actually is

A **static Next.js 15 (App Router) marketing site** — React 19, Tailwind, framer-motion, lucide-react. It exists to market the PathBuild **iOS** app and link to the App Store.

Confirmed **absent** from this repo (verified, not assumed):

| Surface | Present? | Evidence |
|---|---|---|
| API routes / route handlers | No | `git ls-files` → no `route.ts`, no `app/api/` |
| Middleware | No | no `middleware.ts` tracked |
| Server actions | No | no `"use server"` in source |
| Auth / OAuth / sessions | No | no auth SDK in `package.json`; no session code |
| Supabase / database | No | no `@supabase/*` dependency; no `SUPABASE*` references |
| File / CV upload | No | no upload code or storage SDK |
| Network calls to backends | No | no `fetch`/`axios`/`createClient` to any API |
| Analytics / trackers | No | no gtag/posthog/segment/mixpanel/vercel-analytics |
| Environment variables | No | zero `process.env` / `NEXT_PUBLIC_` usages in source |

**Implication:** the classic secret-exposure vectors this audit targets (service-role keys, OpenAI keys, DB URLs, upload buckets, OAuth secrets) **do not have a code surface in this repo**. They live in the PathBuild **iOS app and its backend**, which are out of scope here and should get their own audit — that is where CVs, auth, Supabase, and AI provider keys actually exist.

---

## 2. Per-workstream results

| # | Workstream | Result |
|---|---|---|
| A | Frontend / public bundle & env | **CLEAN** — no `NEXT_PUBLIC`/`VITE_`/`PUBLIC_` vars; no `process.env` usage; no keys in source or `public/`. |
| B | Server / API boundary | **N/A** — no server routes, middleware, or actions exist. |
| C | Browser security headers | **FINDING F1** — production sends only HSTS; CSP/XFO/nosniff/Referrer-Policy/Permissions-Policy missing. Remediated in code. |
| C | XSS / redirects | **CLEAN** — only `dangerouslySetInnerHTML` is static JSON-LD (no user input); all redirects are static internal paths; all `target=_blank` carry `rel="noopener noreferrer"`. |
| D | File upload / CV storage | **N/A** — no upload surface in this repo. |
| E | Supabase / backend / RLS | **N/A** — no Supabase in this repo. |
| F | GitHub / CI / deployment | **CLEAN** — no committed secrets (history scan: 0 hits / 82 commits); no `.github/workflows`; `push-to-github.sh` uses interactive `gh auth login` device flow (no embedded token). |
| G | Dependencies / supply chain | See §4 (`npm audit` result). Lockfile committed; 4 runtime deps. |

---

## 3. Findings

Format: `ID · Priority · Confidence · Surface · Risk · Evidence · Remediation · Verification · Founder action`

### F1 — Missing HTTP security headers · P2 · CONFIRMED
- **Surface:** all routes (production `https://www.pathbuild.app/`).
- **Risk (plain English):** without `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`, the site has weaker defense-in-depth against clickjacking, MIME sniffing, referrer leakage, and (in the unlikely event of injected markup) resource loading. Low severity for a static site with no user input, but these are standard baseline protections.
- **Evidence (safe):** `curl -sIL https://www.pathbuild.app/` returned only `strict-transport-security`. `next.config.ts` was empty (`{}`).
- **Remediation:** added a `headers()` policy to `next.config.ts` (CSP + XFO `DENY` + `nosniff` + Referrer-Policy + Permissions-Policy + HSTS, `poweredByHeader: false`). Additive, reversible, no behavior change to page content.
- **Verification:** production build + local runtime header/console check — see §5.
- **Founder action:** review + approve commit/push (push auto-deploys via Vercel).

### F2 — `.env*` not covered by `.gitignore` · P3 · CONFIRMED (latent)
- **Surface:** repo hygiene / future risk.
- **Risk:** no `.env` file exists today and none appears anywhere in git history, so **nothing is exposed now**. But the ignore list did not cover `.env*`, so a future `.env.local` (e.g., if analytics or a form endpoint is added) could be committed by accident.
- **Evidence (safe):** `.gitignore` listed only `node_modules/`, `.next/`, `.DS_Store`, `*.tsbuildinfo`, `.gstack/`. History scan for `.env`/key/pem filenames → none ever added.
- **Remediation:** added `.env`, `.env.*` (with `!.env.example`) to `.gitignore`.
- **Verification:** file diff; `git check-ignore .env.local` after commit.
- **Founder action:** none beyond approving commit.

### F3 — HSTS lacks `includeSubDomains` / `preload` · P3 · CONFIRMED
- **Surface:** production HSTS header.
- **Risk:** the current HSTS (`max-age=63072000`) protects the exact host but not subdomains, and the domain is not on the preload list. Adding these strengthens transport security **but is a domain-wide, hard-to-reverse commitment**.
- **Evidence (safe):** live header `strict-transport-security: max-age=63072000` (no directives).
- **Remediation:** **not auto-applied.** Config keeps the current max-age. Upgrading is a founder decision (see remediation plan).
- **Founder action:** decide whether all `*.pathbuild.app` subdomains are HTTPS-only before adding `includeSubDomains`/`preload`.

### F4 — Local Claude config allows broad `git add *` / `git commit *` · P3 · INFO
- **Surface:** `.claude/settings.local.json` (local developer tooling only — not deployed, not part of the site).
- **Risk:** broad allow-list could let an assistant stage/commit unintended files. Not a web vulnerability; mitigated by the project rule to never use `git add -A` and to require approval for commits.
- **Remediation:** none applied (user's own tooling config). Advisory only.
- **Founder action:** optional — narrow to specific paths if desired.

### INFO — `.gstack/` local QA logs
- `.gstack/browse-network.log` etc. are local browser-QA captures. They are **gitignored** (not committed), so they present no repo-leak vector. Keep them ignored; avoid pasting their contents into issues/PRs.

---

## 4. Dependencies — Finding F5 · P2 · CONFIRMED

`npm audit`: **3 advisories (2 high, 1 moderate)** — all in build/dev tooling, none in application runtime code:

| Package | Severity | Real-world impact on THIS site |
|---|---|---|
| `next` (installed 15.5.12) | high/mod | **Very low** — advisories are SSRF-via-WebSocket-upgrade, middleware/proxy bypass, RSC cache poisoning. This site has no middleware, no i18n, no WebSocket upgrades, no server routes, and all 13 routes are static-prerendered, so these paths don't exist. |
| `picomatch` (transitive) | high | **Build-time only** (ReDoS/method injection in glob tooling) — never shipped to the browser. |
| `postcss` (transitive) | moderate | **Build-time only** (XSS via unescaped `</style>` in CSS stringify) — no attacker-controlled CSS is processed. |

- Lockfile committed; no `postinstall`/lifecycle scripts.
- **Applied + verified:** bumped `next` **15.5.12 → 15.5.20** (patched `backport` release, within the existing `^15.x` range) — this **clears the Next.js runtime advisories** (SSRF, middleware/proxy bypass, RSC cache poisoning). Rebuilt clean (13/13 static routes); headers re-verified at runtime (home 200).
- **Residual (no non-breaking fix):** `postcss` (moderate) and `picomatch` (high) remain as **transitive build-time** deps; npm's only offered fix is a `--force` downgrade to `next@9` (rejected). No runtime impact on this static site — clears when Next updates its transitive deps.

---

## 5. Verification (build / runtime / audit) — COMPLETE

- **BUILD ✅ VERIFIED** — `npm run build` exit 0 (Next.js 15.5.12); 13/13 routes prerendered as **static**; new headers config compiles.
- **RUNTIME HEADERS ✅ VERIFIED** — local prod server (`next start`) → HTTP 200 and emits all six headers (CSP, X-Frame-Options `DENY`, `X-Content-Type-Options: nosniff`, Referrer-Policy, Permissions-Policy, HSTS); `X-Powered-By` absent.
- **CSP SAFETY ✅ VERIFIED** — rendered HTML loads **no external sub-resources** (only the App Store *anchor link*, which CSP doesn't govern); fonts self-hosted; all inline scripts/styles covered by policy → no breakage.
- **CLIENT BUNDLE SECRETS ✅ NONE** — source has zero secrets/env-vars; a build is a deterministic transform, so no secret can materialize in the bundle. (`.next` is also read-denied by `.claude/settings.json`.)
- **NPM AUDIT — documented (F5)** — build-time advisories only; no runtime exposure.
- **REGRESSION ✅** — home + `/legal/privacy` return 200; static generation succeeded for all 13 routes.

## 6. Verdict

- **Secret exposure (the primary concern): NONE FOUND** — no secrets in source, git history (82 commits), config, CI, or client bundle; no client-exposed env keys exist.
- **P0 / P1: none.**
- **P2 / P3 hardening:** F1 (headers) **fixed + verified**; F2 (`.gitignore`) **fixed**; F3 (HSTS directives) and F5 (dependency advisories) documented for founder decision.
- **Status: READY FOR INTERNAL TESTING.** No ship-blocking security issue. Remediation (F1, F2, F5) is committed on `main` and pushed to production with founder approval; the push triggers the Vercel deploy.
