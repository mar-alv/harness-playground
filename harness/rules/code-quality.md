# Code Quality

- **TypeScript strictness**: no `any` used to sidestep a real typing problem; use `unknown` plus a narrowing check instead. No `@ts-ignore` to suppress a legitimate error — fix the type or ask.
- **Error handling**: errors from I/O (network, storage, parsing) must be caught and normalized at the `services/` boundary, not silently swallowed and not left to crash the UI. Components should receive already-normalized error states.
- **Naming**: descriptive, matching existing conventions in the file/directory you are editing. Hooks start with `use`. Services are named after the domain they serve (`userService`, not `apiHelper`).
- **Reusability**: extract only when a second real usage exists, or the issue explicitly calls for a reusable piece. Do not pre-abstract for hypothetical future use.
- **Avoid unnecessary abstractions**: a wrapper, factory, or generic layer needs to earn its place by removing real duplication — not by looking more "architected."
- **Avoid duplicated logic**: if you are about to paste a block that exists elsewhere with minor variation, extract instead, following the existing pattern for that layer.
- **Readability over cleverness**: prefer the version a teammate can understand in one read.
- **Match existing conventions** in the file and directory before applying a personal preference — consistency with the surrounding code wins.
