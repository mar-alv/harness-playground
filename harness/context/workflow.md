# Workflow

## Lifecycle

```
Issue -> Explore -> Plan -> Implement -> Test -> Review -> Done
```

## Before implementation

Read the full issue. Identify: the requirement, the acceptance criteria, any explicit constraints, and anything explicitly out of scope. If any of these are missing or contradictory, that is a signal to stop and ask (see `harness/rules/general.md`) rather than infer them.

## When exploration happens

Always, before writing new code — even for a change that looks trivial. Use `harness/skills/explore-repository/SKILL.md`. The goal is to find whether something similar already exists before creating something new.

## When examples are consulted

After exploration, before implementation. `harness/examples/` holds the canonical pattern for each kind of file (component, hook, service, schema, form, page). If the issue touches one of these categories, read the matching example first — it sets the convention, not just a suggestion.

## When tests are created

Alongside implementation, not after "everything works." A service or hook without a corresponding unit test, or a user flow without e2e coverage where one is expected, is not done — see `harness/definition-of-done.md`.

## When validation happens

After implementation and tests are written: typecheck, lint, unit tests, and e2e tests where the change touches a user-facing flow. Validation happens before review, not instead of it.

## When review happens

After validation passes. Use `harness/skills/review-implementation/SKILL.md`. Passing tests is necessary but not sufficient — the reviewer step checks scope, architecture fit, and unnecessary complexity too.

## When blocked

Stop rather than guess. Report: what was attempted, what failed, what the believed blocker is, and what is needed to continue. See the "bounded autonomy" principle — repeated failed attempts, genuine ambiguity, a missing dependency, or a required out-of-scope change are all valid reasons to stop.

## When to stop instead of continuing indefinitely

- The same test has failed after a bounded number of distinct fix attempts.
- Completing the issue as written would require changes clearly outside its stated scope.
- The issues requirements are ambiguous in a way that materially changes the implementation.
- A required external resource or dependency is not available.
