import { HiOutlineAdjustments } from "react-icons/hi";

const roomTypes = ["Single bed", "Double Bed", "Luxury Room", "Family Suite"];

const priceRanges = [
  {
    label: "Under $300",
    value: "under-300",
  },
  {
    label: "$300 – $400",
    value: "300-400",
  },
  {
    label: "$400 – $500",
    value: "400-500",
  },
  {
    label: "$500+",
    value: "500-plus",
  },
];

const sortOptions = [
  {
    label: "Recommended",
    value: "recommended",
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
    label: "Highest Rated",
    value: "rating-desc",
  },
];

export default function RoomFilters({
  selectedTypes,
  selectedPrice,
  sortBy,
  openFilters,
  onToggleFilters,
  onTypeChange,
  onPriceChange,
  onSortChange,
  onClear,
}) {
  const hasActiveFilters =
    selectedTypes.length > 0 ||
    selectedPrice !== "all" ||
    sortBy !== "recommended";

  return (
    <aside className="w-full lg:sticky lg:top-28 lg:w-[290px] lg:shrink-0">
      <div className="border-primary-900/[0.08] overflow-hidden rounded-[24px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.05)]">
        <div className="border-primary-900/[0.07] flex min-h-16 items-center justify-between border-b px-5">
          <div className="flex items-center gap-2.5">
            <HiOutlineAdjustments
              aria-hidden="true"
              className="text-primary-700 text-lg"
            />

            <p className="text-primary-950 text-sm font-semibold">Filters</p>
          </div>

          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onClear}
                className="text-accent-700 hover:text-accent-900 text-xs font-semibold transition-colors"
              >
                Clear
              </button>
            )}

            <button
              type="button"
              onClick={onToggleFilters}
              aria-expanded={openFilters}
              className="text-primary-700 text-xs font-semibold lg:hidden"
            >
              {openFilters ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className={`${openFilters ? "block" : "hidden lg:block"}`}>
          <FilterGroup title="Room type">
            <div className="space-y-3">
              {roomTypes.map((type) => (
                <label
                  key={type}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => onTypeChange(type)}
                    className="accent-primary-800 h-4 w-4 cursor-pointer"
                  />

                  <span className="group-hover:text-primary-950 text-sm text-zinc-600 transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Price per night">
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <label
                  key={range.value}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="radio"
                    name="price-range"
                    value={range.value}
                    checked={selectedPrice === range.value}
                    onChange={() => onPriceChange(range.value)}
                    className="accent-primary-800 h-4 w-4 cursor-pointer"
                  />

                  <span className="group-hover:text-primary-950 text-sm text-zinc-600 transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Sort by" last>
            <div className="space-y-3">
              {sortOptions.map((option) => (
                <label
                  key={option.value}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="radio"
                    name="sort-by"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={() => onSortChange(option.value)}
                    className="accent-primary-800 h-4 w-4 cursor-pointer"
                  />

                  <span className="group-hover:text-primary-950 text-sm text-zinc-600 transition-colors">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </FilterGroup>
        </div>
      </div>
    </aside>
  );
}

function FilterGroup({ title, children, last = false }) {
  return (
    <div
      className={`px-5 py-6 ${
        last ? "" : "border-primary-900/[0.07] border-b"
      }`}
    >
      <h3 className="text-primary-950 mb-4 text-[11px] font-bold tracking-[0.14em] uppercase">
        {title}
      </h3>

      {children}
    </div>
  );
}
