# GitHub Copilot Instructions

This file is the Copilot-specific entry point. It exists only to point Copilot at the tool-agnostic harness — it must not duplicate or fork the actual rules, since those live in `harness/` and are shared across every coding agent used on this project.

## Read first

1. `/AGENTS.md` — the project map.
2. `/harness/context/*.md` — what this project is and how it is organized.
3. `/harness/rules/*.md` — hard constraints, apply to everything you generate or suggest.

## When implementing a GitHub Issue

Follow `/harness/skills/implement-issue/SKILL.md` step by step. Do not skip exploration (`/harness/skills/explore-repository/SKILL.md`) even for suggestions that feel obvious — Copilot's inline-completion instincts are exactly the case this step guards against, since a plausible-looking completion can still duplicate an existing hook, service, or component.

## When suggesting code in a specific directory

Read the matching file in `/harness/instructions/` before suggesting a component, hook, service, schema, or lib utility:

- `components/` -> `/harness/instructions/components.md`
- `hooks/` -> `/harness/instructions/hooks.md`
- `services/` -> `/harness/instructions/services.md`
- `schemas/` -> `/harness/instructions/schemas.md`
- `lib/` -> `/harness/instructions/lib.md`

## Examples to imitate

`/harness/examples/` holds the canonical pattern for each file category. Prefer matching an existing example's shape over generating a novel structure.

## Scope discipline

Copilot in particular tends to over-suggest nearby "improvements." Do not act on those instincts — see `/harness/rules/scope.md`. Suggest only what the current issue or prompt actually asks for.

## This file is not the harness

Nothing here overrides or restates `/harness/`. If this file and `/harness/` ever appear to disagree, `/harness/` is authoritative — treat the disagreement as a bug in this file to flag, not a choice to make.
