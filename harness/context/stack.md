# Stack

## Core

- **Next.js (App Router)** — routing, server/client component split, and the app shell.
- **React** — component model.
- **TypeScript** — strict mode is on project-wide; there is no "just this file" exception.
- **Tailwind CSS** — styling. Utility-first; no separate CSS-in-JS solution.
- **shadcn/ui** — accessible, unstyled-by-default primitives copied into `components/ui/`. Treat these as project code once copied in, but avoid rewriting their internals unless there is a real reason — prefer composition.

## Validation

- A schema library (e.g. Zod) is the single source of truth for runtime validation and the TypeScript types derived from it. Do not maintain a hand-written interface next to a schema that already describes the same shape — infer the type from the schema.

## Testing

- **Vitest** — unit tests for `services/`, `hooks/`, `lib/`. Fast, colocated logic tests, no browser.
- **Playwright** — end-to-end tests for user-facing flows in `tests/e2e/`. These exercise the app the way a user would, not internal implementation details.

## Why this combination

The stack is deliberately ordinary. The interesting part of this project is the harness, not the tech choices — an unfamiliar or exotic stack would make it harder to isolate "did the agent follow the harness" from "did the agent understand the framework."

This file should stay short. It is not a tutorial on Next.js, React, or Tailwind — an agent unfamiliar with any of these is expected to know them already or look them up; this file only records project-specific choices and constraints.
