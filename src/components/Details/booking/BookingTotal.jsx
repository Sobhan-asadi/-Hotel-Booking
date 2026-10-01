import { HiOutlineCheck, HiOutlineShieldCheck } from "react-icons/hi";

export default function BookingTotal({ room, nights, totalPrice }) {
  return (
    <div className="mt-6">
      {nights > 0 ? (
        <>
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-zinc-500">
              ${room.pricePerNight} × {nights}{" "}
              {nights === 1 ? "night" : "nights"}
            </span>

            <span className="text-primary-950 font-semibold">
              ${totalPrice}
            </span>
          </div>

          <div className="border-primary-900/[0.08] my-5 border-t" />

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-primary-950 text-sm font-semibold">Total</p>

              <p className="mt-1 text-[11px] text-zinc-400">
                Estimated stay total
              </p>
            </div>

            <p className="text-primary-950 text-2xl font-bold tracking-[-0.035em]">
              ${totalPrice}
            </p>
          </div>
        </>
      ) : (
        <div className="bg-primary-50/70 rounded-[16px] px-4 py-4">
          <p className="text-xs leading-5 text-zinc-500">
            Select your dates to see the estimated total for your stay.
          </p>
        </div>
      )}

      <button
        type="submit"
        className="bg-primary-950 hover:bg-primary-700 mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition duration-300"
      >
        <HiOutlineCheck aria-hidden="true" className="text-base" />
        Reserve stay
      </button>

      <div className="mt-4 flex items-start justify-center gap-2 text-center">
        <HiOutlineShieldCheck
          aria-hidden="true"
          className="text-primary-600 mt-0.5 shrink-0 text-sm"
        />

        <p className="text-[10px] leading-4 text-zinc-400">
          Portfolio demo — no payment will be processed.
        </p>
      </div>
    </div>
  );
}
