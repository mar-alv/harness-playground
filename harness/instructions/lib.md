# lib/

## What qualifies as a shared utility

A pure function with no dependency on the app's domain concepts, usable in any project (date formatting, string manipulation, array/object helpers, generic math).

## What should NOT be placed here

Anything that knows about "pokemon," "notes," "users," or any other domain concept. Anything that imports a service, a schema, or a component. Anything with side effects (I/O, mutation of external state) — that belongs in `services/` or a hook.

## Naming

Function-first, verb-based names (`formatCurrency`, `chunkArray`), grouped by file into related concerns (`date.ts`, `array.ts`), not one giant `utils.ts`.

## Pure functions

Every function in `lib/` should be a pure function: same input, same output, no side effects. If a helper needs to hit the network, read the DOM, or touch global state, it does not belong here.

## Dependencies

Keep dependencies minimal. A `lib/` helper pulling in a heavy external library for something the standard library already does is a signal to reconsider.

## Reusability

If a helper is only ever used in one place and is unlikely to be reused, consider whether it needs to exist in `lib/` at all versus staying inline where it is used.

## Testing

Every non-trivial function in `lib/` gets a unit test — these are the cheapest, highest-value tests in the codebase since the functions are pure and dependency-free.
