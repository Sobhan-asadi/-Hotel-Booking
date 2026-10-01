import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import BookingSearchForm from "./BookingSearchForm";

export default function Hero() {
  return (
    <section className="bg-primary-950 relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <img
        src="/background.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Main overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      {/* Left contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"
      />

      {/* Bottom contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/15"
      />

      {/* Hero content */}
      <div className="page-container relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 items-center pt-32 pb-[260px] sm:pt-36 sm:pb-[230px] lg:pt-40 lg:pb-[190px]">
          <div className="max-w-[700px]">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="bg-accent-300 h-px w-8 sm:w-10" />

              <p className="text-[10px] font-semibold tracking-[0.24em] text-white/75 uppercase sm:text-xs">
                Curated stays around the world
              </p>
            </div>

            <h1 className="font-display max-w-[680px] text-[44px] leading-[1.04] font-semibold tracking-[-0.035em] text-white sm:text-[58px] lg:text-[68px] xl:text-[74px]">
              Exceptional stays
              <span className="block text-white">for remarkable journeys.</span>
            </h1>

            <p className="mt-5 max-w-[530px] text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8">
              Discover distinctive hotels and memorable places to stay,
              thoughtfully selected for your next escape.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8">
              <Link
                to="/rooms"
                className="group text-primary-950 hover:bg-accent-100 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold transition duration-300"
              >
                Explore stays
                <HiArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#featured-stays"
                className="group inline-flex min-h-12 items-center gap-3 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                Featured stays
                <span
                  aria-hidden="true"
                  className="h-px w-7 bg-white/40 transition-all duration-300 group-hover:w-10 group-hover:bg-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Search area */}
        <div className="absolute right-5 bottom-7 left-5 sm:right-7 sm:bottom-9 sm:left-7 lg:right-10 lg:bottom-10 lg:left-10 xl:right-14 xl:left-14">
          <div className="mb-4 hidden items-center justify-between px-1 lg:flex">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              Find your next stay
            </p>

            <p className="text-xs text-white/50">
              Destination · Dates · Guests
            </p>
          </div>

          <BookingSearchForm />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/20 to-transparent"
      />
    </section>
  );
}
