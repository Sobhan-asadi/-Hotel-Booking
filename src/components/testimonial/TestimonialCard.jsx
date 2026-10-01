import { HiStar } from "react-icons/hi";

export default function TestimonialCard({ testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group border-primary-900/10 hover:border-primary-700/20 flex w-[280px] shrink-0 flex-col justify-between rounded-[22px] border bg-[#fffdf9] p-5 shadow-[0_12px_35px_rgba(16,32,28,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,32,28,0.13)] sm:w-[310px]">
      <div>
        <div className="flex items-center justify-between">
          <div
            aria-label="5 out of 5 stars"
            className="text-accent-500 flex gap-0.5"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <HiStar key={index} aria-hidden="true" className="text-[13px]" />
            ))}
          </div>

          <span
            aria-hidden="true"
            className="font-display text-primary-200 text-3xl leading-none"
          >
            “
          </span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-600">
          {testimonial.review}
        </p>
      </div>

      <div className="border-primary-900/[0.07] mt-5 flex items-center gap-3 border-t pt-4">
        <div className="bg-primary-900 text-accent-100 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold tracking-wide">
          {initials}
        </div>

        <div className="min-w-0">
          <p className="text-primary-950 truncate text-sm font-semibold">
            {testimonial.name}
          </p>

          <p className="mt-0.5 truncate text-[11px] text-zinc-500">
            {testimonial.stay}
          </p>
        </div>
      </div>
    </article>
  );
}
