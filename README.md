
# Harness Playground — AI Harness Project Structure

## Goal

`harness-playground` is a small Next.js project designed to study and demonstrate AI harness engineering.

The application itself is a playground where an AI coding agent implements features from GitHub Issues. The repository contains a tool-agnostic harness that provides context, rules, skills, examples, workflows, validation, and review mechanisms.

The harness should not be designed exclusively around GitHub Copilot. Copilot-specific integration should live separately from the core harness so that the same concepts can later be adapted to Cursor, Claude Code, or other coding agents.

---

# Project Structure

```text
harness-playground/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   │
│   ├── pokedex/
│   │   └── page.tsx
│   │
│   ├── calculator/
│   │   └── page.tsx
│   │
│   └── notes/
│       └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── ...shadcn
│   │
│   └── layout/
│       ├── app-sheet.tsx
│       └── app-sidebar.tsx
│
├── hooks/
│   └── ...
│
├── services/
│   └── ...
│
├── schemas/
│   └── ...
│
├── lib/
│   └── ...
│
├── tests/
│   ├── unit/
│   └── e2e/
│
│
├── harness/
│   │
│   ├── context/
│   │   ├── architecture.md
│   │   ├── stack.md
│   │   └── workflow.md
│   │
│   ├── rules/
│   │   ├── general.md
│   │   ├── code-quality.md
│   │   ├── scope.md
│   │   ├── dependencies.md
│   │   └── safety.md
│   │
│   ├── instructions/
│   │   ├── components.md
│   │   ├── hooks.md
│   │   ├── services.md
│   │   ├── schemas.md
│   │   ├── lib.md
│   │   └── documentation.md
│   │
│   ├── skills/
│   │   ├── explore-repository/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── implement-issue/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── add-component/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── write-unit-tests/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── write-e2e-tests/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── fix-failing-tests/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── document-code/
│   │   │   └── SKILL.md
│   │   │
│   │   └── review-implementation/
│   │       └── SKILL.md
│   │
│   ├── agents/
│   │   ├── planner.agent.md
│   │   ├── implementer.agent.md
│   │   ├── tester.agent.md
│   │   └── reviewer.agent.md
│   │
│   ├── examples/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── forms/
│   │   └── pages/
│   │
│   ├── workflows/
│   │   └── issue-to-implementation.md
│   │
│   └── definition-of-done.md
│
│
├── AGENTS.md
│
├── .github/
│   └── copilot/
│       ├── instructions/
│       └── ...
│
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── playwright.config.ts
└── README.md
```

---

# 1. AGENTS.md

## Purpose

`AGENTS.md` is the primary entry point for an AI agent working in the repository.

It should contain the highest-level information an AI needs before modifying the project.

It should be tool-agnostic and should not contain instructions specific to GitHub Copilot.

## It should explain

* What `harness-playground` is.
* The purpose of the repository.
* The technology stack.
* The high-level architecture.
* Where different types of code belong.
* The existence and purpose of the `harness/` directory.
* The general implementation workflow.
* The most important global rules.
* How the AI should approach an issue.
* Where to find more specific context.
* Where to find examples.
* How validation works.

## It should NOT

* Contain every detailed coding rule.
* Contain every component convention.
* Contain a huge list of TypeScript rules.
* Become a replacement for all other harness files.

It is the AI's **map of the repository**, not the entire harness.

---

# 2. harness/context/

This directory contains information that helps the AI understand the project.

Context answers:

> "What is this project and how is it organized?"

It should generally describe rather than command.

---

## context/architecture.md

### Purpose

Explain the architectural organization of the application.

It should explain:

* Responsibilities of `app/`.
* Responsibilities of `components/`.
* Responsibilities of `hooks/`.
* Responsibilities of `services/`.
* Responsibilities of `schemas/`.
* Responsibilities of `lib/`.
* Responsibilities of tests.
* How these layers are expected to interact.
* Where business logic should live.
* Where UI logic should live.
* How data flows through the application.
* Which dependencies between layers are expected or forbidden.

This should give the AI a mental model of the codebase.

---

## context/stack.md

### Purpose

Document the technologies used by the project.

It should explain the project's important technical choices, such as:

* Next.js.
* React.
* TypeScript.
* Tailwind.
* shadcn/ui.
* Vitest.
* Playwright.
* Schema validation library if applicable.
* Data-fetching solution if applicable.
* Other important libraries.

It should explain why important technologies exist when useful.

It should NOT become a generic tutorial about those technologies.

---

## context/workflow.md

### Purpose

Explain the expected lifecycle for implementing work in this repository.

Conceptually:

```text
Issue
→ Explore
→ Plan
→ Implement
→ Test
→ Review
→ Done
```

