# General Rules

These apply to every task, regardless of which part of the codebase is touched.

- Follow the existing architecture (`harness/context/architecture.md`). Do not introduce a new layer or pattern to solve a problem an existing layer already solves.
- Prefer existing utilities, hooks, services, and components over writing new ones. Search before you create — see `harness/skills/explore-repository/SKILL.md`.
- Avoid unnecessary changes. A diff should be readable as "exactly what the issue asked for," not "what the issue asked for, plus incidental cleanup."
- Keep changes focused. One issue, one concern. If you notice an unrelated problem while working, note it — do not fix it inline unless it blocks the current task.
- Do not modify unrelated code, including formatting-only changes to files you did not need to touch.
- Ask for clarification when requirements are genuinely ambiguous — ambiguity that would change the shape of the implementation, not every minor judgment call.
- Do not invent requirements, acceptance criteria, or constraints that are not present in the issue or in the harness. If something seems missing, say so rather than filling the gap silently.
- When in doubt between two reasonable interpretations, pick the one that requires the smaller, more reversible change.
