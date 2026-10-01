import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function RoomManagementCard({ room, onToggleAvailability }) {
  return (
    <article className="border-primary-900/[0.07] overflow-hidden rounded-[22px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.035)]">
      <Link
        to={`/rooms/${room.id}`}
        aria-label={`View ${room.name}`}
        className="bg-primary-100 relative block aspect-[16/10] overflow-hidden"
      >
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />

        <span
          className={`absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-[10px] font-semibold backdrop-blur-md ${
            room.isAvailable
              ? "text-primary-700 bg-white/90"
              : "bg-black/45 text-white"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              room.isAvailable ? "bg-primary-500" : "bg-zinc-300"
            }`}
          />

          {room.isAvailable ? "Available" : "Unavailable"}
        </span>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-accent-700 text-[9px] font-bold tracking-[0.12em] uppercase">
              {room.type ?? "Room"}
            </p>

            <Link to={`/rooms/${room.id}`} className="mt-1.5 block">
              <h2 className="text-primary-950 truncate text-lg font-semibold tracking-[-0.025em]">
                {room.name}
              </h2>
            </Link>

            <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-400">
              <HiOutlineLocationMarker
                aria-hidden="true"
                className="text-accent-600 shrink-0 text-base"
              />

              <span className="truncate">{room.location}</span>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-primary-950 text-lg font-semibold tracking-[-0.03em]">
              ${room.pricePerNight}
            </p>

            <p className="text-[10px] text-zinc-400">per night</p>
          </div>
        </div>

        <div className="border-primary-900/[0.06] mt-5 flex items-center justify-between gap-4 border-t pt-4">
          <div>
            <p className="text-[9px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
              Availability
            </p>

            <p className="text-primary-950 mt-1 text-xs font-medium">
              {room.isAvailable ? "Accepting bookings" : "Hidden from booking"}
            </p>
          </div>

          <label className="relative inline-flex shrink-0 cursor-pointer items-center">
            <span className="sr-only">
              {room.isAvailable
                ? `Mark ${room.name} as unavailable`
                : `Mark ${room.name} as available`}
            </span>

            <input
              type="checkbox"
              checked={Boolean(room.isAvailable)}
              onChange={() => onToggleAvailability(room.id)}
              className="peer sr-only"
            />

            <span className="peer-checked:bg-primary-700 peer-focus-visible:ring-primary-700/30 h-6 w-11 rounded-full bg-zinc-200 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2" />

            <span className="absolute left-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
          </label>
        </div>

        <Link
          to={`/rooms/${room.id}`}
          className="border-primary-900/[0.08] text-primary-800 hover:bg-primary-50 mt-5 flex min-h-11 items-center justify-center gap-2 rounded-[14px] border text-xs font-semibold transition-colors"
        >
          View room
          <HiArrowRight aria-hidden="true" className="text-sm" />
        </Link>
      </div>
    </article>
  );
}
