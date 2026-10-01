import { HiArrowRight } from "react-icons/hi";

import { discountData } from "../../api/data";

export default function DiscountCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {discountData.map((item, index) => (
        <article
          key={item.id}
          className={`group relative overflow-hidden rounded-[28px] border border-white/10 ${
            index === 0 ? "md:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div className="relative min-h-[420px] sm:min-h-[460px]">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
              <span className="rounded-full border border-white/20 bg-black/20 px-3.5 py-2 text-[10px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md">
                Special offer
              </span>

              <div className="bg-accent-200 text-primary-950 flex h-16 w-16 flex-col items-center justify-center rounded-full shadow-lg">
                <span className="text-xl leading-none font-bold">
                  {item.priceoff}%
                </span>

                <span className="mt-1 text-[9px] font-bold tracking-[0.12em] uppercase">
                  Off
                </span>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-7">
              <p className="text-accent-200 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Curated experience
              </p>

              <h3 className="font-display mt-3 max-w-[280px] text-3xl leading-[1.08] font-semibold tracking-[-0.025em] text-white">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[300px] text-sm leading-6 text-white/65">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-sm font-semibold text-white">
                  Explore offer
                </span>

                <span className="group-hover:border-accent-200 group-hover:bg-accent-200 group-hover:text-primary-950 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300">
                  <HiArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
