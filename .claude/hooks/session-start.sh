#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

claude plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill --scope project
claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill --scope project
