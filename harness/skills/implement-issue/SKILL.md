# Skill: Implement Issue

## Goal

Turn a GitHub Issue into a complete, tested, reviewed change.

## Steps

1. **Read the issue** in full, including comments/discussion if present.
2. **Identify requirements** — the concrete behavior being asked for.
3. **Identify acceptance criteria** — how "done" will be judged. If none are stated explicitly, infer the minimum reasonable bar from the requirement and state your assumption.
4. **Identify constraints** — anything the issue explicitly restricts (performance, compatibility, "do not touch X").
5. **Explore the repository** — run `harness/skills/explore-repository/SKILL.md`.
6. **Find relevant examples** in `harness/examples/` matching the category of change.
7. **Produce a plan**: which files will be created/changed, in what order, and why. Keep it short — a few bullet points, not a design document.
8. **Implement the feature**, following `harness/rules/*` and the relevant `harness/instructions/*.md` for each layer touched.
9. **Add/update tests** — unit tests for `services/`/`hooks/`/`lib/` changes, e2e tests for new or changed user-facing flows.
10. **Run validation**: typecheck, lint, unit tests, e2e tests where applicable.
11. **Fix legitimate failures** using `harness/skills/fix-failing-tests/SKILL.md` — do not weaken a test to pass it.
12. **Review the implementation** using `harness/skills/review-implementation/SKILL.md`.
13. **Stop and report** if blocked at any step (ambiguous requirement, missing dependency, out-of-scope necessity, repeated test failure) rather than pushing through indefinitely.

## Definition of done

See `harness/definition-of-done.md` — do not consider the issue complete until every applicable item there is satisfied.
