import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Pokemon } from "@/schemas/pokemon.schema";

interface PokemonCardProps {
  pokemon: Pokemon;
}

/**
 * Canonical example of a presentational component: it receives fully
 * validated, already-fetched data as a prop and only renders it. It does
 * not call a service or a hook itself.
 */
export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        {pokemon.sprites.front_default ? (
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={72}
            height={72}
            className="shrink-0"
          />
        ) : null}
        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          {pokemon.types.map(({ type }) => (
            <Badge key={type.name} variant="secondary" className="capitalize">
              {type.name}
            </Badge>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div>
            <dt className="font-medium text-foreground">Height</dt>
            <dd>{pokemon.height / 10} m</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Weight</dt>
            <dd>{pokemon.weight / 10} kg</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
