import { IoIosArrowRoundForward } from "react-icons/io";
import DiscountCards from "./DiscountCards";
import Title from "./Title";

export default function ExclusiveOffers() {
  return (
    <div className="flex flex-col items-center px-6 pt-20 pb-32 md:px-16 lg:px-24 xl:px-32">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <Title
          align="left"
          title="Exclusive offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="text-md group mt-4 flex cursor-pointer items-center justify-center gap-1.5 rounded-md border p-1 shadow-md transition-all hover:bg-gray-100 hover:text-gray-900 md:text-base">
          View All offers
          <IoIosArrowRoundForward className="text-2xl transition-all group-hover:translate-x-1" />
        </button>
      </div>

      {/* Discount cards */}
      <div className="">
        <DiscountCards />
      </div>
    </div>
  );
}
