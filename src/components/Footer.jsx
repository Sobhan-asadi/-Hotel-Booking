import { HiArrowUp, HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const exploreLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Explore stays",
    to: "/rooms",
  },
  {
    label: "My bookings",
    to: "/my-bookings",
  },
];

const experienceLinks = [
  {
    label: "Featured stays",
    href: "/#featured-stays",
  },
  {
    label: "Exclusive offers",
    href: "/#exclusive-offers",
  },
  {
    label: "Guest stories",
    href: "/#guest-stories",
  },
];

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="bg-primary-950 text-white">
      <div className="page-container">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-16 lg:py-20">
          <div className="max-w-md">
            <Link
              to="/"
              aria-label="Ogo home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10">
                <span className="font-display text-accent-100 text-xl font-semibold italic">
                  O
                </span>
              </span>

              <div>
                <p className="font-display text-xl leading-none font-semibold tracking-[-0.02em]">
                  Ogo
                </p>

                <p className="mt-1.5 text-[9px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                  Curated stays
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              A curated collection of distinctive stays for travelers looking
              for memorable places and remarkable journeys.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              <HiOutlineLocationMarker
                aria-hidden="true"
                className="text-accent-300 text-base"
              />

              <span>Curated stays around the world</span>
            </div>
          </div>

          <div>
            <p className="text-accent-300 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Explore
            </p>

            <nav
              aria-label="Footer explore navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-accent-300 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Discover
            </p>

            <nav
              aria-label="Footer discovery navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {experienceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © 2026 Ogo. Front-end portfolio project by{" "}
            <a
              href="https://github.com/Sobhan-asadi"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              Sobhan Asadi
            </a>
            .
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex w-fit items-center gap-2.5 text-xs font-semibold text-white/50 transition-colors hover:text-white"
          >
            Back to top
            <span className="group-hover:border-accent-300 group-hover:bg-accent-300 group-hover:text-primary-950 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300">
              <HiArrowUp
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
