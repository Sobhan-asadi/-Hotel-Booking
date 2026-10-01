import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

export default function EmptyRoomsState({ onClear }) {
  return (
    <div className="border-primary-900/15 flex min-h-[340px] flex-col items-center justify-center rounded-[26px] border border-dashed bg-white px-6 py-12 text-center">
      <div className="bg-primary-100 text-primary-700 flex h-14 w-14 items-center justify-center rounded-full">
        <HiOutlineSearch aria-hidden="true" className="text-xl" />
      </div>

      <h2 className="font-display text-primary-950 mt-5 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
        No stays match your search
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
        Try a different destination or reset your filters to explore all
        available stays.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="secondary-button mt-6 gap-2"
      >
        <HiOutlineX aria-hidden="true" className="text-base" />
        Reset search
      </button>
    </div>
  );
}
