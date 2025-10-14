const capitalCities = [
  { id: 1, name: "Tehran" },
  { id: 2, name: "Washington, D.C." },
  { id: 3, name: "London" },
  { id: 4, name: "Paris" },
  { id: 5, name: "Tokyo" },
];

export default function BookingSearchForm() {
  return (
    <form className="mt-20 flex flex-col gap-4 rounded-lg bg-white/90 px-6 py-4 text-gray-700 shadow-md max-md:mx-auto max-md:items-start md:flex-row">
      <div>
        <div className="flex items-center gap-2">
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
          <label htmlFor="destinationInput">Destination</label>
        </div>
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
          placeholder="Type here"
          required
        />
        <datalist id="destinations">
          {capitalCities.map((city) => (
            <option value={city.name} key={city.id} />
          ))}
        </datalist>
      </div>

      <div>
        <div className="flex items-center gap-2">
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
          <label htmlFor="checkIn">Check in</label>
        </div>
        <input
          id="checkIn"
          type="date"
          className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
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
          <label htmlFor="checkOut">Check out</label>
        </div>
        <input
          id="checkOut"
          type="date"
          className="mt-1.5 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
        />
      </div>

      <div className="flex max-md:items-center max-md:gap-2 md:flex-col">
        <label htmlFor="guests">Guests</label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className="mt-1.5 max-w-16 rounded border border-gray-200 px-3 py-1.5 text-sm outline-none"
          placeholder="0"
        />
      </div>

      <button className="my-auto flex cursor-pointer items-center justify-center gap-1 rounded-md bg-black px-4 py-3 text-white max-md:w-full max-md:py-1">
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
