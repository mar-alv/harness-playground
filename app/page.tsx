import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Pokédex</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Browse every Pokémon</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore the full PokéAPI catalog with paginated cards showing each Pokémon’s image and name.
        </p>
        <Link
          href="/pokedex"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Open Pokédex
        </Link>
      </div>
    </main>
  );
}
