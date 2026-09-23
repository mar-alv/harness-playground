"use client";

import { useCallback, useState } from "react";
import { getPokemon, ServiceError } from "@/services/pokemon-service";
import type { Pokemon } from "@/schemas/pokemon.schema";

interface UsePokemonResult {
  pokemon: Pokemon | null;
  isLoading: boolean;
  error: string | null;
  search: (nameOrId: string) => Promise<void>;
}

/**
 * Owns the loading/error/data state for looking up a single Pokemon.
 * Bridges the pokemon-service to any component that needs to search.
 */
export function usePokemon(): UsePokemonResult {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (nameOrId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getPokemon(nameOrId);
      setPokemon(result);
    } catch (err) {
      setPokemon(null);
      setError(err instanceof ServiceError ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { pokemon, isLoading, error, search };
}
