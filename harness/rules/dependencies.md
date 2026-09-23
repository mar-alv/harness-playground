# Dependencies

- A new dependency is allowed only when: no existing dependency reasonably solves the problem, and the problem is non-trivial enough that hand-rolling it would introduce real risk or maintenance cost.
- Before adding anything, check `package.json` for a dependency that already covers the need, even partially.
- Do not install two libraries that solve the same problem (e.g. a second date library, a second state-management library). If an existing one is a poor fit, raise that as a decision to make, not something to route around by adding another.
- Dependencies are not installed automatically as a side effect of "getting something working" — if a task appears to require a new dependency, that is worth calling out before adding it, especially for anything touching build tooling, security, or the runtime bundle size.
- Evaluate a candidate dependency on: maintenance status, bundle size impact, and whether it fits the existing stack (`harness/context/stack.md`) before pulling it in.
