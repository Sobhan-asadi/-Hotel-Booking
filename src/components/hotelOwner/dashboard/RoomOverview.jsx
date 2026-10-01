import {
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineRefresh,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const roomStats = [
  {
    label: "Available",
    value: 18,
    icon: HiOutlineCheckCircle,
  },
  {
    label: "Occupied",
    value: 24,
    icon: HiOutlineHome,
  },
  {
    label: "Maintenance",
    value: 3,
    icon: HiOutlineCog,
  },
];

const totalRooms = roomStats.reduce((total, item) => total + item.value, 0);

const occupiedRooms =
  roomStats.find((item) => item.label === "Occupied")?.value ?? 0;

const occupancyRate =
  totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;

export default function RoomOverview() {
  return (
    <section className="border-primary-900/[0.07] flex h-full flex-col rounded-[24px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
            Inventory
          </p>

          <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
            Room overview
          </h2>

          <p className="mt-1 text-xs text-zinc-400">Demo room availability</p>
        </div>

        <Link
          to="/owner/list-room"
          aria-label="Manage rooms"
          className="border-primary-900/[0.08] text-primary-700 hover:bg-primary-50 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors"
        >
          <HiOutlineRefresh aria-hidden="true" className="text-base" />
        </Link>
      </div>

      <div className="mt-7 flex items-center gap-6">
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 h-full w-full -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgba(32,51,45,0.08)"
              strokeWidth="10"
            />

            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#477363"
              strokeWidth="10"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray={`${occupancyRate} ${100 - occupancyRate}`}
            />
          </svg>

          <div className="relative text-center">
            <p className="text-primary-950 text-2xl font-semibold tracking-[-0.04em]">
              {occupancyRate}%
            </p>

            <p className="mt-0.5 text-[9px] font-semibold tracking-[0.1em] text-zinc-400 uppercase">
              Occupied
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold tracking-[0.1em] text-zinc-400 uppercase">
            Total rooms
          </p>

          <p className="text-primary-950 mt-1 text-3xl font-semibold tracking-[-0.04em]">
            {totalRooms}
          </p>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            Current demo inventory across the property.
          </p>
        </div>
      </div>

      <div className="divide-primary-900/[0.06] border-primary-900/[0.06] mt-7 divide-y border-y">
        {roomStats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 py-3.5"
            >
              <div className="flex items-center gap-3">
                <span className="bg-primary-50 text-primary-700 flex h-9 w-9 items-center justify-center rounded-[12px]">
                  <Icon aria-hidden="true" className="text-lg" />
                </span>

                <span className="text-xs font-medium text-zinc-500">
                  {item.label}
                </span>
              </div>

              <span className="text-primary-950 text-sm font-semibold">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

      <Link
        to="/owner/list-room"
        className="text-primary-700 hover:text-primary-950 mt-auto pt-5 text-xs font-semibold transition-colors"
      >
        View room inventory →
      </Link>
    </section>
  );
}
