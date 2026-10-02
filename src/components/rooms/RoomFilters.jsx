import {
  HiChevronDown,
  HiOutlineAdjustments,
  HiOutlineRefresh,
} from "react-icons/hi";

const roomTypes = ["Single bed", "Double Bed", "Luxury Room", "Family Suite"];

const priceRanges = [
  {
    label: "Any price",
    value: "all",
  },
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
  onTypeChange,
  onClearTypes,
  onPriceChange,
  onSortChange,
  onClear,
}) {
  const hasActiveFilters =
    selectedTypes.length > 0 ||
    selectedPrice !== "all" ||
    sortBy !== "recommended";

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2">
          <HiOutlineAdjustments
            aria-hidden="true"
            className="text-primary-700 text-lg"
          />

          <p className="text-primary-950 text-sm font-semibold">
            Refine your search
          </p>
        </div>

        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClear}
              className="hover:text-primary-900 flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-zinc-500 transition-colors"
            >
              <HiOutlineRefresh aria-hidden="true" className="text-base" />
              Reset
            </button>
          )}

          <div className="relative">
            <select
              aria-label="Sort rooms"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="border-primary-900/[0.1] text-primary-950 focus:border-primary-700 min-h-11 appearance-none rounded-full border bg-white py-2 pr-10 pl-4 text-xs font-semibold transition outline-none"
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

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          <button
            type="button"
            aria-pressed={selectedTypes.length === 0}
            onClick={onClearTypes}
            className={`min-h-11 shrink-0 rounded-full border px-4 text-xs font-semibold transition ${
              selectedTypes.length === 0
                ? "border-primary-900 bg-primary-900 text-white"
                : "border-primary-900/[0.1] text-primary-800 hover:border-primary-900/30 bg-white"
            }`}
          >
            All stays
          </button>

          {roomTypes.map((type) => {
            const isSelected = selectedTypes.includes(type);

            return (
              <button
                key={type}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onTypeChange(type)}
                className={`min-h-11 shrink-0 rounded-full border px-4 text-xs font-semibold transition ${
                  isSelected
                    ? "border-primary-900 bg-primary-900 text-white"
                    : "border-primary-900/[0.1] text-primary-800 hover:border-primary-900/30 bg-white"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <div className="relative shrink-0">
          <label htmlFor="room-price-filter" className="sr-only">
            Price per night
          </label>

          <select
            id="room-price-filter"
            value={selectedPrice}
            onChange={(event) => onPriceChange(event.target.value)}
            className="border-primary-900/[0.1] text-primary-800 focus:border-primary-700 min-h-11 w-full appearance-none rounded-full border bg-white py-2 pr-10 pl-4 text-xs font-semibold transition outline-none sm:w-auto"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
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
  );
}
