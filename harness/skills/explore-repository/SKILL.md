# Skill: Explore Repository

## Goal

Understand what already exists before writing anything new. Prevent premature, duplicated, or convention-breaking implementation.

## When to use

At the start of every task, before implementation planning, regardless of how small the task looks.

## Steps

1. **Restate the task in your own words** — what kind of thing are you building (component, hook, service, schema, page, fix)?
2. **Search for existing implementations of the same concept.** Look for similarly named files, similar domain terms, and similar UI patterns already in `app/` and `components/`.
3. **Search `components/`** for a component that already renders something close to what is needed.
4. **Search `hooks/`** for a hook that already manages similar state or a similar data-fetching pattern.
5. **Search `services/`** for a service that already calls the relevant API or performs a similar transformation.
6. **Search `schemas/`** for a schema that already validates the relevant shape, in full or in part.
7. **Search `tests/`** for existing tests that establish the expected behavior or naming pattern for this kind of unit.
8. **Read the matching file(s) in `harness/examples/`** for the category of thing you are building.
9. **Note architectural conventions observed** (naming, file layout, error-handling style) so the new code matches them.

## Output of this skill

A short internal summary: what exists already, what can be reused directly, what needs to be extended, and what genuinely needs to be created from scratch. This feeds directly into planning (`harness/skills/implement-issue/SKILL.md`, step 7).

## Anti-pattern to avoid

Jumping straight to writing a new file because it is faster than searching. Five minutes of exploration that finds a reusable service is cheaper than a duplicated one that diverges over time.
