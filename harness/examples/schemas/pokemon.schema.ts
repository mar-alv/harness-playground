import { z } from "zod";

/**
 * Validates a single Pokemon type name returned by the API.
 */
export const pokemonTypeSchema = z.object({
  slot: z.number().int().positive(),
  type: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

/**
 * Validates the shape of a Pokemon as returned by the external PokeAPI,
 * narrowed down to only the fields this app actually uses.
 */
export const pokemonSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  height: z.number().nonnegative(),
  weight: z.number().nonnegative(),
  types: z.array(pokemonTypeSchema).min(1),
  sprites: z.object({
    front_default: z.string().url().nullable(),
  }),
});

export type Pokemon = z.infer<typeof pokemonSchema>;

/**
 * Input schema for searching Pokemon by name. Applied at the form boundary
 * before the value is ever passed to a service.
 */
export const pokemonSearchInputSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, "Enter a Pokemon name.")
    .max(50, "That name is too long."),
});

export type PokemonSearchInput = z.infer<typeof pokemonSearchInputSchema>;
