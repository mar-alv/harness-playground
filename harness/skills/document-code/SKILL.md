# Skill: Document Code

## Goal

Add documentation to existing undocumented code, consistent with the project's conventions.

## Steps

1. **Inspect existing documentation examples** nearby (same directory, similar files) to match style, tone, and level of detail.
2. **Identify undocumented public APIs** that meet the bar in `harness/instructions/documentation.md` (non-obvious exported functions, hooks, and domain types).
3. **Add JSDoc** following the format in `harness/instructions/documentation.md`: description, `@param`, `@returns`, `@throws` where applicable, `@property` for documented interfaces.
4. **Use the project's established terminology** — do not introduce new names for concepts that already have a name elsewhere in the codebase.
5. **Avoid redundant comments** that just restate the function signature in prose.
6. **Preserve existing behavior** — this skill documents code, it does not refactor or fix it. If a bug is discovered while documenting, report it separately rather than fixing it inline.
7. **Validate TypeScript** after changes to confirm no JSDoc syntax broke type-checking (relevant for `@template`/generic annotations).

## Anti-pattern to avoid

Blanket-documenting every function in a file regardless of whether it meets the "non-obvious" bar — this adds noise, not clarity.
