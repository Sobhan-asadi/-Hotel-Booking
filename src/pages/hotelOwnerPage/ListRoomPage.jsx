import { useState } from "react";
import hotelsData from "../../../api/data";
import Title from "../../components/Title";

export default function ListRoomPage() {
  const [hotels, setHotels] = useState(hotelsData);

  const handleToggle = (id) => {
    setHotels((prevHotels) =>
      prevHotels.map((hotel) =>
        hotel.id === id ? { ...hotel, isAvailable: !hotel.isAvailable } : hotel,
      ),
    );
  };

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View,edit,or manage all listed rooms. keep the information up-to-date to provide the best experience for users."
      />
      <p className="mt-8 text-gray-500">All Rooms</p>
      <div className="mt-3 max-h-80 w-full max-w-3xl overflow-y-scroll rounded-lg border border-gray-300 text-left">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-center">
              <th className="px-4 py-3 font-medium text-gray-800 sm:text-sm">
                Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-800 sm:text-sm">
                Facility
              </th>
              <th className="px-4 py-3 font-medium text-gray-800">
                Price <span className="hidden md:inline-block">/ Night</span>
              </th>
              <th className="px-4 py-3 font-medium text-gray-800 sm:text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {hotels.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700">
                  {item.name}
                </td>
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700">
                  {item.features.join(", ")}
                </td>
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700">
                  ${item.pricePerNight}
                </td>
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700">
                  <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={item.isAvailable}
                      onChange={() => handleToggle(item.id)}
                    />
                    <div className="peer h-7 w-12 rounded-full bg-slate-300 transition-colors duration-300 peer-checked:bg-blue-600"></div>
                    <span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
