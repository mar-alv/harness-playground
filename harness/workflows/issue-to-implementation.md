# Workflow: Issue to Implementation

## Lifecycle

```
GitHub Issue
    |
Understand requirements
    |
Explore repository
    |
Find examples
    |
Plan
    |
Implement
    |
Unit tests
    |
E2E tests when applicable
    |
Typecheck/lint
    |
Review
    |
Definition of Done
```

## How the pieces fit together

1. **Understand requirements** — read the issue fully; extract requirements, acceptance criteria, and constraints (`harness/skills/implement-issue/SKILL.md`, steps 1-4).
2. **Explore repository** — run `harness/skills/explore-repository/SKILL.md`. This is the planner role's primary activity (`harness/agents/planner.agent.md`).
3. **Find examples** — check `harness/examples/` for the canonical pattern matching the category of change.
4. **Plan** — the planner role produces a short, concrete plan naming files to touch and why, plus any flagged ambiguities.
5. **Implement** — the implementer role (`harness/agents/implementer.agent.md`) executes the plan, following `harness/rules/` and the relevant `harness/instructions/*.md`.
6. **Unit tests** — written alongside implementation for `services/`, `hooks/`, `lib/` changes (`harness/skills/write-unit-tests/SKILL.md`).
7. **E2E tests when applicable** — written for new or changed user-facing flows (`harness/skills/write-e2e-tests/SKILL.md`).
8. **Typecheck/lint** — run as part of validation before review; failures here block moving to review.
9. **Review** — the reviewer role (`harness/agents/reviewer.agent.md`) independently checks the result against `harness/skills/review-implementation/SKILL.md`.
10. **Definition of Done** — final checklist (`harness/definition-of-done.md`) before the issue is considered complete.

## What happens when a step fails

- **Requirements are ambiguous or incomplete**: stop before planning; report what is missing rather than assuming.
- **Exploration finds no reusable pattern and no example fits**: proceed to plan a new implementation, but note in the plan that this establishes a new pattern (so a future example can be added).
- **Implementation reveals the plan was wrong or insufficient**: return to planning rather than improvising scope changes inline.
- **Tests fail**: diagnose with `harness/skills/fix-failing-tests/SKILL.md`; fix the right layer (implementation, test, or environment); if unresolved after a bounded number of attempts, stop and report.
- **Typecheck/lint fails**: fix directly if the fix is within scope; if it reveals a broader typing problem outside scope, report it rather than expanding the change to fix it.
- **Review fails**: specific feedback returns to the implementer role; this is a normal loop, not a failure state, but should not repeat indefinitely — if review keeps failing on the same point, that is itself a signal to stop and reconsider the plan.

## Bounded autonomy

This workflow is designed to have explicit stopping points, not to run indefinitely toward "done" at any cost. See the bounded-autonomy principle in `harness/context/workflow.md` and `harness/rules/general.md`. When stopped, always report: what was attempted, what failed, the believed blocker, and what is needed to continue.
