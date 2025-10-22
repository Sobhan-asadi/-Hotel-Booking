import { useState } from "react";

import { IoMdStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

import hotels from "../../api/data";
import SelectableOption from "./SelectableOption";

const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
const roomTypes = ["Single bed", "Double Bed", "Luxury Room", "Family Suite"];
const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

function RadioButton({ label, selected = false, onChange = () => {} }) {
  return (
    <label className="mt-2 flex cursor-pointer items-center gap-3 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
}

export default function AllRooms() {
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <div className="flex flex-col-reverse items-start justify-between px-4 pt-28 md:px-16 md:pt-35 lg:flex-row lg:px-24">
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
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-lg bg-[#dbdbe1]/70 px-3 py-2"
                  >
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
      <div className="w-80 rounded-md border border-gray-300 bg-white text-gray-600 shadow-md max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between border-gray-300 px-5 py-2.5 min-lg:border-b ${openFilters && "border-b"}`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="cursor-pointer text-xs">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        <div
          className={`${openFilters ? "h-auto" : "h-0 overflow-hidden transition-all duration-700 lg:h-auto"}`}
        >
          {/* Popular filters */}
          <div className="px-5 pt-5">
            <p className="pb-2 font-medium text-gray-800">Popular filters</p>
            {roomTypes.map((room, index) => (
              <SelectableOption key={index} label={room} />
            ))}
          </div>

          {/* Price Range */}
          <div className="px-5 pt-5">
            <p className="pb-2 font-medium text-gray-800">Price Range</p>
            {priceRanges.map((range, index) => (
              <SelectableOption key={index} label={`$ ${range}`} />
            ))}
          </div>

          {/* Sort By */}
          <div className="px-5 pt-5 pb-5">
            <p className="pb-2 font-medium text-gray-800">Sort By </p>
            {sortOptions.map((option, index) => (
              <SelectableOption
                key={index}
                type="radio"
                name="sortOption"
                label={option}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
