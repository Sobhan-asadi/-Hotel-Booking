const capitalCities = [
  { id: 1, name: "Tehran" },
  { id: 2, name: "Washington, D.C." },
  { id: 3, name: "London" },
  { id: 4, name: "Paris" },
  { id: 5, name: "Tokyo" },
];

export default function BookingSearchForm() {
  return (
    <form className="my-8 flex flex-col gap-4 rounded-lg bg-white/90 px-6 py-4 text-gray-700 shadow-md max-md:mx-auto md:mt-20 md:flex-row md:flex-wrap md:items-end md:justify-between">
      {/* Destination */}
      <div className="flex w-full flex-col md:w-[22%]">
        <label
          htmlFor="destinationInput"
          className="flex items-center gap-2 font-medium"
        >
          <svg
            className="h-4 w-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          Destination
        </label>
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
          placeholder="Type here"
          required
        />
        <datalist id="destinations">
          {capitalCities.map((city) => (
            <option value={city.name} key={city.id} />
          ))}
        </datalist>
      </div>

      {/* Check in */}
      <div className="flex w-full flex-col md:w-[18%]">
        <label
          htmlFor="checkIn"
          className="flex items-center gap-2 font-medium"
        >
          <svg
            className="h-4 w-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          Check in
        </label>
        <input
          id="checkIn"
          type="date"
          className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
        />
      </div>

      {/* Check out */}
      <div className="flex w-full flex-col md:w-[18%]">
        <label
          htmlFor="checkOut"
          className="flex items-center gap-2 font-medium"
        >
          <svg
            className="h-4 w-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          Check out
        </label>
        <input
          id="checkOut"
          type="date"
          className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
        />
      </div>

      {/* Guests */}
      <div className="flex w-full flex-col md:w-[15%]">
        <label htmlFor="guests" className="font-medium">
          Guests
        </label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
          placeholder="0"
        />
      </div>

      {/* Search button */}
      <button className="flex w-full items-center justify-center gap-2 rounded-md bg-black px-6 py-3 text-white transition hover:bg-gray-900 md:w-auto md:self-end md:py-2">
        <svg
          className="h-4 w-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}
