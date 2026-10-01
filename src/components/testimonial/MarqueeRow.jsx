import TestimonialCard from "./TestimonialCard";

export default function MarqueeRow({ testimonials = [], reverse = false }) {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-row overflow-hidden">
      <div
        className={`flex w-max gap-5 px-2 ${
          reverse ? "testimonial-track-reverse" : "testimonial-track"
        }`}
      >
        {repeatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}
