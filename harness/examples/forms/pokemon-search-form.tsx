"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  pokemonSearchInputSchema,
  type PokemonSearchInput,
} from "@/schemas/pokemon.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface PokemonSearchFormProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

/**
 * Canonical example of a form: schema-validated with react-hook-form,
 * emitting a clean, already-validated value to its caller via `onSearch`.
 * The form does not know how the search is performed — that is the
 * caller's (a hook's) job.
 */
export function PokemonSearchForm({ onSearch, isLoading }: PokemonSearchFormProps) {
  const form = useForm<PokemonSearchInput>({
    resolver: zodResolver(pokemonSearchInputSchema),
    defaultValues: { query: "" },
  });

  function onSubmit(values: PokemonSearchInput) {
    onSearch(values.query);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="sr-only">Pokemon name</FormLabel>
              <FormControl>
                <Input placeholder="pikachu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>
    </Form>
  );
}
