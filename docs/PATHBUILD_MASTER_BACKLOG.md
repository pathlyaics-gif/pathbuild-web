# PathBuild — Master Backlog

## Security — Web (2026-07-03 audit)

Source: `PATHBUILD_WEB_SECURITY_AUDIT.md`. No P0/P1 issues found. Items below are hardening + follow-ups.

- [ ] **Approve + commit/push web security headers** (F1, P2) — edits staged in `next.config.ts`; pushing auto-deploys via Vercel.
- [ ] **Commit `.gitignore` `.env*` rule** (F2, P3) — prevents future accidental env commits.
- [ ] **Decide HSTS `includeSubDomains`/`preload`** (F3, P3) — domain-wide commitment; confirm subdomains are HTTPS-only first.
- [ ] **CSP hardening** — move `script-src` to a nonce and drop `'unsafe-inline'`; needs middleware + E2E test.
- [x] **Dependencies (F5, P2)** — DONE: bumped `next` 15.5.12→15.5.20 (clears Next.js runtime advisories), rebuilt + verified. Residual postcss/picomatch are transitive build-time only with no non-breaking fix; revisit when Next updates them.
- [ ] **(Optional)** narrow `.claude/settings.local.json` git permissions (F4, P3).
- [ ] **Separate audit: PathBuild iOS backend** — Supabase RLS, service-role/AI keys, CV upload & storage privacy, auth/OAuth/session. This is the real secret/PII surface; it does not exist in the web repo.
