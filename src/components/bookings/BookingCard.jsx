import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function BookingCard({ booking }) {
  return (
    <article className="group border-primary-900/[0.08] overflow-hidden rounded-[26px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.05)] transition-shadow duration-300 hover:shadow-[0_16px_45px_rgba(20,40,32,0.08)]">
      <div className="grid lg:grid-cols-[260px_minmax(0,1fr)_220px]">
        <Link
          to={`/rooms/${booking.roomId}`}
          aria-label={`View ${booking.roomName}`}
          className="bg-primary-100 relative min-h-[230px] overflow-hidden sm:min-h-[280px] lg:min-h-full"
        >
          <img
            src={booking.image}
            alt={booking.roomName}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
          />

          <span className="text-primary-800 absolute top-4 left-4 rounded-full border border-white/20 bg-white/90 px-3 py-2 text-[9px] font-bold tracking-[0.12em] uppercase backdrop-blur-md">
            Confirmed
          </span>
        </Link>

        <div className="min-w-0 p-5 sm:p-6 lg:p-7">
          <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
            Upcoming stay
          </p>

          <Link
            to={`/rooms/${booking.roomId}`}
            className="mt-2 block w-fit max-w-full"
          >
            <h2 className="font-display text-primary-950 group-hover:text-primary-600 truncate text-2xl font-semibold tracking-[-0.03em] transition-colors sm:text-[28px]">
              {booking.roomName}
            </h2>
          </Link>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
            <HiOutlineLocationMarker
              aria-hidden="true"
              className="text-accent-600 shrink-0 text-base"
            />

            <span className="truncate">{booking.location}</span>
          </div>

          <div className="border-primary-900/[0.07] mt-7 grid gap-5 border-t pt-6 sm:grid-cols-3">
            <BookingDetail
              icon={<HiOutlineCalendar />}
              label="Check in"
              value={formatDate(booking.checkIn)}
            />

            <BookingDetail
              icon={<HiOutlineCalendar />}
              label="Check out"
              value={formatDate(booking.checkOut)}
            />

            <BookingDetail
              icon={<HiOutlineUserGroup />}
              label="Guests"
              value={`${booking.guests} ${
                booking.guests === 1 ? "guest" : "guests"
              }`}
            />
          </div>
        </div>

        <div className="border-primary-900/[0.07] bg-primary-50/40 flex items-center border-t p-5 sm:p-6 lg:border-t-0 lg:border-l lg:p-7">
          <div className="w-full">
            <p className="text-[10px] font-bold tracking-[0.13em] text-zinc-400 uppercase">
              Stay total
            </p>

            <p className="text-primary-950 mt-2 text-3xl font-bold tracking-[-0.04em]">
              ${booking.totalPrice}
            </p>

            <p className="mt-1.5 text-xs leading-5 text-zinc-400">
              {booking.nights} {booking.nights === 1 ? "night" : "nights"}
              {" · "}${booking.pricePerNight}/night
            </p>

            <Link
              to={`/rooms/${booking.roomId}`}
              className="secondary-button mt-5 w-full"
            >
              View stay
            </Link>

            <p className="mt-3 text-center text-[10px] text-zinc-400">
              Demo reservation
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function BookingDetail({ icon, label, value }) {
  return (
    <div className="flex min-w-0 gap-3">
      <span className="bg-primary-50 text-primary-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-[9px] font-bold tracking-[0.12em] text-zinc-400 uppercase">
          {label}
        </p>

        <p className="text-primary-950 mt-1 truncate text-sm font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}
