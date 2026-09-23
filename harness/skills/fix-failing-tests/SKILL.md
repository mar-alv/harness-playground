# Skill: Fix Failing Tests

## Goal

Diagnose and correctly resolve a test failure — without simply changing assertions until it passes.

## Diagnosis order

For each failure, determine which of these is actually true, in this order:

1. **The implementation is wrong** — the code does not do what the requirement/spec says it should. Fix the implementation.
2. **The test is wrong** — the test asserts something that does not match the actual, correct requirement (e.g. it was written against an earlier version of the behavior). Fix the test, and explain why the original assertion was incorrect.
3. **The test environment is wrong** — a setup/fixture/mock issue unrelated to the logic being tested (e.g. missing test data, wrong mock shape). Fix the environment.
4. **The requirement is ambiguous** — the test and implementation reasonably disagree because the spec itself did not clearly define the expected behavior. Stop and report rather than guessing which side is "right."

## Rules

- Never change an assertion just to make a test pass without first identifying which of the four cases above applies.
- Never add `.skip`, increase timeouts, or add retries to paper over a real failure.
- Bound your attempts: after a small number of distinct fix attempts on the same failure without resolution, stop and report the failure, what was tried, and what you believe the root cause might be, per `harness/rules/general.md`.

## Output

Either: a passing test suite with a clear note on what was fixed and why (implementation, test, or environment) — or a reported blocker if the failure could not be resolved within a bounded number of attempts.
