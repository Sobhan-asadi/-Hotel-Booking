import { HiOutlineCalendar } from "react-icons/hi";

const bookings = [
  {
    id: 1,
    guest: "Olivia Martin",
    room: "Ocean View Suite",
    stay: "Oct 08 – Oct 12",
    amount: 1240,
    status: "Completed",
  },
  {
    id: 2,
    guest: "Ethan Wilson",
    room: "Deluxe King Room",
    stay: "Oct 11 – Oct 14",
    amount: 780,
    status: "Pending",
  },
  {
    id: 3,
    guest: "Sophia Brown",
    room: "Family Suite",
    stay: "Oct 15 – Oct 19",
    amount: 1560,
    status: "Completed",
  },
  {
    id: 4,
    guest: "Noah Davis",
    room: "Garden View Room",
    stay: "Oct 18 – Oct 20",
    amount: 490,
    status: "Pending",
  },
];

function BookingStatus({ status }) {
  const isCompleted = status === "Completed";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${
        isCompleted
          ? "bg-primary-50 text-primary-700"
          : "bg-accent-50 text-accent-700"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          isCompleted ? "bg-primary-500" : "bg-accent-500"
        }`}
      />

      {status}
    </span>
  );
}

export default function RecentBookings() {
  return (
    <section className="border-primary-900/[0.07] overflow-hidden rounded-[24px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.035)]">
      <div className="border-primary-900/[0.07] border-b px-5 py-5 sm:px-6">
        <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
          Reservations
        </p>

        <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
          Recent bookings
        </h2>

        <p className="mt-1 text-xs text-zinc-400">
          Latest demo reservation activity
        </p>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-primary-50/40">
              <th className="px-6 py-3.5 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Guest
              </th>

              <th className="px-4 py-3.5 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Room
              </th>

              <th className="px-4 py-3.5 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Stay
              </th>

              <th className="px-4 py-3.5 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Amount
              </th>

              <th className="px-6 py-3.5 text-right text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-primary-900/[0.06] hover:bg-primary-50/30 border-t transition-colors"
              >
                <td className="px-6 py-4">
                  <p className="text-primary-950 text-sm font-semibold">
                    {booking.guest}
                  </p>
                </td>

                <td className="px-4 py-4">
                  <p className="text-sm text-zinc-600">{booking.room}</p>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <HiOutlineCalendar
                      aria-hidden="true"
                      className="text-primary-600 shrink-0 text-base"
                    />

                    {booking.stay}
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="text-primary-950 text-sm font-semibold">
                    ${booking.amount.toLocaleString()}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <BookingStatus status={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-primary-900/[0.06] divide-y md:hidden">
        {bookings.map((booking) => (
          <article key={booking.id} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-primary-950 truncate text-sm font-semibold">
                  {booking.guest}
                </p>

                <p className="mt-1 truncate text-xs text-zinc-500">
                  {booking.room}
                </p>
              </div>

              <BookingStatus status={booking.status} />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <HiOutlineCalendar
                aria-hidden="true"
                className="text-primary-600 text-base"
              />

              {booking.stay}
            </div>

            <div className="border-primary-900/[0.06] mt-4 border-t pt-4">
              <p className="text-[9px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Amount
              </p>

              <p className="text-primary-950 mt-1 text-lg font-semibold">
                ${booking.amount.toLocaleString()}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
