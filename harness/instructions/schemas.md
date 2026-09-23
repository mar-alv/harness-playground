# Schemas

## Validation library

Use the project's chosen schema library (e.g. Zod) consistently — do not introduce a second validation approach.

## Naming

`entityNameSchema` for the schema, `EntityName` for the inferred type (`export type EntityName = z.infer<typeof entityNameSchema>`).

## Input/output types

Define separate schemas for input (what the app sends) and output (what the app expects back) when they differ, even slightly. Do not reuse one schema for both directions if the shapes diverge.

## Reuse

Compose schemas from smaller shared schemas (e.g. a shared `idSchema`, `timestampSchema`) rather than repeating primitive validation rules across files.

## Validation boundaries

Schemas are applied at the edges: incoming API responses, form submissions, and any external input. Do not re-validate data that has already crossed a schema boundary internally.

## Error messages

Provide clear, user-appropriate messages on schemas used for form validation; API-boundary schemas can use terser messages since they are for developer-facing error logs, not end users.

## Relationship to TypeScript types

The schema is the source of truth. Do not hand-write a parallel `interface`/`type` for a shape that already has a schema — infer it.
