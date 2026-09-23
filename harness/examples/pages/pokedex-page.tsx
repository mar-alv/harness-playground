"use client";

import { usePokemon } from "@/hooks/use-pokemon";
import { PokemonSearchForm } from "@/harness/examples/forms/pokemon-search-form";
import { PokemonCard } from "@/harness/examples/components/pokemon-card";

/**
 * Canonical example of a page: it composes a hook and components, and
 * contains no business logic of its own. Compare against `app/pokedex/page.tsx`
 * for how this pattern is actually wired into the app router.
 */
export default function PokedexPageExample() {
  const { pokemon, isLoading, error, search } = usePokemon();

  return (
    <main className="mx-auto flex max-w-md flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Pokedex</h1>
      <PokemonSearchForm onSearch={search} isLoading={isLoading} />
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {pokemon ? <PokemonCard pokemon={pokemon} /> : null}
    </main>
  );
}