It should explain:

* What should happen before implementation.
* When repository exploration should happen.
* When examples should be consulted.
* When tests should be created.
* When validation should happen.
* When review should happen.
* What to do when blocked.
* When the AI should stop instead of continuing indefinitely.

This is the high-level workflow description.

---

# 3. harness/rules/

Rules are constraints.

Rules answer:

> "What must or must not happen?"

They should be relatively stable and should apply across many tasks.

---

## rules/general.md

Global rules for every AI task.

Examples of concepts to define:

* Follow existing architecture.
* Prefer existing utilities.
* Avoid unnecessary changes.
* Keep changes focused.
* Do not modify unrelated code.
* Ask for clarification when requirements are genuinely ambiguous.
* Do not invent requirements.

---

## rules/code-quality.md

Define the project's quality expectations.

It should cover concepts such as:

* TypeScript strictness.
* Avoiding unsafe types.
* Error handling.
* Naming conventions.
* Reusability.
* Avoiding unnecessary abstractions.
* Avoiding duplicated logic.
* Maintaining readability.
* Maintaining existing conventions.

---

## rules/scope.md

Define how much freedom the AI has when implementing an issue.

It should cover:

* Only modify files relevant to the issue.
* Don't perform unrelated refactors.
* Don't redesign architecture unnecessarily.
* Don't rewrite working functionality without a requirement.
* Don't modify unrelated tests.
* How to handle changes that appear necessary but aren't explicitly requested.

This is an important guardrail against AI scope creep.

---

## rules/dependencies.md

Define rules around dependencies.

It should cover:

* When a new dependency is allowed.
* When an existing dependency should be preferred.
* Whether dependencies can be installed automatically.
* How to evaluate whether a dependency is necessary.
* Avoiding duplicate libraries that solve the same problem.

---

## rules/safety.md

Define actions that the AI should not perform autonomously.

Examples:

* Do not delete important files.
* Do not expose secrets.
* Do not modify environment credentials.
* Do not disable security mechanisms.
* Do not bypass validation.
* Do not weaken tests simply to make them pass.
* Do not commit sensitive information.

This file represents **behavioral restrictions**, not operating-system-level permissions.

If an AI platform provides real sandbox/permission controls, those should be used separately for actual enforcement.

---

# 4. harness/instructions/

Instructions explain how to work within a specific part of the codebase.

They answer:

> "When working here, what conventions should I follow?"

These are more specific than global rules.

---

## instructions/components.md

Explain how components should be created and modified.

It should cover:

* Component structure.
* Component naming.
* Props.
* Composition.
* Client/server component expectations.
* shadcn usage.
* Styling conventions.
* Accessibility expectations.
* State management.
* When to extract a component.
* When not to create an abstraction.

---

## instructions/hooks.md

Explain how custom React hooks should be implemented.

It should cover:

* Naming.
* Responsibilities.
* State management.
* Side effects.
* Data fetching.
* React Query conventions if used.
* Error/loading behavior.
* Reusability.
* Testing expectations.

---

## instructions/services.md

Explain how service/business logic should be structured.

It should cover:

* API interaction.
* Separation from UI.
* Error handling.
* Request/response typing.
* Reusing existing services.
* Where transformations belong.
* Testing expectations.

---

## instructions/schemas.md

Explain how schemas should be implemented.

It should cover:

* Validation library.
* Schema naming.
* Input/output types.
* Reuse of schemas.
* Validation boundaries.
* Error messages.
* Relationship between schemas and TypeScript types.

---

## instructions/lib.md

Explain what belongs in `lib/`.

It should clarify:

* What qualifies as a shared utility.
* What should NOT be placed there.
* Naming.
* Pure functions.
* Dependencies.
* Reusability.
* Testing.

This is particularly important because `lib/` can easily become a dumping ground.

---

## instructions/documentation.md

Explain documentation expectations.

It should cover:

* Which functions require JSDoc.
* Which hooks require JSDoc.
* Which interfaces/types require documentation.
* `@param`.
* `@returns`.
* `@throws` when applicable.
* `@property`.
* What constitutes useful documentation.
* Avoiding comments that merely repeat the code.
* Following existing project documentation style.

The actual documentation operation can then be implemented as a skill.

---

# 5. harness/skills/

Skills represent repeatable actions.

A skill answers:

> "How should the AI perform this particular task?"

Unlike rules, skills are procedural.

---

## skills/explore-repository/SKILL.md

Teach the AI how to investigate an unfamiliar task before modifying code.

It should explain how to:

