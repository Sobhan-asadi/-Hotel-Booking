import { HiOutlineCalendar, HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";

function formatCurrentDate() {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

export default function DashboardHeader() {
  return (
    <header className="border-primary-900/[0.07] flex flex-col gap-6 border-b pb-7 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <p className="text-accent-700 text-[10px] font-bold tracking-[0.16em] uppercase">
          Overview
        </p>

        <h1 className="font-display text-primary-950 mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
          Property dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
          Track bookings, revenue, and room performance from one place.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="border-primary-900/[0.08] flex min-h-11 items-center gap-2.5 rounded-full border bg-white px-4 text-xs font-medium text-zinc-500">
          <HiOutlineCalendar
            aria-hidden="true"
            className="text-primary-700 text-base"
          />

          <time dateTime={new Date().toISOString()}>{formatCurrentDate()}</time>
        </div>

        <Link
          to="/owner/add-room"
          className="bg-primary-950 hover:bg-primary-700 flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-xs font-semibold text-white transition-colors"
        >
          <HiOutlinePlus aria-hidden="true" className="text-base" />
          Add room
        </Link>
      </div>
    </header>
  );
}
