import { describe, expect, it } from "vitest";

import { clampPage, getPageNumbers } from "@/lib/pokemon-pagination";

describe("pokemon-pagination", () => {
  it("keeps the page within the valid range", () => {
    expect(clampPage(0, 150, 20)).toBe(1);
    expect(clampPage(99, 150, 20)).toBe(8);
    expect(clampPage(4, 150, 20)).toBe(4);
  });

  it("returns page numbers around the current page", () => {
    expect(getPageNumbers(1, 5)).toEqual([1, 2, 3]);
    expect(getPageNumbers(4, 10)).toEqual([2, 3, 4, 5, 6]);
  });
});
