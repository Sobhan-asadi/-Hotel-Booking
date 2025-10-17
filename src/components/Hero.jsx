import BookingSearchForm from "./BookingSearchForm";
import ExclusiveOffers from "./ExclusiveOffers";
import FeaturedHotels from "./FeaturedHotels";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";
import Title from "./Title";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/background.jpg')] bg-cover bg-center bg-no-repeat px-6 text-white md:h-screen md:items-start md:px-16 lg:px-24 xl:px-32">
        <p className="mt-20 rounded-full bg-[#49B9FF]/80 px-3.5 py-1">
          The ultimate Hotel Experience
        </p>
        <h1 className="font-playfair md:leadin-[56px] mt-4 max-w-xl text-2xl font-bold md:text-5xl md:text-[56px] md:font-extrabold">
          Discover Your Perfect Gateway Destination
        </h1>
        <p className="mt-2 max-w-130 text-sm md:text-base">
          Unparalleeled luxury and comfort await at the world's most exclusive
          hotels and resorts. start your journey today.
        </p>
        <BookingSearchForm />
      </div>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <Title
            align="left"
            title="Featired Destination"
            subTitle="Discover our selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
          />
        </div>
      </div>

      <section className="mx-auto mt-20 grid grid-cols-1 items-center justify-center gap-x-4 gap-y-7 px-6 md:grid-cols-3 md:px-16 lg:grid-cols-4 lg:px-24 xl:px-32">
        <FeaturedHotels />
      </section>

      <section>
        <ExclusiveOffers />
      </section>

      <section className="">
        <Testimonial />
      </section>

      <section className="">
        <NewsLetter />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
