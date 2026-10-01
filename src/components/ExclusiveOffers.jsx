import { HiArrowRight } from "react-icons/hi";

import DiscountCards from "./DiscountCards";

export default function ExclusiveOffers() {
  return (
    <section className="bg-primary-950 relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="bg-primary-700/30 absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-accent-600/10 absolute -bottom-52 -left-40 h-[460px] w-[460px] rounded-full blur-3xl"
      />

      <div className="page-container relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-accent-300 mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
              Limited collections
            </p>

            <h2 className="font-display text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Exclusive stays,
              <span className="block text-white/55">thoughtfully priced.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Explore selected stays and special packages designed to make your
              next journey even more memorable.
            </p>
          </div>

          <button
            type="button"
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-white"
          >
            View all offers
            <span className="group-hover:border-accent-300 group-hover:bg-accent-300 group-hover:text-primary-950 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300">
              <HiArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </button>
        </div>

        {/* Offers */}
        <div className="mt-12 lg:mt-14">
          <DiscountCards />
        </div>
      </div>
    </section>
  );
}
