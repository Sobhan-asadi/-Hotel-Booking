import {
  HiOutlineCake,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlineSparkles,
} from "react-icons/hi";

const amenitiesList = [
  {
    key: "freeWifi",
    label: "Free Wi-Fi",
    description: "High-speed internet access",
    icon: HiOutlineGlobeAlt,
  },
  {
    key: "freeBreakfast",
    label: "Free breakfast",
    description: "Breakfast included with the stay",
    icon: HiOutlineCake,
  },
  {
    key: "roomService",
    label: "Room service",
    description: "In-room service available",
    icon: HiOutlineHome,
  },
  {
    key: "mountainView",
    label: "Mountain view",
    description: "Room with a mountain view",
    icon: HiOutlineEye,
  },
  {
    key: "poolAccess",
    label: "Pool access",
    description: "Guest access to the pool",
    icon: HiOutlineSparkles,
  },
];

export default function AmenitiesSelector({ amenities, onAmenityChange }) {
  return (
    <section className="border-primary-900/[0.07] rounded-[24px] border bg-white p-5 shadow-[0_8px_30px_rgba(20,40,32,0.035)] sm:p-6">
      <div>
        <p className="text-accent-700 text-[10px] font-bold tracking-[0.14em] uppercase">
          Guest experience
        </p>

        <h2 className="text-primary-950 mt-1.5 text-lg font-semibold tracking-[-0.02em]">
          Amenities
        </h2>

        <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-400">
          Select the amenities available with this room.
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {amenitiesList.map((amenity) => {
          const Icon = amenity.icon;
          const isSelected = amenities[amenity.key];

          return (
            <label
              key={amenity.key}
              className={`group relative flex cursor-pointer items-start gap-3 rounded-[17px] border p-4 transition-all ${
                isSelected
                  ? "border-primary-700/25 bg-primary-50/70 shadow-[0_5px_20px_rgba(20,40,32,0.035)]"
                  : "border-primary-900/[0.07] hover:border-primary-700/20 hover:bg-primary-50/30 bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={Boolean(isSelected)}
                onChange={() => onAmenityChange(amenity.key)}
                className="peer sr-only"
              />

              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] transition-colors ${
                  isSelected
                    ? "bg-primary-950 text-white"
                    : "bg-primary-50 text-primary-700 group-hover:bg-primary-100"
                }`}
              >
                <Icon aria-hidden="true" className="text-lg" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="text-primary-950 block text-xs font-semibold">
                  {amenity.label}
                </span>

                <span className="mt-1 block text-[10px] leading-4 text-zinc-400">
                  {amenity.description}
                </span>
              </span>

              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isSelected
                    ? "border-primary-700 bg-primary-700"
                    : "border-primary-900/15 bg-white"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-white transition-opacity ${
                    isSelected ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
