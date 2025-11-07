import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import hotels from "../../api/data";
import Title from "../components/Title";

export default function MyBookings() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="px-4 py-28 md:px-16 md:pt-32 md:pb-36 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current,and upcoming hotel reservations in one place. plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <div className="mt-10 w-full max-w-6xl text-gray-800">
        <div className="hidden w-full border-b border-gray-300 py-3 text-base font-medium md:grid md:grid-cols-[3fr_2fr_1fr]">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">data & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>
      </div>

      {hotels.map((booking, index) => (
        <div
          className="grid w-full grid-cols-1 border-b border-gray-300 py-6 first:border-t md:grid-cols-[3fr_2fr_1fr]"
          key={booking.id}
        >
          {/* Hotel Details */}
          <div className="flex flex-col md:flex-row">
            <img
              src={booking.image}
              alt={booking.name}
              className="rounded-md object-cover shadow min-md:w-44"
            />
            <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
              <p className="font-playfair text-2xl">{booking.name}</p>
              <span className="text-sm">{booking.description}</span>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <IoLocationOutline />
                <span>{booking.location}</span>
              </div>
            </div>
          </div>
          {/* Date timings */}
          <div className="mt-3 flex flex-row gap-8 md:items-center md:gap-12">
            <div className="">
              <p className="">Check-In</p>
              <p className="text-sm text-gray-600">
                {new Date().toDateString()}
              </p>
            </div>

            <div className="">
              <p className="">Check-Out</p>
              <p className="text-sm text-gray-600">
                {new Date(
                  new Date().setDate(new Date().getDate() + index),
                ).toDateString()}
              </p>
            </div>
          </div>

          {/* Payent status */}
          <div className="flex flex-col items-start justify-center pt-3">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full bg-red-500`}></div>
              <p className="text-sm text-red-500">Unpaid</p>
            </div>
            <button className="mt-4 cursor-pointer rounded-full border border-gray-400 px-4 py-1.5 text-sm transition-all hover:bg-gray-50">
              Pay Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
