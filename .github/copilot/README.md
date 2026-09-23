# Copilot Adapter

This directory holds GitHub-Copilot-specific integration only. It is intentionally thin.

## Why this exists separately from harness/

`harness/` is designed to be usable by any coding agent (GitHub Copilot, Cursor, Claude Code, etc.) without modification. Anything that is specific to how a particular tool discovers or consumes instructions belongs here instead, so that adding support for a second tool later never requires touching `harness/`.

## Contents

- `../copilot-instructions.md` (repo root, required location for Copilot to auto-load it) — the actual entry point Copilot reads. It only points into `harness/`; it does not restate any rule.
- `instructions/` — optional path-scoped instruction files, for the parts of Copilot's instruction system that support directory-specific targeting beyond what a single root file can express.

## Adding support for another tool

Create a sibling directory (e.g. `.cursor/`, or the Claude Code equivalent) that follows the same principle: a minimal adapter that points at `harness/`, translated into whatever discovery mechanism that tool uses. Never fork the actual rules into the new adapter — if a rule needs to change, it changes once, in `harness/`.
