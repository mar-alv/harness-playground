---
applyTo: "services/**"
---

Before suggesting or generating anything in this directory, read `/harness/instructions/services.md` and `/harness/examples/services/` in full. Key points Copilot should weight heavily here: no React or JSX in this layer, validate responses against the matching schema in `/schemas/` before returning them, and normalize errors consistently rather than letting a raw fetch error propagate.
