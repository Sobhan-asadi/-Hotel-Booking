import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedHotels from "../components/FeaturedHotels";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import WhyOgo from "../components/WhyOgo";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="featured-stays"
        className="page-container py-16 sm:py-20 lg:py-24"
      >
        <Title
          align="left"
          title="Featured Destinations"
          subTitle="Explore a curated selection of remarkable stays, from peaceful coastal escapes to unforgettable city experiences."
        />

        <div className="mt-10">
          <FeaturedHotels />
        </div>
      </section>

      <ExclusiveOffers />

      <WhyOgo />

      <Testimonial />

      <NewsLetter />
    </>
  );
}
