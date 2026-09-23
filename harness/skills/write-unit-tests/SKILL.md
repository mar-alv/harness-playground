# Skill: Write Unit Tests

## Goal

Cover `services/`, `hooks/`, and `lib/` logic with fast, reliable Vitest tests.

## What should be unit tested

Any function or hook with real logic: branching, transformation, error handling, computed/derived values. Trivial pass-through wrappers do not need dedicated tests.

## Steps

1. **Find existing test examples** in `tests/unit/` for the same layer (service, hook, or lib) to match naming and structure conventions already in use.
2. **Name tests** descriptively: `describe("serviceName")` / `it("does X when Y")` — the test name should make the failure meaningful without opening the file.
3. **Structure** each test with a clear Arrange/Act/Assert shape (or the project's established pattern if different).
4. **Mock at the boundary**: mock `fetch`/HTTP clients for services, mock services for hooks. Do not mock the unit under test itself.
5. **What should not be mocked**: pure `lib/` functions called by the unit under test — let real logic run through unless it does real I/O.
6. **Cover edge cases**: empty input, error/failure paths, boundary values — not just the happy path.
7. **Avoid brittle tests**: assert on behavior and output shape, not on implementation details (internal call counts, exact internal variable names) unless that is genuinely the behavior being tested.

## Output

A test file colocated in `tests/unit/`, mirroring the path of the file under test.
