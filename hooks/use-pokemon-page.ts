"use client";

import { useEffect, useMemo, useState } from "react";

import { clampPage, getPageNumbers } from "@/lib/pokemon-pagination";
import { getPokemonPage, ServiceError } from "@/services/pokemon-service";
import type { PokemonListItem } from "@/schemas/pokemon.schema";

export interface UsePokemonPageResult {
  items: PokemonListItem[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  pageNumbers: number[];
  goToPage: (page: number) => void;
}

export function usePokemonPage(pageSize = 20): UsePokemonPageResult {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<PokemonListItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPage() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getPokemonPage(currentPage, pageSize);

        if (!isMounted) return;

        const safePage = clampPage(currentPage, response.count, pageSize);
        const pageCount = Math.max(1, Math.ceil(response.count / pageSize));

        setCurrentPage(safePage);
        setItems(response.results);
        setTotalPages(pageCount);
      } catch (err) {
        if (!isMounted) return;

        setItems([]);
        setError(err instanceof ServiceError ? err.message : "Something went wrong.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadPage();

    return () => {
      isMounted = false;
    };
  }, [currentPage, pageSize]);

  const pageNumbers = useMemo(
    () => getPageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );

  return {
    items,
    currentPage,
    totalPages,
    isLoading,
    error,
    pageNumbers,
    goToPage: (page: number) => setCurrentPage(clampPage(page, totalPages, pageSize)),
  };
}
