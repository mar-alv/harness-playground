# Skill: Add Component

## Goal

Create a new component that fits the project's existing conventions on the first try.

## Steps

1. **Decide whether a new component is actually needed.** Check `components/` and `components/ui/` — a composition of existing components may already satisfy the requirement.
2. **Find similar examples** — the closest existing component of a similar kind (card, form field, list item, dialog) in the codebase or in `harness/examples/components/`.
3. **Structure the component** per `harness/instructions/components.md`: props type above the component, named export, colocated helpers.
4. **Use existing UI primitives** from `components/ui/` rather than rebuilding equivalents (buttons, inputs, dialogs, etc.).
5. **Handle props** with explicit types; avoid boolean-soup props — prefer a small union for meaningfully distinct modes.
6. **Meet accessibility requirements**: semantic elements, labeled interactive controls, keyboard operability consistent with existing components.
7. **Add tests** — a unit test for any non-trivial logic inside the component (conditional rendering branches, derived values); e2e coverage if the component is central to a user flow being changed.
8. **Document** per `harness/instructions/documentation.md` if the component's props or behavior are non-obvious.

## Anti-pattern to avoid

Building a highly configurable/generic component "for reuse" when only one concrete use case exists today.
