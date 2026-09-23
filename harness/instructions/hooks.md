# Hooks

## Naming

`useX`, named after what it provides, not how it is implemented (`useProduct`, not `useFetchProductEffect`).

## Responsibilities

A hook owns one piece of client-side state or one orchestration concern. If a hook is doing two unrelated things, split it.

## State management

`useState`/`useReducer` for local state. Do not reach for external state management for state that is only read by one component tree — lift state only as high as the components that actually need it.

## Side effects

Keep `useEffect` usage minimal and justified — most data fetching should go through a dedicated data-fetching hook (React Query, if used) rather than a raw effect. If you write a raw effect, comment why it cannot be expressed declaratively instead.

## Data fetching

Hooks call into `services/`, never directly into `fetch`/`axios`. If the project uses React Query, wrap the service call in `useQuery`/`useMutation` and let the hook expose a small, purpose-built interface (`{ data, isLoading, error }` or narrower) rather than the raw query object.

## Error/loading behavior

Every data-fetching hook exposes an explicit loading and error state; do not leave the caller to infer status from `data === undefined`.

## Reusability

A hook is a good candidate for `hooks/` (rather than staying colocated with one component) once it is used by, or clearly will be used by, more than one component.

## Testing

Hooks with real logic (not pure pass-through wrappers) get a unit test using the project's hook-testing utilities. Mock the underlying service call; do not hit real network in a unit test.
