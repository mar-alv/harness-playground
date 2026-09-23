import { pokemonSchema, type Pokemon } from "@/schemas/pokemon.schema";

const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Normalized error shape returned by every service in this app, so hooks
 * can handle failures uniformly regardless of which service threw them.
 */
export class ServiceError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ServiceError";
  }
}

/**
 * Fetches a single Pokemon by name or id and validates the response
 * against `pokemonSchema` before returning it. Never returns raw,
 * unvalidated API data to the caller.
 *
 * @param nameOrId - the Pokemon's name (case-insensitive) or numeric id
 * @throws ServiceError when the request fails or the response is malformed
 */
export async function getPokemon(nameOrId: string): Promise<Pokemon> {
  const response = await fetch(
    `${BASE_URL}/pokemon/${encodeURIComponent(nameOrId.toLowerCase())}`,
  );

  if (!response.ok) {
    throw new ServiceError(
      response.status === 404
        ? `No Pokemon found for "${nameOrId}".`
        : "Failed to fetch Pokemon data.",
      response.status,
    );
  }

  const json = await response.json();
  const parsed = pokemonSchema.safeParse(json);

  if (!parsed.success) {
    throw new ServiceError("Received an unexpected Pokemon shape from the API.");
  }

  return parsed.data;
}
