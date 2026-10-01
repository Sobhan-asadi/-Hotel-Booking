import {
  HiOutlineCheckCircle,
  HiOutlineCursorClick,
  HiOutlineSparkles,
} from "react-icons/hi";

const benefits = [
  {
    id: "01",
    icon: HiOutlineSparkles,
    title: "Handpicked stays",
    description:
      "A focused collection of distinctive places, selected to make finding your next stay simpler.",
  },
  {
    id: "02",
    icon: HiOutlineCursorClick,
    title: "Simple booking",
    description:
      "A clear experience from discovering a stay to choosing your dates and completing your booking.",
  },
  {
    id: "03",
    icon: HiOutlineCheckCircle,
    title: "Travel with confidence",
    description:
      "Useful stay details, amenities and booking information presented clearly before you decide.",
  },
];

export default function WhyOgo() {
  return (
    <section
      id="experiences"
      className="page-container py-20 sm:py-24 lg:py-28"
    >
      <div className="grid overflow-hidden rounded-[32px] border border-black/[0.06] bg-[#eee9df] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">
          <img
            src="/images/hotel6.jpg"
            alt="Elegant hotel interior"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

          <div
            aria-hidden="true"
            className="from-primary-950/55 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
          />

          <div className="absolute right-5 bottom-5 left-5 sm:right-7 sm:bottom-7 sm:left-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md">
              <span className="bg-accent-200 h-1.5 w-1.5 rounded-full" />
              Thoughtfully selected stays
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
          <div className="max-w-xl">
            <p className="section-eyebrow">Why Ogo</p>

            <h2 className="font-display text-primary-950 mt-4 text-[38px] leading-[1.07] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[54px]">
              Less searching.
              <span className="text-primary-600 block">More discovering.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              We keep the experience focused so you can spend less time
              comparing and more time looking forward to where you are going.
            </p>
          </div>

          <div className="border-primary-900/10 mt-10 border-t">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.id}
                  className="group border-primary-900/10 grid grid-cols-[42px_1fr] gap-4 border-b py-6 sm:grid-cols-[52px_1fr] sm:gap-5"
                >
                  <div className="pt-0.5">
                    <span className="text-accent-700 text-[10px] font-bold tracking-[0.16em]">
                      {benefit.id}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="bg-primary-900/[0.07] text-primary-700 group-hover:bg-primary-900 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:text-white">
                        <Icon aria-hidden="true" className="text-base" />
                      </span>

                      <h3 className="font-display text-primary-950 text-xl font-semibold tracking-[-0.02em] sm:text-[22px]">
                        {benefit.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