* Find related implementations.
* Search for existing components.
* Search for existing hooks.
* Find similar services.
* Find relevant schemas.
* Find relevant tests.
* Inspect examples.
* Identify architectural conventions.
* Avoid immediately creating new code when existing functionality may be reusable.

The objective is to prevent premature implementation.

---

## skills/implement-issue/SKILL.md

Define the complete process for implementing a GitHub Issue.

It should explain how to:

1. Read the issue.
2. Identify requirements.
3. Identify acceptance criteria.
4. Identify constraints.
5. Explore the repository.
6. Find relevant examples.
7. Produce a plan.
8. Implement the feature.
9. Add/update tests.
10. Run validation.
11. Fix legitimate failures.
12. Review the implementation.
13. Stop and report blockers when necessary.

This is the central implementation skill.

---

## skills/add-component/SKILL.md

Teach the AI how to create a new component using the project's established conventions.

It should explain:

* How to decide whether a new component is needed.
* How to find similar examples.
* How to structure the component.
* How to use existing UI primitives.
* How to handle props.
* Accessibility requirements.
* Testing expectations.
* Documentation expectations.

---

## skills/write-unit-tests/SKILL.md

Teach the AI how to create Vitest tests.

It should explain:

* What should be unit tested.
* How to find existing test examples.
* Test naming.
* Arrange/Act/Assert or the project's chosen pattern.
* Mocking rules.
* What should not be mocked.
* Edge cases.
* How to avoid brittle tests.

---

## skills/write-e2e-tests/SKILL.md

Teach the AI how to create Playwright tests.

It should explain:

* What belongs in E2E tests.
* How to identify user-facing behavior.
* Test organization.
* Selectors.
* Fixtures.
* Setup/cleanup.
* Avoiding implementation-detail selectors.
* Handling asynchronous behavior.
* Avoiding flaky tests.

---

## skills/fix-failing-tests/SKILL.md

Teach the AI how to diagnose test failures.

Important behavior:

The AI must determine whether:

1. The implementation is wrong.
2. The test is wrong.
3. The test environment is wrong.
4. The requirement is ambiguous.

It should NOT simply change assertions until the test passes.

It should include bounded attempts and escalation behavior.

---

## skills/document-code/SKILL.md

Teach the AI how to document existing code according to the project's JSDoc conventions.

It should:

* Inspect existing documentation examples.
* Identify undocumented public APIs.
* Add useful JSDoc.
* Use the project's established terminology.
* Avoid redundant comments.
* Preserve existing behavior.
* Validate TypeScript after changes.

---

## skills/review-implementation/SKILL.md

Teach the AI how to independently review an implementation.

The review should check:

* Requirements.
* Acceptance criteria.
* Architecture.
* Types.
* Error handling.
* Tests.
* Accessibility.
* Documentation.
* Scope.
* Unnecessary complexity.
* Reuse of existing functionality.

The reviewer should not automatically assume that the implementation is correct simply because tests pass.

---

# 6. harness/agents/

Agents represent roles within the implementation workflow.

They answer:

> "What responsibility does this AI role have?"

They should not duplicate all the rules and skills.

---

## agents/planner.agent.md

Role:

> Understand the issue and produce an implementation plan without prematurely changing code.

It should:

* Analyze requirements.
* Explore the repository.
* Identify affected areas.
* Find examples.
* Identify risks.
* Propose a plan.
* Identify ambiguities/blockers.

---

## agents/implementer.agent.md

Role:

> Turn an approved plan into code.

It should:

* Follow project rules.
* Follow directory-specific instructions.
* Use canonical examples.
* Implement only the required scope.
* Add/update tests.
* Validate its work.

---

## agents/tester.agent.md

Role:

> Validate implementation through automated tests and help diagnose legitimate failures.

It should:

* Run unit tests.
* Run E2E tests when applicable.
* Analyze failures.
* Fix implementation problems.
* Avoid weakening tests.
* Respect attempt limits.
* Escalate when blocked.

---

## agents/reviewer.agent.md

Role:

> Independently determine whether the implementation satisfies the requirements and project standards.

It should inspect the actual resulting code rather than relying solely on the implementer's explanation.

---

# 7. harness/examples/

Examples are canonical implementations.

They answer:

> "What does good code in this project actually look like?"

This directory is extremely important because examples give the AI concrete patterns to imitate.

---

## examples/components/

Canonical component implementations.

Possible examples:

* Card.
* Form.
* Dialog.
* Table.
* Data display.
* Complex interactive component.

---

## examples/hooks/

Canonical custom hooks.

Examples should demonstrate:

* State.
* Data fetching.
* React Query.
* Derived state.
* Side effects.

---

## examples/services/

Canonical service implementations.

Examples should demonstrate:

* API calls.
* Error handling.
* Typing.
* Data transformations.

