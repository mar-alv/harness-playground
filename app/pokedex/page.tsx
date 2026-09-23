"use client";

import { Button } from "@/components/ui/button";
import { PokemonGrid } from "@/components/pokemon-grid";
import { usePokemonPage } from "@/hooks/use-pokemon-page";

export default function PokedexPage() {
  const { items, currentPage, totalPages, isLoading, error, pageNumbers, goToPage } = usePokemonPage();

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Pokédex</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Pokemon collection</h1>
        </div>
      </header>

      {error ? (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {isLoading ? <p className="text-sm text-muted-foreground">Loading Pokémon…</p> : <PokemonGrid items={items} />}

      <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1 || isLoading}
        >
          Previous
        </Button>

        {pageNumbers.map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "outline"}
            size="sm"
            onClick={() => goToPage(page)}
            disabled={isLoading}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages || isLoading}
        >
          Next
        </Button>
      </nav>
    </main>
  );
}
