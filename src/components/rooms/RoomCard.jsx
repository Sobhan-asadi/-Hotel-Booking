import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <article className="group border-primary-900/[0.08] hover:border-primary-900/[0.14] flex h-full min-w-0 flex-col overflow-hidden rounded-[26px] border bg-white shadow-[0_8px_28px_rgba(20,40,32,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,40,32,0.09)]">
      <Link
        to={`/rooms/${room.id}`}
        aria-label={`View ${room.name}`}
        className="block"
      >
        <div className="bg-primary-100 relative aspect-[4/3] overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5"
          />

          <div className="text-primary-950 absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur-md">
            <IoMdStar aria-hidden="true" className="text-accent-500 text-sm" />

            <span>{room.rating}</span>
          </div>

          {room.tag && (
            <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[9px] font-bold tracking-[0.12em] text-white uppercase backdrop-blur-md">
              {room.tag}
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-1.5 text-xs text-zinc-500">
            <HiOutlineLocationMarker
              aria-hidden="true"
              className="text-accent-600 shrink-0 text-base"
            />

            <span className="truncate">{room.location}</span>
          </div>

          {room.type && (
            <span className="shrink-0 text-[10px] font-semibold tracking-[0.08em] text-zinc-400 uppercase">
              {room.type}
            </span>
          )}
        </div>

        <Link to={`/rooms/${room.id}`} className="mt-2 block">
          <h2 className="font-display text-primary-950 group-hover:text-primary-600 line-clamp-1 text-[23px] leading-tight font-semibold tracking-[-0.025em] transition-colors duration-300">
            {room.name}
          </h2>
        </Link>

        <div className="border-primary-900/[0.07] mt-5 flex items-end justify-between gap-4 border-t pt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-primary-950 text-lg font-bold tracking-[-0.025em]">
              ${room.pricePerNight}
            </span>

            <span className="text-[11px] text-zinc-400">/ night</span>
          </div>

          <Link
            to={`/rooms/${room.id}`}
            aria-label={`View details for ${room.name}`}
            className="text-primary-800 hover:text-accent-700 flex items-center gap-1.5 text-xs font-semibold transition-colors"
          >
            View stay
            <HiArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
