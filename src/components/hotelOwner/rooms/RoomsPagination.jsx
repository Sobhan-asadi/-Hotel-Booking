import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function getVisiblePages(currentPage, totalPages) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "ellipsis",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis-start",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-end",
    totalPages,
  ];
}

export default function RoomsPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }

  const firstItem = (currentPage - 1) * itemsPerPage + 1;

  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  const visiblePages = getVisiblePages(currentPage, totalPages);

  function goToPage(page) {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    onPageChange(page);
  }

  return (
    <nav
      aria-label="Rooms pagination"
      className="border-primary-900/[0.07] flex flex-col gap-4 rounded-[20px] border bg-white px-4 py-4 shadow-[0_8px_30px_rgba(20,40,32,0.025)] sm:flex-row sm:items-center sm:justify-between sm:px-5"
    >
      <p className="text-xs text-zinc-400">
        Showing{" "}
        <span className="text-primary-950 font-semibold">
          {firstItem}–{lastItem}
        </span>{" "}
        of <span className="text-primary-950 font-semibold">{totalItems}</span>{" "}
        rooms
      </p>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="border-primary-900/[0.08] text-primary-800 hover:bg-primary-50 flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
        >
          <HiChevronLeft aria-hidden="true" className="text-base" />
        </button>

        {visiblePages.map((page, index) => {
          if (typeof page === "string") {
            return (
              <span
                key={`${page}-${index}`}
                aria-hidden="true"
                className="flex h-9 min-w-6 items-center justify-center text-xs text-zinc-400"
              >
                …
              </span>
            );
          }

          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-label={`Go to page ${page}`}
              aria-current={isCurrent ? "page" : undefined}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold transition-colors ${
                isCurrent
                  ? "bg-primary-950 text-white"
                  : "hover:bg-primary-50 hover:text-primary-950 text-zinc-500"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="border-primary-900/[0.08] text-primary-800 hover:bg-primary-50 flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
        >
          <HiChevronRight aria-hidden="true" className="text-base" />
        </button>
      </div>
    </nav>
  );
}
