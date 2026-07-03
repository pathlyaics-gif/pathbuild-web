# PathBuild Web — Security Release Gate

**Date:** 2026-07-03 · **Repo:** `pathlyaics-gif/pathbuild-web` @ `93ffcfe`

Ship criteria for the web marketing site.

| Gate | Status | Note |
|---|---|---|
| No hardcoded secrets in source | ✅ PASS | 0 hits across source scan |
| No secrets in git history | ✅ PASS | 0 pattern hits across 82 commits; no env/key file ever added |
| No client-exposed env keys | ✅ PASS | site uses no `NEXT_PUBLIC_*` / client keys |
| No unsafe XSS sink | ✅ PASS | only `dangerouslySetInnerHTML` is static JSON-LD |
| Redirects safe (no open redirect) | ✅ PASS | all redirects are static internal paths |
| External links `rel`-safe | ✅ PASS | every `target=_blank` has `rel="noopener noreferrer"` |
| No committed deploy tokens | ✅ PASS | `push-to-github.sh` uses interactive `gh auth login` |
| Security headers present | ✅ PASS | verified at runtime on local prod server — 6 headers emit, `X-Powered-By` absent |
| Production build green | ✅ PASS | `npm run build` exit 0; 13/13 static routes |
| No page regressions under new CSP | ✅ PASS | home + legal 200; CSP loads no external resources |
| `npm audit` (Next.js advisories) | ✅ FIXED | bumped `next` 15.5.12→15.5.20 — clears Next.js SSRF/middleware/cache advisories; residual postcss/picomatch are build-time only with no non-breaking fix (audit §4/F5) |

## Verdict
**READY FOR INTERNAL TESTING.** No P0/P1. The ship-blocking concern — secret leakage to the browser bundle, git history, or CI — is **not present**. P2 headers (F1) fixed and verified at runtime; P3 (F3 HSTS directives) and dependency (F5) items are documented for a founder decision. All changes are staged in the working tree and **not committed or pushed** — awaiting founder approval (a push to `main` auto-deploys via Vercel).
