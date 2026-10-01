import { useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const destinations = [
  "Bali",
  "Canada",
  "Dubai",
  "Hawaii",
  "Maldives",
  "Miami",
  "New York",
  "Paris",
  "Rome",
  "Switzerland",
];

function getToday() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;

  return new Date(today.getTime() - timezoneOffset).toISOString().split("T")[0];
}

export default function BookingSearchForm() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");

  const today = getToday();

  function handleSubmit(event) {
    event.preventDefault();

    if (!destination.trim()) {
      setError("Choose a destination to start your search.");
      return;
    }

    if (checkIn && checkOut && checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }

    setError("");

    const searchParams = new URLSearchParams();

    searchParams.set("destination", destination.trim());

    if (checkIn) {
      searchParams.set("checkIn", checkIn);
    }

    if (checkOut) {
      searchParams.set("checkOut", checkOut);
    }

    searchParams.set("guests", String(guests));

    navigate(`/rooms?${searchParams.toString()}`);
  }

  return (
    <div className="w-full max-w-[1180px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[26px] border border-white/20 bg-[#faf9f6] p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-3 lg:rounded-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr_1fr_0.65fr_auto] lg:items-center">
          <div className="px-4 py-4 sm:px-5 lg:px-6 lg:py-2">
            <FieldLabel
              htmlFor="destination"
              icon={<HiOutlineLocationMarker />}
            >
              Destination
            </FieldLabel>

            <input
              id="destination"
              list="hotel-destinations"
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Where would you like to stay?"
              autoComplete="off"
              className="mt-2 w-full bg-transparent text-[15px] font-medium text-zinc-900 outline-none placeholder:font-normal placeholder:text-zinc-400"
            />

            <datalist id="hotel-destinations">
              {destinations.map((destinationName) => (
                <option key={destinationName} value={destinationName} />
              ))}
            </datalist>
          </div>

          <div className="border-t border-zinc-200 px-4 py-4 sm:px-5 lg:border-t-0 lg:border-l lg:px-6 lg:py-2">
            <FieldLabel htmlFor="checkIn" icon={<HiOutlineCalendar />}>
              Check in
            </FieldLabel>

            <input
              id="checkIn"
              type="date"
              min={today}
              value={checkIn}
              onChange={(event) => {
                const nextCheckIn = event.target.value;

                setCheckIn(nextCheckIn);

                if (checkOut && nextCheckIn && checkOut <= nextCheckIn) {
                  setCheckOut("");
                }
              }}
              className="mt-2 w-full bg-transparent text-[15px] font-medium text-zinc-700 outline-none"
            />
          </div>

          <div className="border-t border-zinc-200 px-4 py-4 sm:px-5 lg:border-t-0 lg:border-l lg:px-6 lg:py-2">
            <FieldLabel htmlFor="checkOut" icon={<HiOutlineCalendar />}>
              Check out
            </FieldLabel>

            <input
              id="checkOut"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              className="mt-2 w-full bg-transparent text-[15px] font-medium text-zinc-700 outline-none"
            />
          </div>

          <div className="border-t border-zinc-200 px-4 py-4 sm:px-5 lg:border-t-0 lg:border-l lg:px-6 lg:py-2">
            <FieldLabel htmlFor="guests" icon={<HiOutlineUserGroup />}>
              Guests
            </FieldLabel>

            <input
              id="guests"
              type="number"
              min="1"
              max="8"
              value={guests}
              onChange={(event) =>
                setGuests(
                  Math.min(8, Math.max(1, Number(event.target.value) || 1)),
                )
              }
              className="mt-2 w-full bg-transparent text-[15px] font-medium text-zinc-700 outline-none"
            />
          </div>

          <div className="border-t border-zinc-200 p-2 lg:border-t-0 lg:pl-3">
            <button
              type="submit"
              className="bg-primary-900 hover:bg-primary-700 flex min-h-14 w-full items-center justify-center gap-2.5 rounded-[18px] px-6 text-sm font-semibold whitespace-nowrap text-white transition duration-300 lg:h-[64px] lg:w-auto lg:min-w-[150px] lg:rounded-full"
            >
              <HiOutlineSearch aria-hidden="true" className="text-lg" />
              Search
            </button>
          </div>
        </div>
      </form>

      {error && (
        <p role="alert" className="mt-3 px-4 text-sm font-medium text-red-200">
          {error}
        </p>
      )}
    </div>
  );
}

function FieldLabel({ htmlFor, icon, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-primary-800 flex items-center gap-2 text-[11px] font-bold tracking-[0.13em] uppercase"
    >
      <span aria-hidden="true" className="text-accent-600 shrink-0 text-base">
        {icon}
      </span>

      {children}
    </label>
  );
}
