import { useEffect, useState } from "react";

import BookingCard from "../components/bookings/BookingCard";
import EmptyBookingsState from "../components/bookings/EmptyBookingsState";
import Title from "../components/Title";
import { getBookings } from "../utils/bookings";

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
        <section aria-label="Your bookings" className="mt-10 space-y-5">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </section>
      ) : (
        <EmptyBookingsState />
      )}
    </main>
  );
}
