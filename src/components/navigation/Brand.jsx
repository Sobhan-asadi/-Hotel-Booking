import { NavLink } from "react-router-dom";

export default function Brand({ light = false, onClick }) {
  return (
    <NavLink
      to="/"
      onClick={onClick}
      aria-label="Ogo Hotel home"
      className="flex shrink-0 items-center gap-3"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
          light
            ? "border-white/25 bg-white/10"
            : "border-primary-900/10 bg-primary-900"
        }`}
      >
        <span
          className={`font-display text-lg font-semibold italic ${
            light ? "text-white" : "text-accent-100"
          }`}
        >
          O
        </span>
      </span>

      <div className="hidden sm:block">
        <p
          className={`font-display text-lg leading-none font-semibold tracking-[-0.02em] transition-colors duration-300 ${
            light ? "text-white" : "text-primary-950"
          }`}
        >
          Ogo
        </p>

        <p
          className={`mt-1 text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
            light ? "text-white/55" : "text-zinc-500"
          }`}
        >
          Curated stays
        </p>
      </div>
    </NavLink>
  );
}
