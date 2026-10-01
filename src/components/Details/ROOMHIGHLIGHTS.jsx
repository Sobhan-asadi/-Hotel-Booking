import { HiOutlineCheck, HiOutlineSparkles } from "react-icons/hi";

export default function RoomHighlights({ room }) {
  return (
    <section className="border-primary-900/[0.08] mt-12 border-y py-12 sm:mt-14 sm:py-14 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-primary-100 text-primary-700 flex h-10 w-10 items-center justify-center rounded-full">
              <HiOutlineSparkles aria-hidden="true" className="text-lg" />
            </span>

            <p className="text-accent-700 text-[11px] font-bold tracking-[0.16em] uppercase">
              Stay highlights
            </p>
          </div>

          <h2 className="font-display text-primary-950 mt-5 max-w-md text-3xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
            Designed around
            <span className="text-primary-600 block">your stay.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
            Thoughtful amenities and useful comforts come together to make your
            time at{" "}
            <span className="text-primary-800 font-medium">{room.name}</span>{" "}
            feel simple and comfortable.
          </p>
        </div>

        <div>
          <p className="max-w-2xl text-base leading-8 text-zinc-600">
            {room.description}
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {room.features?.map((feature, index) => (
              <div
                key={feature}
                className="group border-primary-900/[0.08] flex min-h-[78px] items-center gap-4 border-b"
              >
                <span className="bg-primary-100 text-primary-700 group-hover:bg-primary-900 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:text-white">
                  <HiOutlineCheck aria-hidden="true" className="text-base" />
                </span>

                <div>
                  <span className="text-[9px] font-bold tracking-[0.14em] text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-primary-950 mt-0.5 text-sm font-semibold">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-zinc-400">
            <p>
              <span className="text-primary-800 font-semibold">
                {room.type}
              </span>{" "}
              room
            </p>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-zinc-300"
            />

            <p>
              From{" "}
              <span className="text-primary-800 font-semibold">
                ${room.pricePerNight}
              </span>{" "}
              per night
            </p>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-zinc-300"
            />

            <p>
              <span className="text-primary-800 font-semibold">
                {room.rating}
              </span>{" "}
              guest rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
