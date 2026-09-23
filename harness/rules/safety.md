# Safety

Actions the agent should never perform autonomously:

- Do not delete files whose purpose is not fully understood, or that are outside the scope of the current issue.
- Do not expose secrets — never print, log, hardcode, or commit API keys, tokens, or credentials.
- Do not modify environment variables, `.env` files, or credential configuration as an incidental part of an unrelated task.
- Do not disable security mechanisms (auth checks, input validation, CSP, CORS config) to make something "just work."
- Do not bypass validation — if a schema check is inconvenient for a given task, that is a signal to revisit the schema deliberately, not to skip it inline.
- Do not weaken tests (loosening assertions, adding skips, increasing timeouts to mask flakiness) simply to make them pass. See `harness/skills/fix-failing-tests/SKILL.md`.
- Do not commit sensitive information of any kind, including in test fixtures or example data.

This file describes behavioral restrictions the agent should hold itself to. It is not a substitute for real sandboxing or permission controls — where the platform running the agent provides those, use them as the actual enforcement layer.
