import { z } from "zod";

export const pokemonListItemSchema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
});

export const pokemonListResponseSchema = z.object({
  count: z.number().nonnegative(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(pokemonListItemSchema),
});

export const pokemonDetailSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  sprites: z.object({
    front_default: z.string().url().nullable(),
  }),
});

export type PokemonListItem = z.infer<typeof pokemonListItemSchema>;
export type PokemonListResponse = z.infer<typeof pokemonListResponseSchema>;
export type PokemonDetail = z.infer<typeof pokemonDetailSchema>;
