import { Link } from "react-router-dom";

import {
  HiHeart,
  HiHome,
  HiLocationMarker,
  HiShieldCheck,
} from "react-icons/hi";

const amenities = [
  {
    id: 1,
    title: "Clean & Safe Stay",
    des: "A well-maintained and hygienic space just for you.",
    icon: <HiHome />,
  },
  {
    id: 2,
    title: "Enhanced Cleaning",
    des: "This host follows Staybnb's strict cleaning standards.",
    icon: <HiShieldCheck />,
  },
  {
    id: 3,
    title: "Excellent Location",
    des: "90% of guests rated the location 5 stars.",
    icon: <HiLocationMarker />,
  },
  {
    id: 4,
    title: "Smooth Check-In",
    des: "100% of guests gave check-in a 5-star rating.",
    icon: <HiHeart />,
  },
];

export default function DetailsFoorm() {
  return (
    <>
      <form className="mx-auto mt-16 flex max-w-6xl flex-col items-start justify-between rounded-xl bg-white p-6 shadow-xl md:flex-row md:items-center">
        <div className="flex flex-col flex-wrap items-start gap-4 text-gray-500 md:flex-row md:items-center md:gap-10">
          {/* Check-In*/}
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              Check-In
            </label>
            <input
              type="date"
              id="checkInDate"
              required
              className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
            />
          </div>
          {/*  Check-Out */}
          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              Check-Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              required
              className="mt-1.5 w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
            />
          </div>

          {/*  Check-Out */}
          <div className="flex flex-col">
            <label htmlFor="Guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              placeholder="0"
              id="Guests"
              required
              className="mt-1.5 max-w-20 rounded-md border border-gray-300 px-4 py-2 outline-none placeholder:text-sm"
            />
          </div>
        </div>

        <Link
          to="mybookings"
          className="bg-primary hover:bg-primary/90 cursor-pointer rounded-md py-3 text-center text-base text-white transition-all active:scale-95 max-md:mt-6 max-md:w-full md:px-25 md:py-4"
        >
          Book Now
        </Link>
      </form>
      {/* Common Specifications */}
      <div className="mt-24 space-y-4">
        {amenities.map((spec) => (
          <div className="flex items-start gap-2" key={spec.id}>
            {spec.icon}
            <div className="">
              <p>{spec.title}</p>
              <p className="text-gray-500">{spec.des}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-16 max-w-3xl border-y border-gray-300 py-10 text-gray-500">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          sapiente nostrum quisquam, repellat ipsum minus consequuntur
          repellendus enim nisi iusto! Quod vitae inventore exercitationem fuga
          ratione, earum nobis odio delectus.
        </p>
      </div>
    </>
  );
}
