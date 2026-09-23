# Skill: Write E2E Tests

## Goal

Cover real user-facing flows with reliable Playwright tests.

## What belongs in E2E tests

Complete user journeys through the UI (e.g. "user fills out the notes form and sees the new note appear") — not internal implementation branches already covered by unit tests.

## Steps

1. **Identify user-facing behavior** the issue introduces or changes — describe it from the user's point of view, not the code's.
2. **Find existing test organization** in `tests/e2e/` — tests are organized by feature/flow, not by source file.
3. **Use resilient selectors**: role- and label-based queries (`getByRole`, `getByLabel`) over CSS selectors or test IDs tied to implementation structure, matching existing test conventions.
4. **Set up fixtures** consistent with existing e2e setup (seed data, auth state) rather than inventing a new setup pattern per test.
5. **Handle asynchronous behavior** with Playwright's built-in waiting (`expect(...).toBeVisible()`, etc.) instead of arbitrary `sleep`/timeouts.
6. **Avoid flaky tests**: no reliance on exact timing, animation completion, or network race conditions without an explicit wait condition.
7. **Clean up** any state created by the test if the suite does not already reset between runs.

## Anti-pattern to avoid

Duplicating unit-test-level coverage at the e2e layer — e2e tests are for flows, not for exhaustively re-testing every branch a unit test already covers.
