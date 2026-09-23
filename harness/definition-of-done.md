# Definition of Done

A feature or fix is complete only when every applicable item below is satisfied. This is the final checklist before an issue is considered closed.

- [ ] All stated requirements are implemented.
- [ ] All stated acceptance criteria are demonstrably satisfied.
- [ ] The existing architecture (`harness/context/architecture.md`) is followed — no layer boundary violations.
- [ ] No unnecessary or unrelated changes are included in the diff (`harness/rules/scope.md`).
- [ ] TypeScript passes with no unjustified `any` or suppressed errors.
- [ ] Lint passes with no disabled rules added to accommodate the change.
- [ ] Relevant unit tests pass, including new tests for new logic (`harness/skills/write-unit-tests/SKILL.md`).
- [ ] Relevant E2E tests pass, including new tests for new or changed user-facing flows (`harness/skills/write-e2e-tests/SKILL.md`).
- [ ] Documentation is updated where required (`harness/instructions/documentation.md`).
- [ ] Review is completed and passed (`harness/skills/review-implementation/SKILL.md`).
- [ ] No known unresolved blocker remains; any blocker encountered was reported, not silently worked around.

If any item cannot be satisfied, the issue is not done — report the gap explicitly rather than closing it out anyway.
