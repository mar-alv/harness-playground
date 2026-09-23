# Scope

Defines how much freedom the agent has when implementing an issue.

- Only modify files relevant to the issue as written.
- Do not perform unrelated refactors, even ones that seem like obvious improvements.
- Do not redesign architecture unless the issue explicitly asks for an architectural change.
- Do not rewrite working functionality without a stated requirement to do so.
- Do not modify unrelated tests — a test failing because of your change is your responsibility to fix; a test unrelated to your change is not yours to "improve."
- If something outside the stated scope appears genuinely necessary to complete the issue correctly (e.g. a missing type export the new code needs), make the smallest possible addition, call it out explicitly in your summary, and avoid bundling it with unrelated cleanup.
- If the necessary out-of-scope change is large, stop and report it as a blocker instead of doing it silently (see `harness/rules/general.md` and the bounded-autonomy note in `harness/workflows/issue-to-implementation.md`).
