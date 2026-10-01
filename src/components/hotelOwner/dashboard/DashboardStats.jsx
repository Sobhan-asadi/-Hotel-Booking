import {
  HiOutlineCalendar,
  HiOutlineCash,
  HiOutlineChartBar,
  HiOutlineHome,
} from "react-icons/hi";

const stats = [
  {
    label: "Total revenue",
    value: "$12,480",
    helper: "Demo revenue",
    icon: HiOutlineCash,
  },
  {
    label: "Total bookings",
    value: "128",
    helper: "Demo bookings",
    icon: HiOutlineCalendar,
  },
  {
    label: "Occupancy rate",
    value: "78%",
    helper: "Demo occupancy",
    icon: HiOutlineHome,
  },
  {
    label: "Avg. nightly rate",
    value: "$164",
    helper: "Demo average",
    icon: HiOutlineChartBar,
  },
];

export default function DashboardStats() {
  return (
    <section
      aria-label="Property statistics"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className="group border-primary-900/[0.07] hover:border-primary-900/[0.12] rounded-[22px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(20,40,32,0.065)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-500">
                  {stat.label}
                </p>

                <p className="text-primary-950 mt-3 text-[30px] leading-none font-semibold tracking-[-0.04em]">
                  {stat.value}
                </p>
              </div>

              <span className="bg-primary-50 text-primary-700 group-hover:bg-primary-100 flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition-colors">
                <Icon aria-hidden="true" className="text-xl" />
              </span>
            </div>

            <div className="border-primary-900/[0.06] mt-6 border-t pt-4">
              <p className="text-[10px] font-semibold tracking-[0.08em] text-zinc-400 uppercase">
                {stat.helper}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
