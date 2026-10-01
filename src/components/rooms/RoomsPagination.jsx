import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function getPaginationItems(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

export default function RoomsPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  const paginationItems = getPaginationItems(currentPage, totalPages);

  return (
    <nav
      aria-label="Rooms pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:mt-14"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="border-primary-900/[0.1] text-primary-800 hover:border-primary-900/25 hover:bg-primary-50 flex h-11 w-11 items-center justify-center rounded-full border bg-white transition disabled:pointer-events-none disabled:opacity-35"
      >
        <HiChevronLeft aria-hidden="true" className="text-lg" />
      </button>

      {paginationItems.map((item, index) => {
        if (item === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="flex h-11 min-w-8 items-center justify-center text-sm font-semibold text-zinc-400"
            >
              …
            </span>
          );
        }

        const isActive = item === currentPage;

        return (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            aria-label={`Go to page ${item}`}
            aria-current={isActive ? "page" : undefined}
            className={`h-11 min-w-11 rounded-full border px-3 text-sm font-semibold transition ${
              isActive
                ? "border-primary-950 bg-primary-950 text-white"
                : "border-primary-900/[0.1] text-primary-800 hover:border-primary-900/25 hover:bg-primary-50 bg-white"
            }`}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="border-primary-900/[0.1] text-primary-800 hover:border-primary-900/25 hover:bg-primary-50 flex h-11 w-11 items-center justify-center rounded-full border bg-white transition disabled:pointer-events-none disabled:opacity-35"
      >
        <HiChevronRight aria-hidden="true" className="text-lg" />
      </button>
    </nav>
  );
}
