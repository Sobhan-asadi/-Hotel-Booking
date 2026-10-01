import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

export default function EmptyRoomsState({ onClear }) {
  return (
    <div className="border-primary-900/15 flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-dashed bg-white/50 px-6 text-center">
      <div className="bg-primary-100 text-primary-700 flex h-14 w-14 items-center justify-center rounded-full">
        <HiOutlineSearch aria-hidden="true" className="text-xl" />
      </div>

      <h2 className="font-display text-primary-950 mt-6 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
        No stays found
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
        Try another destination or clear your filters to explore the full
        collection.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="secondary-button mt-6 gap-2"
      >
        <HiOutlineX aria-hidden="true" />
        Clear filters
      </button>
    </div>
  );
}
