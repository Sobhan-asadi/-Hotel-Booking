import { HiOutlineCalendar, HiOutlineUserGroup } from "react-icons/hi";

import BookingField from "./BookingField";

export default function BookingForm({
  today,
  checkIn,
  checkOut,
  guests,
  error,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
}) {
  return (
    <>
      <div className="border-primary-900/[0.1] overflow-hidden rounded-[18px] border">
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <BookingField
            label="Check in"
            htmlFor="booking-check-in"
            icon={<HiOutlineCalendar />}
            className="border-primary-900/[0.08] border-b sm:border-r sm:border-b-0 lg:border-r-0 lg:border-b xl:border-r xl:border-b-0"
          >
            <input
              id="booking-check-in"
              type="date"
              min={today}
              value={checkIn}
              onChange={(event) => onCheckInChange(event.target.value)}
              required
              className="text-primary-950 mt-2 w-full min-w-0 bg-transparent text-sm font-semibold outline-none"
            />
          </BookingField>

          <BookingField
            label="Check out"
            htmlFor="booking-check-out"
            icon={<HiOutlineCalendar />}
          >
            <input
              id="booking-check-out"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(event) => onCheckOutChange(event.target.value)}
              required
              className="text-primary-950 mt-2 w-full min-w-0 bg-transparent text-sm font-semibold outline-none"
            />
          </BookingField>
        </div>

        <BookingField
          label="Guests"
          htmlFor="booking-guests"
          icon={<HiOutlineUserGroup />}
          className="border-primary-900/[0.08] border-t"
        >
          <input
            id="booking-guests"
            type="number"
            min="1"
            max="8"
            value={guests}
            onChange={(event) => onGuestsChange(event.target.value)}
            required
            className="text-primary-950 mt-2 w-full bg-transparent text-sm font-semibold outline-none"
          />
        </BookingField>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-3 text-xs leading-5 font-medium text-red-600"
        >
          {error}
        </p>
      )}
    </>
  );
}
