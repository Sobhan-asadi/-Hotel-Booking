import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function RoomsTable({ rooms, onToggleAvailability }) {
  return (
    <section className="border-primary-900/[0.07] hidden overflow-hidden rounded-[22px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.035)] md:block">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="bg-primary-50/40">
              <th className="px-6 py-4 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Room
              </th>

              <th className="px-4 py-4 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Type
              </th>

              <th className="px-4 py-4 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Price
              </th>

              <th className="px-4 py-4 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Status
              </th>

              <th className="px-6 py-4 text-right text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Availability
              </th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr
                key={room.id}
                className="border-primary-900/[0.06] hover:bg-primary-50/25 border-t transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/rooms/${room.id}`}
                      aria-label={`View ${room.name}`}
                      className="bg-primary-100 h-14 w-20 shrink-0 overflow-hidden rounded-[12px]"
                    >
                      <img
                        src={room.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>

                    <div className="min-w-0">
                      <Link
                        to={`/rooms/${room.id}`}
                        className="text-primary-950 hover:text-primary-600 block max-w-[220px] truncate text-sm font-semibold transition-colors"
                      >
                        {room.name}
                      </Link>

                      <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-zinc-400">
                        <HiOutlineLocationMarker
                          aria-hidden="true"
                          className="text-accent-600 shrink-0 text-sm"
                        />

                        <span className="max-w-[200px] truncate">
                          {room.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="text-sm text-zinc-600">
                    {room.type ?? "—"}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <p className="text-primary-950 text-sm font-semibold">
                    ${room.pricePerNight}
                  </p>

                  <p className="mt-0.5 text-[10px] text-zinc-400">per night</p>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${
                      room.isAvailable
                        ? "bg-primary-50 text-primary-700"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        room.isAvailable ? "bg-primary-500" : "bg-zinc-400"
                      }`}
                    />

                    {room.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <span className="sr-only">
                        {room.isAvailable
                          ? `Mark ${room.name} as unavailable`
                          : `Mark ${room.name} as available`}
                      </span>

                      <input
                        type="checkbox"
                        checked={Boolean(room.isAvailable)}
                        onChange={() => onToggleAvailability(room.id)}
                        className="peer sr-only"
                      />

                      <span className="peer-checked:bg-primary-700 peer-focus-visible:ring-primary-700/30 h-6 w-11 rounded-full bg-zinc-200 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2" />

                      <span className="absolute left-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
