import { IoMdStar } from "react-icons/io";

export default function BookingSummary({ room }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-accent-700 text-[10px] font-bold tracking-[0.15em] uppercase">
          Reserve your stay
        </p>

        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-primary-950 text-3xl font-bold tracking-[-0.04em]">
            ${room.pricePerNight}
          </span>

          <span className="text-xs text-zinc-400">/ night</span>
        </div>
      </div>

      <div className="bg-accent-50 text-primary-950 flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold">
        <IoMdStar aria-hidden="true" className="text-accent-500 text-base" />

        {room.rating}
      </div>
    </div>
  );
}
