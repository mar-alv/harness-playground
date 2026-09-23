# Architecture

## Purpose

This document describes how `harness-playground` is organized so an AI agent (or a human) can predict where code should live and how layers talk to each other.

## Layers

### `app/`
Next.js App Router routes, pages, and layouts. Responsible for composition and data-loading orchestration only. A page should read like a table of contents: it wires together components, hooks, and services — it should not contain business logic itself.

### `components/`
UI. Split into `components/ui/` (shadcn primitives — treated as vendored, edit sparingly) and `components/layout/` (app shell: sidebar, sheet, nav). Feature components live alongside the feature or in a shared location if reused across 2+ features. Components render; they do not fetch or transform data themselves beyond what a hook/service already gave them.

### `hooks/`
Client-side stateful logic: local state, derived state, side effects, data-fetching orchestration. A hook is the bridge between a service and a component. Hooks should not contain raw `fetch` calls to external APIs directly — that belongs in `services/`.

### `services/`
Business logic and I/O. API calls, request/response shaping, error normalization, data transformations that are not purely presentational. Services are framework-agnostic — no React imports here.

### `schemas/`
Validation boundaries. Input/output schemas and the TypeScript types inferred from them. Schemas are the single source of truth for a shapes validity; do not hand-roll parallel type definitions.

### `lib/`
Pure, dependency-light utilities with no knowledge of the apps domain (formatting, math, generic helpers). If a function needs to know about "pokemon" or "notes," it does not belong here.

### `tests/`
`unit/` mirrors `services/`, `hooks/`, and `lib/`. `e2e/` mirrors user-facing flows in `app/`, organized by feature, not by file.

## Data flow

```
app/page.tsx
  -> hooks (state, orchestration)
    -> services (API calls, business logic)
      -> schemas (validate request/response)
  -> components (render)
```

Data flows down; events flow up. A component should not reach past its hook into a service directly — that skip breaks testability.

## Expected / forbidden dependencies

- `components/` may depend on `hooks/` and `lib/`. It must not import from `services/` directly.
- `hooks/` may depend on `services/`, `schemas/`, `lib/`.
- `services/` may depend on `schemas/` and `lib/`. It must not import React or anything from `components/`/`hooks/`.
- `lib/` depends on nothing app-specific.
- Circular dependencies between any of these are always a bug, not a stylistic choice.

## Where business logic lives

In `services/`, always. If you find domain logic inside a component or a page, that is a signal to extract it — not a style the harness endorses.
