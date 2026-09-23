import {
  pokemonDetailSchema,
  pokemonListResponseSchema,
  type PokemonDetail,
  type PokemonListResponse,
} from "@/schemas/pokemon.schema";

const BASE_URL = "https://pokeapi.co/api/v2";

export class ServiceError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ServiceError";
  }
}

export async function getPokemonPage(page: number, pageSize = 20): Promise<PokemonListResponse> {
  const safePage = Math.max(1, page);
  const offset = (safePage - 1) * pageSize;

  const response = await fetch(`${BASE_URL}/pokemon?limit=${pageSize}&offset=${offset}`);

  if (!response.ok) {
    throw new ServiceError("Failed to fetch Pokemon list.", response.status);
  }

  const json = await response.json();
  const parsed = pokemonListResponseSchema.safeParse(json);

  if (!parsed.success) {
    throw new ServiceError("Received an unexpected Pokemon list shape from the API.");
  }

  return parsed.data;
}

export async function getPokemonDetail(nameOrId: string): Promise<PokemonDetail> {
  const response = await fetch(`${BASE_URL}/pokemon/${encodeURIComponent(nameOrId.toLowerCase())}`);

  if (!response.ok) {
    throw new ServiceError(
      response.status === 404
        ? `No Pokemon found for "${nameOrId}".`
        : "Failed to fetch Pokemon data.",
      response.status,
    );
  }

  const json = await response.json();
  const parsed = pokemonDetailSchema.safeParse(json);

  if (!parsed.success) {
    throw new ServiceError("Received an unexpected Pokemon shape from the API.");
  }

  return parsed.data;
}
