import { IoMdStar } from "react-icons/io";

import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import hotels from "../../api/data";

export default function FeaturedHotels() {
  return (
    <>
      {hotels &&
        hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="relative mx-auto max-w-80 overflow-hidden rounded-xl bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
          >
            <Link className="" key={hotel.id} to={`${hotel.name}`}>
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-[227px] w-full"
              />
              {hotel.tag && (
                <p className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800">
                  {hotel.tag}
                </p>
              )}
              <div className="p-4 pt-5">
                <div className="flex items-center justify-between">
                  <p className="font-playfair text-md font-medium text-gray-800">
                    {hotel.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <IoMdStar className="text-yellow-300" />
                    {hotel.rating}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <IoLocationOutline />
                  <p>{hotel.location}</p>
                </div>
                <div className="mt-4 flex-col items-center justify-between">
                  <p className="my-1 md:my-4">
                    <span className="text-sm text-gray-800 md:text-xl">
                      ${hotel.pricePerNight}
                    </span>
                    /Nigt
                  </p>
                  <button className="mt-4 w-full cursor-pointer rounded-md border border-b-gray-300 px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 hover:text-gray-500 md:mt-0">
                    View room details
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}
