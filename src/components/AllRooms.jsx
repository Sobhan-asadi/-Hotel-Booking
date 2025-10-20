import { IoMdStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import { MdOutlineFeaturedPlayList } from "react-icons/md";
import hotels from "../../api/data";

export default function AllRooms() {
  return (
    <div className="felex flex-col-reverse items-start justify-between px-4 pt-28 md:px-16 md:pt-35 lg:flex-row lg:px-24">
      <div className="">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="mt-2 max-w-174 text-sm text-gray-500/90 md:text-base">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Rooms */}
        {hotels.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-6 border-b border-gray-400 py-10 last:border-0 last:pb-32 md:flex-row"
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-h-64 cursor-pointer rounded-xl object-cover shadow-lg md:w-1/2"
            />

            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="text-gray-500">{item.description}</p>
              <p className="font-playfair cursor-pointer text-3xl text-gray-800">
                {item.name}
              </p>
              <div className="flex items-center">
                <IoMdStar className="text-yellow-300" />
                <p className="ml-2">{item.rating}</p>
              </div>

              <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                <IoLocationOutline />
                <p className="">{item.location}</p>
              </div>
              {/* Room Amenities */}
              <div className="mt-3 mb-6 flex flex-wrap items-center gap-4">
                {item.features.map((feature) => (
                  <div className="flex items-center gap-2 rounded-lg bg-[#dbdbe1]/70 px-3 py-2">
                    <MdOutlineFeaturedPlayList />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Filter */}
      <div className=""></div>
    </div>
  );
}
