import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";

const availabilityOptions = [
  {
    label: "All rooms",
    value: "all",
  },
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Unavailable",
    value: "unavailable",
  },
];

const sortOptions = [
  {
    label: "Default order",
    value: "default",
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
  },
  {
    label: "Name: A to Z",
    value: "name-asc",
  },
];

export default function RoomsToolbar({
  search,
  availability,
  sortBy,
  resultCount,
  onSearchChange,
  onAvailabilityChange,
  onSortChange,
}) {
  return (
    <section className="border-primary-900/[0.07] rounded-[22px] border bg-white p-4 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative w-full xl:max-w-md">
          <HiOutlineSearch
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-lg text-zinc-400"
          />

          <label htmlFor="room-search" className="sr-only">
            Search rooms
          </label>

          <input
            id="room-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by room name or location"
            autoComplete="off"
            className="border-primary-900/[0.08] bg-primary-50/40 text-primary-950 focus:border-primary-700/30 min-h-12 w-full rounded-[15px] border pr-4 pl-11 text-sm font-medium transition outline-none placeholder:font-normal placeholder:text-zinc-400 focus:bg-white"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="-mx-1 flex gap-1 overflow-x-auto px-1 py-1">
            {availabilityOptions.map((option) => {
              const isActive = availability === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onAvailabilityChange(option.value)}
                  aria-pressed={isActive}
                  className={`min-h-10 shrink-0 rounded-full px-4 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-primary-950 text-white"
                      : "hover:bg-primary-50 hover:text-primary-950 text-zinc-500"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="bg-primary-900/[0.08] hidden h-7 w-px sm:block" />

          <div className="relative shrink-0">
            <label htmlFor="room-sort" className="sr-only">
              Sort rooms
            </label>

            <select
              id="room-sort"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="border-primary-900/[0.09] text-primary-800 focus:border-primary-700 min-h-11 w-full appearance-none rounded-full border bg-white py-2 pr-10 pl-4 text-xs font-semibold transition outline-none sm:w-auto"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <HiChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm text-zinc-400"
            />
          </div>
        </div>
      </div>

      <div className="border-primary-900/[0.06] mt-4 flex items-center justify-between border-t pt-4">
        <p aria-live="polite" className="text-xs text-zinc-400">
          <span className="text-primary-800 font-semibold">{resultCount}</span>{" "}
          {resultCount === 1 ? "room" : "rooms"} found
        </p>

        {(search || availability !== "all" || sortBy !== "default") && (
          <p className="text-accent-700 text-[10px] font-semibold tracking-[0.08em] uppercase">
            Filtered results
          </p>
        )}
      </div>
    </section>
  );
}
