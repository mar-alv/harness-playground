# Documentation

## What requires JSDoc

- Exported functions in `services/` and `lib/` whose behavior is not obvious from the name and signature alone.
- Exported hooks whose return shape or side effects are non-obvious.
- Exported types/interfaces that represent a domain concept (not simple prop types).

## What does not require it

Simple, self-explanatory prop types, trivial one-line helpers, and internal (non-exported) functions whose context is clear from their immediate surroundings.

## Format

```ts
/**
 * Short description of what the function does and why it exists.
 *
 * @param paramName - what it represents, not just its type
 * @returns what is returned and any notable shape/edge cases
 * @throws when and why, if applicable
 */
```

For a documented interface, use `@property` on each field that is not self-explanatory from its name and type.

## What constitutes useful documentation

Documentation explains *why* and *what for*, not *what* — the code already says what it does line by line. A comment that just restates the function name in prose form is not useful and should not be added.

## Style

Match the JSDoc style already present in the file/directory (tone, level of detail, presence/absence of examples) rather than introducing a new documentation style piecemeal.
