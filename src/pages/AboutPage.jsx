import {
  HiArrowRight,
  HiOutlineCheck,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineSparkles,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Thoughtful selection",
    description:
      "A focused collection of stays chosen around character, comfort, and a strong sense of place.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Travel with intention",
    description:
      "We believe the right stay should support the journey, not simply give you somewhere to sleep.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "Human experiences",
    description:
      "The details that make a trip memorable often come from atmosphere, connection, and feeling.",
    icon: HiOutlineHeart,
  },
];

const principles = [
  "Distinctive stays over endless listings",
  "Clear and considered booking experiences",
  "Design that keeps the destination in focus",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-primary-950 relative min-h-[680px] overflow-hidden sm:min-h-[720px] lg:min-h-[780px]">
        <img
          src="/images/hotel8.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

        <div
          aria-hidden="true"
          className="from-primary-950/95 via-primary-950/70 to-primary-950/15 absolute inset-0 bg-gradient-to-r"
        />

        <div
          aria-hidden="true"
          className="from-primary-950/70 absolute inset-0 bg-gradient-to-t via-transparent to-black/15"
        />

        <div className="page-container relative z-10 flex min-h-[680px] items-end pt-36 pb-16 sm:min-h-[720px] sm:pb-20 lg:min-h-[780px] lg:pb-24">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span className="bg-accent-300 h-px w-9" />

              <p className="text-accent-200 text-[10px] font-bold tracking-[0.2em] uppercase">
                About Ogo
              </p>
            </div>

            <h1 className="font-display mt-6 text-[46px] leading-[0.98] font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-[76px]">
              Better stays begin
              <br />
              with better choices.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Ogo is a demo hospitality platform built around a simple idea:
              finding a memorable place to stay should feel considered, clear,
              and inspiring.
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div>
              <p className="section-eyebrow">Our perspective</p>

              <h2 className="section-title mt-3 max-w-xl">
                Less searching.
                <br />
                More discovering.
              </h2>
            </div>

            <div>
              <p className="font-display text-primary-950 max-w-2xl text-2xl leading-[1.4] font-medium tracking-[-0.025em] sm:text-3xl">
                Travel platforms can make choosing a stay feel like sorting
                through an endless catalogue.
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                Ogo takes a more focused approach. The experience is designed
                around clear discovery, useful details, and distinctive
                properties — giving each stay enough room to tell its own story.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                This project demonstrates a modern booking experience across
                guest discovery, reservations, booking management, and
                hotel-owner workflows.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="border-primary-900/[0.07] rounded-[26px] border bg-white p-6 shadow-[0_18px_50px_rgba(25,45,37,0.05)] sm:p-7"
                >
                  <div className="bg-primary-50 text-primary-700 flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon aria-hidden="true" className="text-xl" />
                  </div>

                  <h3 className="font-display text-primary-950 mt-7 text-2xl font-semibold tracking-[-0.03em]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#ece8df] py-20 sm:py-24 lg:py-28">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            <div className="relative">
              <div className="bg-primary-100 aspect-[4/3] overflow-hidden rounded-[28px]">
                <img
                  src="/images/hotel5.jpg"
                  alt="Distinctive hotel stay"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="bg-primary-950/85 absolute right-4 bottom-4 left-4 rounded-[22px] border border-white/20 p-5 text-white shadow-xl backdrop-blur-md sm:right-auto sm:bottom-6 sm:left-6 sm:max-w-[260px]">
                <p className="text-accent-300 text-[9px] font-bold tracking-[0.18em] uppercase">
                  The idea
                </p>

                <p className="font-display mt-2 text-xl leading-7 font-semibold">
                  The stay is part of the destination.
                </p>
              </div>
            </div>

            <div>
              <p className="section-eyebrow">What matters</p>

              <h2 className="section-title mt-3">
                Built around the
                <br />
                journey, not the noise.
              </h2>

              <p className="section-description">
                Every part of the experience is intended to make discovering and
                managing a stay feel straightforward without stripping away the
                character that makes travel exciting.
              </p>

              <div className="mt-8 space-y-4">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-start gap-3">
                    <span className="bg-primary-900 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                      <HiOutlineCheck aria-hidden="true" className="text-sm" />
                    </span>

                    <p className="text-primary-950 text-sm leading-6 font-medium">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <div className="page-container">
          <div className="bg-primary-950 relative overflow-hidden rounded-[30px]">
            <img
              src="/images/hotel3.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />

            <div
              aria-hidden="true"
              className="from-primary-950 via-primary-950/90 to-primary-950/55 absolute inset-0 bg-gradient-to-r"
            />

            <div className="relative z-10 flex flex-col gap-9 px-6 py-14 sm:px-10 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
              <div>
                <p className="text-accent-300 text-[10px] font-bold tracking-[0.18em] uppercase">
                  Start exploring
                </p>

                <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                  Your next stay
                  <br className="hidden sm:block" /> starts here.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                  Browse the collection and discover a stay that fits the way
                  you want to travel.
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
