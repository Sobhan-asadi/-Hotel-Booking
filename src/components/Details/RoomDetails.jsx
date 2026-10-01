import {
  HiChevronRight,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function RoomDetails({ room }) {
  function scrollToBooking() {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header>
      <nav
        aria-label="Breadcrumb"
        className="mb-7 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400"
      >
        <Link to="/" className="hover:text-primary-900 transition-colors">
          Home
        </Link>

        <HiChevronRight aria-hidden="true" className="text-zinc-300" />

        <Link to="/rooms" className="hover:text-primary-900 transition-colors">
          Stays
        </Link>

        <HiChevronRight aria-hidden="true" className="text-zinc-300" />

        <span className="text-primary-800">{room.name}</span>
      </nav>

      <div className="border-primary-900/[0.08] grid gap-8 border-b pb-8 sm:pb-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            {room.tag && (
              <span className="bg-primary-100 text-primary-800 rounded-full px-3.5 py-2 text-[10px] font-bold tracking-[0.12em] uppercase">
                {room.tag}
              </span>
            )}

            {room.type && (
              <span className="border-primary-900/10 text-primary-700 rounded-full border bg-white px-3.5 py-2 text-[10px] font-bold tracking-[0.12em] uppercase">
                {room.type}
              </span>
            )}

            <div className="border-accent-500/15 bg-accent-50 text-primary-950 flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold">
              <IoMdStar
                aria-hidden="true"
                className="text-accent-500 text-base"
              />

              <span>{room.rating}</span>
            </div>
          </div>

          <h1 className="font-display text-primary-950 mt-5 max-w-4xl text-[42px] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-[54px] lg:text-[64px]">
            {room.name}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
              <HiOutlineLocationMarker
                aria-hidden="true"
                className="text-accent-600 shrink-0 text-lg"
              />

              <span>{room.location}</span>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block"
            />

            <p className="text-sm text-zinc-500">
              Curated stay · Ogo collection
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            {room.description}
          </p>
        </div>

        <div className="border-primary-900/[0.08] flex items-end justify-between gap-8 border-t pt-6 lg:min-w-[240px] lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
          <div className="lg:text-right">
            <p className="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
              From
            </p>

            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-primary-950 text-3xl font-bold tracking-[-0.04em]">
                ${room.pricePerNight}
              </span>

              <span className="text-xs text-zinc-400">/ night</span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToBooking}
            className="group bg-primary-900 hover:bg-primary-700 flex min-h-12 items-center justify-center gap-2.5 rounded-full px-5 text-sm font-semibold text-white transition duration-300"
          >
            <HiOutlineCalendar aria-hidden="true" className="text-base" />
            Check availability
          </button>
        </div>
      </div>
    </header>
  );
}
