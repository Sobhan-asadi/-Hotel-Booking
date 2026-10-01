import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

import hotels from "../../api/data";

const featuredHotels = hotels.slice(0, 4);

export default function FeaturedHotels() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {featuredHotels.map((hotel) => (
        <article
          key={hotel.id}
          className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_8px_30px_rgba(30,40,35,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(30,40,35,0.13)]"
        >
          <Link
            to={`/rooms/${hotel.id}`}
            className="flex h-full flex-col"
            aria-label={`View details for ${hotel.name}`}
          >
            <div className="relative m-2.5 aspect-[1.18/1] overflow-hidden rounded-[21px] bg-zinc-200">
              <img
                src={hotel.image}
                alt={hotel.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

              {hotel.tag && (
                <span className="text-primary-950 absolute top-3 left-3 rounded-full bg-white/95 px-3.5 py-2 text-[10px] font-bold tracking-[0.1em] uppercase shadow-sm backdrop-blur-md">
                  {hotel.tag}
                </span>
              )}

              <div className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <IoMdStar
                  aria-hidden="true"
                  className="text-accent-300 text-sm"
                />
                <span>{hotel.rating}</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col px-5 pt-3 pb-5">
              <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <HiOutlineLocationMarker
                  aria-hidden="true"
                  className="text-accent-600 shrink-0 text-base"
                />
                <span>{hotel.location}</span>
              </div>

              <h3 className="font-display text-primary-950 mt-2.5 text-[22px] leading-tight font-semibold tracking-[-0.025em]">
                {hotel.name}
              </h3>

              <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-zinc-500">
                {hotel.description}
              </p>

              <div className="mt-4 flex min-h-[28px] flex-wrap gap-1.5">
                {hotel.features?.slice(0, 2).map((feature) => (
                  <span
                    key={feature}
                    className="bg-primary-50 text-primary-700 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-end justify-between gap-3 border-t border-black/[0.06] pt-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-400 uppercase">
                    From
                  </p>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-primary-950 text-xl font-bold tracking-[-0.03em]">
                      ${hotel.pricePerNight}
                    </span>
                    <span className="text-xs text-zinc-400">/ night</span>
                  </div>
                </div>

                <span className="bg-primary-900 group-hover:bg-accent-600 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300">
                  <HiArrowRight
                    aria-hidden="true"
                    className="text-base transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
