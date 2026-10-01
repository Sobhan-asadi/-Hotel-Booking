import { useEffect, useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Link } from "react-router-dom";

import Title from "../components/Title";
import { getBookings } from "../utils/bookings";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-container pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <Title
        align="left"
        title="My Bookings"
        subTitle="Review your confirmed demo reservations and the details of your upcoming stays."
      />

      {bookings.length > 0 ? (
        <div className="mt-10 space-y-5">
          {bookings.map((booking) => (
            <article
              key={booking.id}
              className="border-primary-900/[0.07] overflow-hidden rounded-[26px] border bg-white shadow-[0_8px_30px_rgba(20,40,32,0.05)]"
            >
              <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr_auto]">
                <Link
                  to={`/rooms/${booking.roomId}`}
                  className="bg-primary-100 relative min-h-[220px] overflow-hidden md:min-h-full"
                >
                  <img
                    src={booking.image}
                    alt={booking.roomName}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </Link>

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-primary-100 text-primary-700 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] uppercase">
                      Confirmed
                    </span>

                    <span className="text-xs text-zinc-400">
                      Demo reservation
                    </span>
                  </div>

                  <Link
                    to={`/rooms/${booking.roomId}`}
                    className="mt-4 block w-fit"
                  >
                    <h2 className="font-display text-primary-950 hover:text-primary-600 text-2xl font-semibold tracking-[-0.025em] transition-colors sm:text-3xl">
                      {booking.roomName}
                    </h2>
                  </Link>

                  <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                    <HiOutlineLocationMarker
                      aria-hidden="true"
                      className="text-accent-600 text-base"
                    />
                    <span>{booking.location}</span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
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

                <div className="border-primary-900/[0.07] flex items-center border-t p-5 sm:p-6 md:col-span-2 lg:col-span-1 lg:border-t-0 lg:border-l lg:p-7">
                  <div className="w-full lg:min-w-[180px]">
                    <p className="text-[10px] font-bold tracking-[0.13em] text-zinc-400 uppercase">
                      Stay total
                    </p>

                    <p className="text-primary-950 mt-2 text-3xl font-bold tracking-[-0.04em]">
                      ${booking.totalPrice}
                    </p>

                    <p className="mt-1 text-xs text-zinc-400">
                      {booking.nights}{" "}
                      {booking.nights === 1 ? "night" : "nights"} · $
                      {booking.pricePerNight}/night
                    </p>

                    <Link
                      to={`/rooms/${booking.roomId}`}
                      className="secondary-button mt-5 w-full"
                    >
                      View stay
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border-primary-900/15 mt-10 flex min-h-[380px] flex-col items-center justify-center rounded-[28px] border border-dashed bg-white/50 px-6 text-center">
          <span className="bg-primary-100 text-primary-700 flex h-14 w-14 items-center justify-center rounded-full">
            <HiOutlineCalendar aria-hidden="true" className="text-xl" />
          </span>

          <h2 className="font-display text-primary-950 mt-5 text-2xl font-semibold tracking-[-0.025em]">
            No bookings yet
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
            Explore the collection and reserve a stay to see your booking here.
          </p>

          <Link to="/rooms" className="primary-button mt-6">
            Explore stays
          </Link>
        </div>
      )}
    </main>
  );
}

function BookingDetail({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      <span className="bg-primary-50 text-primary-700 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
        {icon}
      </span>

      <div>
        <p className="text-[10px] font-bold tracking-[0.12em] text-zinc-400 uppercase">
          {label}
        </p>

        <p className="text-primary-950 mt-1 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
