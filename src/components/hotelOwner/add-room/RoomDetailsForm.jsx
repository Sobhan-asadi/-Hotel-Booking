import { HiChevronDown } from "react-icons/hi";

const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];

export default function RoomDetailsForm({
  roomType,
  pricePerNight,
  onRoomTypeChange,
  onPriceChange,
}) {
  return (
    <section className="border-primary-900/[0.07] rounded-[24px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-6">
      <div>
        <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
          Room information
        </p>

        <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
          Room details
        </h2>

        <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-400">
          Set the room category and nightly rate shown to guests.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="room-type"
            className="text-primary-950 text-xs font-semibold"
          >
            Room type
          </label>

          <p className="mt-1 text-[10px] text-zinc-400">
            Select the category that best describes this room.
          </p>

          <div className="relative mt-3">
            <select
              id="room-type"
              value={roomType}
              onChange={(event) => onRoomTypeChange(event.target.value)}
              required
              className={`border-primary-900/[0.09] bg-primary-50/30 focus:border-primary-700/30 min-h-12 w-full appearance-none rounded-[15px] border px-4 pr-11 text-sm transition outline-none focus:bg-white ${
                roomType ? "text-primary-950 font-medium" : "text-zinc-400"
              }`}
            >
              <option value="" disabled>
                Select room type
              </option>

              {roomTypes.map((type) => (
                <option key={type} value={type} className="text-primary-950">
                  {type}
                </option>
              ))}
            </select>

            <HiChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm text-zinc-400"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="price-per-night"
            className="text-primary-950 text-xs font-semibold"
          >
            Price per night
          </label>

          <p className="mt-1 text-[10px] text-zinc-400">
            Enter the standard nightly rate for this room.
          </p>

          <div className="relative mt-3">
            <span className="text-primary-700 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold">
              $
            </span>

            <input
              id="price-per-night"
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              value={pricePerNight}
              onChange={(event) => onPriceChange(event.target.value)}
              placeholder="0"
              required
              className="border-primary-900/[0.09] bg-primary-50/30 text-primary-950 focus:border-primary-700/30 min-h-12 w-full rounded-[15px] border pr-20 pl-9 text-sm font-medium transition outline-none placeholder:text-zinc-400 focus:bg-white"
            />

            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[10px] font-medium text-zinc-400">
              / night
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
