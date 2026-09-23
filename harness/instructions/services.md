# Services

## API interaction

All outbound API calls live here. A service function takes typed, already-validated input and returns a typed, normalized result or throws/returns a normalized error — never a raw `Response` or unparsed JSON.

## Separation from UI

No React, no JSX, no hook calls in `services/`. A service should be usable from a script or a test with no framework running.

## Error handling

Catch transport-level errors (network failure, non-2xx status) and re-throw or return a normalized error shape consistent across all services, so hooks can handle errors uniformly.

## Request/response typing

Validate responses against the corresponding schema in `schemas/` before returning them. Do not trust an external API's shape at compile time only — validate at the boundary, at runtime.

## Reusing existing services

Before adding a new function, check whether an existing service already exposes the needed call with different parameters — extend it rather than duplicating.

## Where transformations belong

Any reshaping of API data into the shape the app actually uses (renaming fields, computing derived values, flattening nested structures) happens in the service, not in a component or hook. Components should never need to know the wire format.

## Testing

Unit test services by mocking the HTTP layer (e.g. mock `fetch`), asserting on: correct request shape, correct handling of a success response, and correct handling of an error response.
