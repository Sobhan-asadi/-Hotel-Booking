import { IoIosArrowRoundForward } from "react-icons/io";
import { discountData } from "../../api/data";

export default function DiscountCards() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {discountData.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${item.image})`,
          }}
          className="group relative flex h-64 flex-col justify-end rounded-2xl bg-cover bg-center p-6 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/*  Discount  */}
          <p className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800">
            {item.priceoff}% OFF
          </p>

          {/* text */}
          <div>
            <p className="font-playfair text-2xl font-semibold">{item.title}</p>
            <p className="text-sm text-white/80">{item.description}</p>
            <p className="mt-2 text-xs text-white/60">
              Expires {item.expiryDate}
            </p>
          </div>

          {/* button */}
          <button className="mt-4 flex cursor-pointer items-center justify-center gap-1 rounded-md bg-white/90 px-3 py-2 text-sm font-semibold text-gray-900 transition-all hover:bg-white">
            View offers
            <IoIosArrowRoundForward className="text-xl transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      ))}
    </div>
  );
}
