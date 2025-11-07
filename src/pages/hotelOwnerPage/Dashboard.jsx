import Title from "../../components/Title";

import { AiOutlineReconciliation } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";

const bookings = [
  {
    userName: "Great Stack",
    roomName: "Double Bed",
    totalAmount: 299,
    paymentStatus: "Completed",
  },
  {
    userName: "Great Stack",
    roomName: "Double Bed",
    totalAmount: 399,
    paymentStatus: "Pending",
  },
  {
    userName: "Great Stack",
    roomName: "Single Bed",
    totalAmount: 199,
    paymentStatus: "Pending",
  },
];

export default function Dashboard() {
  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue-all in one place. stay updated with real-time insights to ensure smooth operations."
      />
      <div className="my-8 flex gap-4">
        {/* Total Bookings */}
        <div className="bg-primary/40 border-primary/10 flex rounded-md border p-4 pr-8">
          <AiOutlineReconciliation
            className="h-10 text-blue-700 max-sm:hidden"
            size={20}
          />
          <div className="flex flex-col font-medium sm:ml-4">
            <p className="text-lg text-blue-800">Total Revenue</p>
            <p className="text-white">3</p>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="bg-primary/40 border-primary/10 flex rounded-md border p-4 pr-8">
          <FaHandHoldingDollar
            className="h-10 text-blue-700 max-sm:hidden"
            size={20}
          />
          <div className="flex flex-col font-medium sm:ml-4">
            <p className="text-lg text-blue-800">Total Bookings</p>
            <p className="text-white">$ 985</p>
          </div>
        </div>
      </div>
      {/* Recent Bookings */}
      <h2 className="mb-5 text-xl font-medium text-blue-950/70">
        Recent Bookings
      </h2>

      <div className="max-h-80 w-full max-w-3xl overflow-y-scroll rounded-lg border border-gray-300 text-left">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-center">
              <th className="px-4 py-3 font-medium text-gray-800 max-sm:hidden">
                User Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-800 max-sm:hidden">
                Room Name
              </th>
              <th className="px-4 py-3 font-medium text-gray-800 max-sm:hidden">
                Total Amount
              </th>
              <th className="px-4 py-3 font-medium text-gray-800 max-sm:hidden">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bookings.map((item) => (
              <tr key={item.userName} className="text-center">
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700 max-sm:hidden">
                  {item.userName}
                </td>
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700 max-sm:hidden">
                  {item.roomName}
                </td>
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700 max-sm:hidden">
                  ${item.totalAmount}
                </td>
                <td className="border-t border-gray-400 px-4 py-3 text-gray-700 max-sm:hidden">
                  <button
                    className={`mx-auto flex cursor-pointer rounded-full px-3 py-1 text-sm ${item.paymentStatus === "Completed" ? "bg-green-200 text-gray-600" : "bg-amber-200 text-yellow-600"}`}
                  >
                    {item.paymentStatus}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
