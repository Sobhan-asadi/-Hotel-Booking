import BookingSearchForm from "./BookingSearchForm";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/background.jpg')] bg-cover bg-center bg-no-repeat px-6 text-white md:items-start md:px-16 lg:px-24 xl:px-32">
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
  );
}
