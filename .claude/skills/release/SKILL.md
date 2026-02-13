---
name: release
description: Release Command
allowed-tools: Bash, Read, Edit, Glob, Grep, AskUserQuestion
---

# release

Create a release commit and tag, then publish a GitHub release with changelog.

## Steps

Execute each step file in order.

1. Read and execute `.claude/skills/release/step/01-pre-check.md`
2. Read and execute `.claude/skills/release/step/02-gather-changes.md`
3. Read and execute `.claude/skills/release/step/03-update-version.md`
4. Read and execute `.claude/skills/release/step/04-create-release.md`