---

## examples/schemas/

Canonical schema implementations.

Examples should demonstrate:

* Input validation.
* Type inference.
* Complex validation.
* Reusable schemas.

---

## examples/forms/

Canonical forms demonstrating:

* Form state.
* Validation.
* Schema integration.
* Error handling.
* Submission.

---

## examples/pages/

Canonical Next.js pages demonstrating:

* Layout.
* Server/client boundaries.
* Data loading.
* Composition.
* Page-level architecture.

Examples should be intentionally high-quality and should be treated as references rather than production features.

---

# 8. harness/workflows/

Workflows describe multi-step processes.

---

## workflows/issue-to-implementation.md

Describe the complete lifecycle:

```text
GitHub Issue
    ↓
Understand requirements
    ↓
Explore repository
    ↓
Find examples
    ↓
Plan
    ↓
Implement
    ↓
Unit tests
    ↓
E2E tests when applicable
    ↓
Typecheck/lint
    ↓
Review
    ↓
Definition of Done
```

This file should explain how the individual skills and agents fit together.

It should also describe what happens when a step fails.

---

# 9. harness/definition-of-done.md

Define what "finished" means.

A feature should generally satisfy:

* Requirements implemented.
* Acceptance criteria satisfied.
* Existing architecture followed.
* No unnecessary unrelated changes.
* TypeScript passes.
* Lint passes.
* Relevant unit tests pass.
* Relevant E2E tests pass.
* Documentation updated when required.
* Review completed.
* No known unresolved blocker.

This should be the final checklist used before considering an issue complete.

---

# 10. Tool-specific integration

The core harness must remain independent from any particular AI coding tool.

For example:

```text
harness/
    ...
```

contains the project's actual harness.

Tool-specific directories should contain only the adapter/integration necessary for a particular AI environment.

For GitHub Copilot, this could eventually include:

```text
.github/
    copilot/
        ...
```

The Copilot integration should point the AI toward the relevant project context, rules, instructions, skills, and workflows.

The same conceptual harness should later be usable with another coding agent without redesigning the project architecture.

---

# 11. GitHub Issues

GitHub Issues are the external source of implementation requirements.

Issues should ideally contain:

* Description.
* Requirements.
* Acceptance criteria.
* Technical constraints when necessary.
* Out-of-scope items when necessary.
* References.

The AI should treat the issue as the task contract.

The harness should not invent requirements that are not present in the issue or repository context.

---

# 12. Bounded autonomy

The harness must prevent infinite loops.

The AI should have explicit stopping conditions.

Examples:

* Stop after repeated unsuccessful attempts at the same problem.
* Stop when requirements are genuinely ambiguous.
* Stop when a required dependency or external resource is unavailable.
* Stop when tests repeatedly fail without a clear implementation cause.
* Stop when completing the task would require significant out-of-scope changes.
* Stop when the AI cannot safely determine the correct implementation.

When stopping, the AI should report:

* What it attempted.
* What failed.
* What it believes the blocker is.
* What information/action is required to continue.

The goal is not maximum autonomy.

The goal is **bounded, predictable autonomy**.

---

# 13. Harness observability

The playground should eventually expose the implementation lifecycle to the user.

Conceptually:

```text
Issue
  ✓ Parsed

Repository
  ✓ Explored

Plan
  ✓ Created

Implementation
  ✓ Completed

Unit Tests
  ✓ Passed

E2E Tests
  ✓ Passed

Review
  ✓ Passed

Definition of Done
  ✓ Complete
```

This allows the project to demonstrate not only the final generated code but also how the harness guided the AI.

---

# 14. Separation of responsibilities

The following distinction should be maintained throughout the project:

### Context

"What does the AI need to know?"

### Rules

"What must or must not happen?"

### Instructions

"How should this area of the codebase be handled?"

### Skills

"How should this task be performed?"

### Agents

"What role is the AI currently performing?"

### Examples

"What does a correct implementation look like?"

### Workflows

"How do multiple steps fit together?"

### Validation

"How do we know the implementation works?"

### Definition of Done

"When can we consider the task complete?"

### Tool adapters

"How does a specific AI coding tool consume this harness?"

---

# 15. Core design principle

The harness should avoid becoming a giant collection of instructions.

Whenever information is added, first ask:

> Is this a rule, context, instruction, skill, example, agent responsibility, workflow, or validation requirement?

Put the information in the smallest appropriate abstraction.

The goal is a harness that is:

* understandable by humans,
* usable by different AI coding tools,
* composable,
* predictable,
* difficult for the AI to misuse,
* resistant to infinite loops,
* easy to evolve,
* and small enough to understand as a learning project.
