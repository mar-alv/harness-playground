/**
 * Keeps a page number within the valid range for a paginated list.
 */
export function clampPage(page: number, totalItems: number, pageSize: number): number {
  const safePageSize = Math.max(1, pageSize);
  const safeTotalItems = Math.max(0, totalItems);
  const totalPages = Math.max(1, Math.ceil(safeTotalItems / safePageSize));

  return Math.min(Math.max(Number.isFinite(page) ? page : 1, 1), totalPages);
}

/**
 * Returns a compact, readable set of page numbers around the current page.
 */
export function getPageNumbers(currentPage: number, totalPages: number): number[] {
  const safeCurrentPage = Math.max(1, currentPage);
  const safeTotalPages = Math.max(1, totalPages);

  return Array.from({ length: safeTotalPages }, (_, index) => index + 1).filter(
    (page) =>
      page >= Math.max(1, safeCurrentPage - 2) &&
      page <= Math.min(safeTotalPages, safeCurrentPage + 2),
  );
}
