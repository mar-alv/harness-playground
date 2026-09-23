import Image from "next/image";

import type { PokemonListItem } from "@/schemas/pokemon.schema";

interface PokemonGridProps {
  items: PokemonListItem[];
}

export function PokemonGrid({ items }: PokemonGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((pokemon) => {
        const pokemonId = pokemon.url.split("/").filter(Boolean).at(-1) ?? "";
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

        return (
          <article
            key={pokemon.name}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center shadow-sm"
          >
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              {pokemonId ? (
                <Image
                  src={imageUrl}
                  alt={pokemon.name}
                  width={72}
                  height={72}
                  priority={false}
                />
              ) : null}
            </div>
            <h2 className="text-lg font-semibold capitalize">{pokemon.name}</h2>
          </article>
        );
      })}
    </div>
  );
}
