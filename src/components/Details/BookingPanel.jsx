import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { createBooking } from "../../utils/bookings";
import BookingForm from "./booking/BookingForm";
import BookingSummary from "./booking/BookingSummary";
import BookingTotal from "./booking/BookingTotal";
import { getNumberOfNights, getToday } from "./booking/bookingUtils";

export default function BookingPanel({ room }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const today = getToday();

  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") ?? "");

  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") ?? "");

  const [guests, setGuests] = useState(() =>
    Math.min(8, Math.max(1, Number(searchParams.get("guests")) || 1)),
  );

  const [error, setError] = useState("");

  const nights = useMemo(
    () => getNumberOfNights(checkIn, checkOut),
    [checkIn, checkOut],
  );

  const totalPrice = nights * room.pricePerNight;

  function handleCheckInChange(value) {
    setCheckIn(value);
    setError("");

    if (checkOut && value && checkOut <= value) {
      setCheckOut("");
    }
  }

  function handleCheckOutChange(value) {
    setCheckOut(value);
    setError("");
  }

  function handleGuestsChange(value) {
    setGuests(Math.min(8, Math.max(1, Number(value) || 1)));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!checkIn || !checkOut) {
      setError("Choose your check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }

    if (nights < 1) {
      setError("Your stay must be at least one night.");
      return;
    }

    setError("");

    createBooking({
      room,
      checkIn,
      checkOut,
      guests,
      nights,
      totalPrice,
    });

    navigate("/my-bookings");
  }

  return (
    <section id="booking" className="scroll-mt-28">
      <div className="border-primary-900/[0.09] overflow-hidden rounded-[28px] border bg-white shadow-[0_20px_60px_rgba(20,40,32,0.10)]">
        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          <BookingSummary room={room} />

          <div className="mt-6">
            <BookingForm
              today={today}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guests}
              error={error}
              onCheckInChange={handleCheckInChange}
              onCheckOutChange={handleCheckOutChange}
              onGuestsChange={handleGuestsChange}
            />
          </div>

          <BookingTotal room={room} nights={nights} totalPrice={totalPrice} />
        </form>

        <div className="border-primary-900/[0.07] bg-primary-50/50 border-t px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[9px] font-bold tracking-[0.14em] text-zinc-400 uppercase">
                Your stay
              </p>

              <p className="text-primary-950 mt-1 truncate text-xs font-semibold">
                {room.name}
              </p>
            </div>

            <p className="shrink-0 text-xs text-zinc-500">{room.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
