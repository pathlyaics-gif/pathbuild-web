#!/bin/bash
# Run once from Terminal: bash push-to-github.sh
# It logs you into GitHub (browser) if needed, then pushes main → deploys your site.

set -euo pipefail
cd "$(dirname "$0")"

GH_BIN=""
if command -v gh >/dev/null 2>&1; then
  GH_BIN="$(command -v gh)"
elif [ -x /tmp/gh_2.67.0_macOS_arm64/bin/gh ]; then
  GH_BIN="/tmp/gh_2.67.0_macOS_arm64/bin/gh"
fi

if [ -z "$GH_BIN" ]; then
  echo "Install GitHub CLI: https://cli.github.com/"
  echo "Or download: https://github.com/cli/cli/releases"
  exit 1
fi

if ! "$GH_BIN" auth status >/dev/null 2>&1; then
  echo "→ Follow the prompts. Open https://github.com/login/device and paste the code."
  "$GH_BIN" auth login -h github.com -p https -w
fi

"$GH_BIN" auth setup-git
git push origin main
echo "→ Push succeeded. If Vercel is linked to this repo, pathbuild.app will update in ~1–2 minutes."
