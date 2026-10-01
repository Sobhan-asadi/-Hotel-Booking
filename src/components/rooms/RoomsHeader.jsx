import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";

export default function RoomsHeader({
  destination,
  resultCount,
  onDestinationChange,
}) {
  return (
    <div className="border-primary-900/[0.08] border-b pb-8 sm:pb-10">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="bg-accent-600 h-px w-8" />

            <p className="section-eyebrow">Find your stay</p>
          </div>

          <h1 className="font-display text-primary-950 mt-4 text-[42px] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[58px]">
            Places worth
            <span className="text-primary-600 block">checking into.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Browse distinctive stays and narrow the collection to find the right
            place for your next journey.
          </p>
        </div>

        <div className="w-full xl:max-w-[430px]">
          <label
            htmlFor="rooms-destination"
            className="text-primary-800 mb-2 block text-[10px] font-bold tracking-[0.14em] uppercase"
          >
            Destination
          </label>

          <div className="border-primary-900/10 focus-within:border-primary-700/30 flex min-h-14 items-center rounded-full border bg-white p-1.5 shadow-[0_8px_25px_rgba(20,40,32,0.05)] transition">
            <HiOutlineLocationMarker
              aria-hidden="true"
              className="text-accent-600 ml-4 shrink-0 text-lg"
            />

            <input
              id="rooms-destination"
              type="search"
              value={destination}
              onChange={(event) => onDestinationChange(event.target.value)}
              placeholder="Search by destination"
              autoComplete="off"
              className="text-primary-950 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-zinc-400"
            />

            <span className="bg-primary-900 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white">
              <HiOutlineSearch aria-hidden="true" className="text-base" />
            </span>
          </div>

          <p aria-live="polite" className="mt-3 px-2 text-xs text-zinc-400">
            {resultCount} {resultCount === 1 ? "stay" : "stays"} found
          </p>
        </div>
      </div>
    </div>
  );
}
