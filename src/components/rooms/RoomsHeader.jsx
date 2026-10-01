import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";

export default function RoomsHeader({
  destination,
  resultCount,
  onDestinationChange,
}) {
  return (
    <header>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,520px)] lg:items-end lg:gap-12">
        <div>
          <p className="section-eyebrow">Explore stays</p>

          <h1 className="font-display text-primary-950 mt-3 max-w-2xl text-[40px] leading-[1.04] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[56px]">
            Find a stay that
            <span className="text-primary-600 block">feels right.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Search the collection by destination, then refine the results by
            room type, price, or rating.
          </p>
        </div>

        <div>
          <label
            htmlFor="rooms-destination"
            className="text-primary-700 mb-2.5 block text-[10px] font-bold tracking-[0.14em] uppercase"
          >
            Where do you want to stay?
          </label>

          <div className="border-primary-900/[0.1] focus-within:border-primary-700/30 flex min-h-16 items-center rounded-[20px] border bg-white p-1.5 shadow-[0_10px_35px_rgba(20,40,32,0.06)] transition">
            <span className="bg-primary-50 text-primary-700 ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <HiOutlineLocationMarker aria-hidden="true" className="text-lg" />
            </span>

            <input
              id="rooms-destination"
              type="search"
              value={destination}
              onChange={(event) => onDestinationChange(event.target.value)}
              placeholder="City, hotel or destination"
              autoComplete="off"
              className="text-primary-950 min-w-0 flex-1 bg-transparent px-3 text-sm font-medium outline-none placeholder:font-normal placeholder:text-zinc-400"
            />

            <span className="bg-primary-950 flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] text-white">
              <HiOutlineSearch aria-hidden="true" className="text-lg" />
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-4 px-1">
            <p aria-live="polite" className="text-xs text-zinc-400">
              <span className="text-primary-800 font-semibold">
                {resultCount}
              </span>{" "}
              {resultCount === 1 ? "stay" : "stays"} available
            </p>

            {destination && (
              <p className="max-w-[180px] truncate text-xs text-zinc-400">
                Results for{" "}
                <span className="text-primary-700 font-medium">
                  {destination}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
