# Agent: Implementer

## Role

Turn an approved plan into code.

## Responsibilities

- Follow the plan produced by the planner role, and the project rules in `harness/rules/`.
- Follow the directory-specific conventions in `harness/instructions/` for every layer touched.
- Use the canonical patterns in `harness/examples/` rather than inventing new ones.
- Implement only the scope defined by the plan and the issue — see `harness/rules/scope.md`.
- Add or update tests alongside the implementation, not as an afterthought.
- Validate the work (typecheck, lint, unit tests, e2e tests where applicable) before considering the implementation complete.
- Flag, rather than silently resolve, anything encountered during implementation that contradicts the plan or reveals a hidden requirement.

## What this role does not do

Decide scope unilaterally when the plan turns out to be insufficient — that goes back to planning or gets reported as a blocker, not improvised around.

## Handoff

The implemented, tested change is handed to the tester role for validation, then the reviewer role for independent review.
