# PathBuild — Master Backlog

## Security — Web (2026-07-03 audit)

Source: `PATHBUILD_WEB_SECURITY_AUDIT.md`. No P0/P1 issues found. Items below are hardening + follow-ups.

- [ ] **Approve + commit/push web security headers** (F1, P2) — edits staged in `next.config.ts`; pushing auto-deploys via Vercel.
- [ ] **Commit `.gitignore` `.env*` rule** (F2, P3) — prevents future accidental env commits.
- [ ] **Decide HSTS `includeSubDomains`/`preload`** (F3, P3) — domain-wide commitment; confirm subdomains are HTTPS-only first.
- [ ] **CSP hardening** — move `script-src` to a nonce and drop `'unsafe-inline'`; needs middleware + E2E test.
- [ ] **Dependencies (F5, P2)** — bump to next patched `next` 15.x and rebuild; picomatch/postcss advisories are build-time only. `npm audit fix --force` deliberately not run (breaking major bumps).
- [ ] **(Optional)** narrow `.claude/settings.local.json` git permissions (F4, P3).
- [ ] **Separate audit: PathBuild iOS backend** — Supabase RLS, service-role/AI keys, CV upload & storage privacy, auth/OAuth/session. This is the real secret/PII surface; it does not exist in the web repo.
