# Skill: Review Implementation

## Goal

Independently verify that a completed implementation actually satisfies the issue and the project's standards — not just that tests pass.

## What to check

- **Requirements**: does the implementation do what the issue asked, completely?
- **Acceptance criteria**: is each stated criterion demonstrably met?
- **Architecture**: does the change respect the layer boundaries in `harness/context/architecture.md`?
- **Types**: no unjustified `any`, no suppressed type errors.
- **Error handling**: are I/O and validation errors handled per `harness/instructions/services.md` and `harness/rules/code-quality.md`?
- **Tests**: are there unit tests for new logic and e2e tests for new/changed user flows? Do they test real behavior, not implementation details?
- **Accessibility**: do new interactive elements meet the bar in `harness/instructions/components.md`?
- **Documentation**: is anything that meets the bar in `harness/instructions/documentation.md` actually documented?
- **Scope**: does the diff touch only what `harness/rules/scope.md` allows?
- **Unnecessary complexity**: is there an abstraction, dependency, or generalization that was not warranted by the actual requirement?
- **Reuse**: did the implementation reuse existing components/hooks/services/schemas where one already fit, per `harness/skills/explore-repository/SKILL.md`?

## Rule

Do not treat "tests pass" as proof of correctness by itself. Read the actual resulting code and confirm it does what it is supposed to do, independent of what the implementer claimed.

## Output

A pass/fail judgment per checklist item above, and — if any item fails — specific, actionable feedback on what must change before the issue can be marked done (`harness/definition-of-done.md`).
