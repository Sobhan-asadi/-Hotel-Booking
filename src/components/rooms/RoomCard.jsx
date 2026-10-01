import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <article className="group border-primary-900/[0.07] overflow-hidden rounded-[28px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,40,32,0.11)]">
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <Link
          to={`/rooms/${room.id}`}
          className="bg-primary-50 relative min-h-[260px] overflow-hidden md:min-h-[330px]"
          aria-label={`View ${room.name}`}
        >
          <img
            src={room.image}
            alt={room.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {room.tag && (
            <span className="text-primary-950 absolute top-4 left-4 rounded-full border border-white/20 bg-white/90 px-3.5 py-2 text-[10px] font-bold tracking-[0.1em] uppercase shadow-sm backdrop-blur-md">
              {room.tag}
            </span>
          )}
        </Link>

        <div className="flex flex-col p-5 sm:p-6 lg:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
              <HiOutlineLocationMarker
                aria-hidden="true"
                className="text-accent-600 text-base"
              />

              <span>{room.location}</span>
            </div>

            <div className="bg-accent-50 text-primary-950 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold">
              <IoMdStar
                aria-hidden="true"
                className="text-accent-500 text-sm"
              />

              <span>{room.rating}</span>
            </div>
          </div>

          <Link to={`/rooms/${room.id}`} className="mt-4 w-fit">
            <h2 className="font-display text-primary-950 group-hover:text-primary-600 text-[28px] leading-tight font-semibold tracking-[-0.025em] transition-colors duration-300">
              {room.name}
            </h2>
          </Link>

          <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-zinc-500">
            {room.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {room.features?.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="border-primary-900/[0.07] bg-primary-50 text-primary-700 rounded-full border px-3 py-1.5 text-[11px] font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="border-primary-900/[0.07] mt-auto flex items-end justify-between gap-5 border-t pt-6">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] text-zinc-400 uppercase">
                From
              </p>

              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-primary-950 text-2xl font-bold tracking-[-0.035em]">
                  ${room.pricePerNight}
                </span>

                <span className="text-xs text-zinc-400">/ night</span>
              </div>
            </div>

            <Link
              to={`/rooms/${room.id}`}
              aria-label={`View details for ${room.name}`}
              className="group/button bg-primary-900 hover:bg-accent-600 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300"
            >
              <HiArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
