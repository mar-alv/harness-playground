# Components

## Structure

One component per file. Colocate a component with its own small helpers; extract to a shared location only once reused elsewhere. Prefer named exports.

## Naming

PascalCase for the component and its file (`ProductCard.tsx`). The exported name matches the filename.

## Props

Define a `Props` type (or `ComponentNameProps` if the component is exported broadly) above the component. Avoid optional props that silently change behavior — prefer explicit variants or a small discriminated union when a component has meaningfully different modes.

## Composition

Prefer composition (children, slots) over prop-driven branching for structural variation. If a component has grown more than 2-3 conditional render branches based on props, consider whether it should be two components or use composition instead.

## Client/server

Default to server components. Add `"use client"` only when the component needs interactivity, state, effects, or browser-only APIs. Push the client boundary as far down the tree as possible — a page does not need to be a client component just because one button inside it needs `onClick`.

## shadcn usage

Compose from `components/ui/` primitives rather than rebuilding equivalents. If a primitive needs a variant it does not support, extend it via its existing variant API (e.g. `cva`) rather than duplicating the component.

## Styling

Tailwind utility classes. Use `cn()` (or the project's existing class-merge helper) when combining conditional classes. Avoid inline styles except for values that are genuinely dynamic and cannot be expressed as a class.

## Accessibility

Interactive elements are real interactive elements (`button`, `a`, proper `role` when a native element is not available). Icons-only controls need an accessible label. Follow the patterns already used in `components/ui/`.

## State

Local UI state (open/closed, hover, input value before submit) lives in the component or a colocated hook. Anything that represents server/domain data belongs in a hook backed by a service, not component state.

## When to extract

Extract a component when the same JSX structure is duplicated in a second place, or when a section of a large component can be named and reasoned about independently. Do not extract a one-off wrapper that only adds a `div`.

## When not to create an abstraction

If you are building a generic, configurable component to serve a single current use case "in case it is needed elsewhere later," do not. Build the concrete version; generalize when the second real use case shows up.
