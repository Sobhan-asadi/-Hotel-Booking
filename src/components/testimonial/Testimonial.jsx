import MarqueeRow from "./MarqueeRow";
import testimonials from "./testimonials";

export default function Testimonial() {
  const secondRowTestimonials = [
    ...testimonials.slice(3),
    ...testimonials.slice(0, 3),
  ];

  return (
    <section className="bg-primary-100/70 relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-accent-200/35 absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full blur-3xl"
      />

      <div className="page-container relative z-10">
        <div className="border-primary-900/10 grid gap-8 border-b pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16 lg:pb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-accent-600 h-px w-8" />

              <p className="text-accent-700 text-[11px] font-semibold tracking-[0.2em] uppercase">
                Guest stories
              </p>
            </div>

            <p className="text-primary-900/55 mt-5 max-w-[300px] text-sm leading-7">
              Memorable stays are shaped by the moments travelers take home with
              them.
            </p>
          </div>

          <h2 className="font-display text-primary-950 max-w-3xl text-[38px] leading-[1.08] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[56px]">
            Stories from stays
            <span className="text-primary-600 block">worth remembering.</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 mt-10 space-y-4 sm:mt-12">
        <div className="from-primary-100/90 pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r to-transparent sm:w-20 lg:w-32" />

        <div className="from-primary-100/90 pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l to-transparent sm:w-20 lg:w-32" />

        <MarqueeRow testimonials={testimonials} />

        <MarqueeRow testimonials={secondRowTestimonials} reverse />
      </div>

      <style>{`
        @keyframes testimonial-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes testimonial-marquee-reverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .testimonial-track {
          animation: testimonial-marquee 42s linear infinite;
          will-change: transform;
        }

        .testimonial-track-reverse {
          animation: testimonial-marquee-reverse 46s linear infinite;
          will-change: transform;
        }

        .testimonial-row:hover .testimonial-track,
        .testimonial-row:hover .testimonial-track-reverse {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track,
          .testimonial-track-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
