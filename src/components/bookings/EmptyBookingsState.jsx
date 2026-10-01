import { HiOutlineCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function EmptyBookingsState() {
  return (
    <section className="border-primary-900/15 mt-10 overflow-hidden rounded-[28px] border border-dashed bg-white/60">
      <div className="flex min-h-[380px] flex-col items-center justify-center px-6 py-14 text-center">
        <span className="bg-primary-100 text-primary-700 flex h-16 w-16 items-center justify-center rounded-full">
          <HiOutlineCalendar aria-hidden="true" className="text-2xl" />
        </span>

        <p className="text-accent-700 mt-6 text-[10px] font-bold tracking-[0.14em] uppercase">
          Your stays
        </p>

        <h2 className="font-display text-primary-950 mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
          No bookings yet
        </h2>

        <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
          Your reserved stays will appear here. Explore the collection and find
          your next destination.
        </p>

        <Link to="/rooms" className="primary-button mt-7">
          Explore stays
        </Link>
      </div>
    </section>
  );
}
