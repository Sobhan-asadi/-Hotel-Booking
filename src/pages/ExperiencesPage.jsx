import {
  HiArrowRight,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineSun,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Slow mornings",
    category: "Wellness",
    description:
      "Quiet spaces, restorative routines, and stays designed for a slower start to the day.",
    image: "/images/hotel4.jpg",
    icon: HiOutlineSun,
  },
  {
    title: "Local flavours",
    category: "Dining",
    description:
      "Thoughtful settings, memorable evenings, and experiences shaped by the destination.",
    image: "/images/hotel7.jpg",
    icon: HiOutlineHeart,
  },
  {
    title: "Beyond the familiar",
    category: "Explore",
    description:
      "From peaceful retreats to distinctive destinations, discover places worth stepping outside for.",
    image: "/images/hotel10.jpg",
    icon: HiOutlineGlobeAlt,
  },
];

const highlights = [
  "Thoughtfully selected stays",
  "Distinctive destinations",
  "Experiences beyond the room",
];

export default function ExperiencesPage() {
  return (
    <main className="overflow-hidden">
      <section className="bg-primary-950 relative min-h-[720px] sm:min-h-[760px] lg:min-h-[820px]">
        <img
          src="/images/hotel1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

        <div
          aria-hidden="true"
          className="from-primary-950/95 via-primary-950/65 to-primary-950/10 absolute inset-0 bg-gradient-to-r"
        />

        <div
          aria-hidden="true"
          className="from-primary-950/70 absolute inset-0 bg-gradient-to-t via-transparent to-black/20"
        />

        <div className="page-container relative z-10 flex min-h-[720px] items-end pt-40 pb-16 sm:min-h-[760px] sm:pt-44 sm:pb-20 lg:min-h-[820px] lg:pt-48 lg:pb-24">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span className="bg-accent-300 h-px w-9" />

              <p className="text-accent-200 text-[10px] font-bold tracking-[0.2em] uppercase">
                Beyond the stay
              </p>
            </div>

            <h1 className="font-display mt-6 text-[46px] leading-[0.98] font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-[76px]">
              Stay for the place.
              <br />
              Remember the feeling.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Thoughtful experiences can turn a beautiful room into a memorable
              journey. Discover a slower, more considered way to travel.
            </p>

            <Link
              to="/rooms"
              className="text-primary-950 hover:bg-accent-100 mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 text-xs font-semibold transition duration-300"
            >
              Explore stays
              <HiArrowRight aria-hidden="true" className="text-base" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="section-eyebrow">Curated experiences</p>

              <h2 className="section-title mt-3 max-w-lg">
                More than somewhere to sleep.
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                The places we remember are often defined by the moments around
                them — an unhurried morning, a landscape worth exploring, or an
                evening completely removed from routine.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2">
                    <span className="bg-accent-500 h-1.5 w-1.5 shrink-0 rounded-full" />

                    <span className="text-primary-800 text-xs font-semibold">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article key={experience.title} className="group">
                  <div className="bg-primary-100 relative aspect-[4/5] overflow-hidden rounded-[26px]">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5"
                    />

                    <div className="absolute top-5 left-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white backdrop-blur-md">
                        <Icon aria-hidden="true" className="text-xl" />
                      </span>
                    </div>

                    <div className="absolute right-5 bottom-6 left-5">
                      <p className="text-accent-200 text-[9px] font-bold tracking-[0.17em] uppercase">
                        {experience.category}
                      </p>

                      <h3 className="font-display mt-2 text-3xl font-semibold tracking-[-0.035em] text-white">
                        {experience.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-xs leading-5 text-white/65">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#ece8df] py-20 sm:py-24 lg:py-28">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <div className="relative">
              <div className="bg-primary-100 aspect-[4/3] overflow-hidden rounded-[28px]">
                <img
                  src="/images/hotel2.jpg"
                  alt="A curated Ogo stay"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -right-3 -bottom-5 hidden max-w-[220px] rounded-[20px] border border-white/60 bg-white/90 p-5 shadow-[0_20px_60px_rgba(20,40,32,0.12)] backdrop-blur-md sm:block lg:-right-6">
                <HiOutlineSparkles
                  aria-hidden="true"
                  className="text-accent-600 text-xl"
                />

                <p className="font-display text-primary-950 mt-3 text-lg leading-6 font-semibold">
                  Travel at your own pace.
                </p>

                <p className="mt-2 text-[10px] leading-5 text-zinc-500">
                  The best stays leave room for discovery.
                </p>
              </div>
            </div>

            <div>
              <p className="section-eyebrow">The Ogo perspective</p>

              <h2 className="section-title mt-3">
                A different rhythm
                <br />
                for every journey.
              </h2>

              <p className="section-description">
                Not every trip needs an itinerary filled from morning to night.
                Ogo is designed around stays that give the destination, the
                property, and your own pace room to matter.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                Whether that means a quiet weekend, a mountain retreat, or a few
                days discovering somewhere unfamiliar, the experience starts
                with choosing the right place to stay.
              </p>

              <Link to="/rooms" className="secondary-button mt-8 gap-3">
                Find your next stay
                <HiArrowRight aria-hidden="true" className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <div className="page-container">
          <div className="bg-primary-950 relative overflow-hidden rounded-[30px]">
            <img
              src="/images/hotel11.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div
              aria-hidden="true"
              className="from-primary-950 via-primary-950/90 to-primary-950/55 absolute inset-0 bg-gradient-to-r"
            />

            <div className="relative z-10 flex flex-col gap-9 px-6 py-14 sm:px-10 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
              <div>
                <p className="text-accent-300 text-[10px] font-bold tracking-[0.18em] uppercase">
                  Your next escape
                </p>

                <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                  Find a stay worth
                  <br className="hidden sm:block" /> travelling for.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                  Explore our demo collection of distinctive stays and find the
                  setting for your next journey.
                </p>
              </div>

              <Link
                to="/rooms"
                className="text-primary-950 hover:bg-accent-100 flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 text-xs font-semibold transition duration-300"
              >
                Browse all stays
                <HiArrowRight aria-hidden="true" className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
