import { UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Stays",
    path: "/rooms",
  },
];

export default function MobileNavigation({
  light = false,
  user,
  isOpen,
  onOpen,
  onClose,
  onSignIn,
  onNavigate,
}) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleNavigate(path) {
    onClose();
    onNavigate(path);
  }

  function handleSignIn() {
    onClose();
    onSignIn();
  }

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        {user && <UserButton />}

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={onOpen}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
            light
              ? "bg-white/10 text-white hover:bg-white/15"
              : "bg-primary-900/5 text-primary-950 hover:bg-primary-900/10"
          }`}
        >
          <HiOutlineMenuAlt3 aria-hidden="true" className="text-xl" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="bg-primary-950/50 absolute inset-0 backdrop-blur-sm"
        />

        <aside
          aria-label="Mobile navigation"
          className={`absolute top-3 right-3 bottom-3 flex w-[calc(100%-24px)] max-w-sm flex-col rounded-[32px] bg-[#f8f5ef] p-6 shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-[110%]"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-primary-950 text-2xl font-semibold tracking-[-0.02em]">
                Ogo
              </p>

              <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                Curated stays
              </p>
            </div>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={onClose}
              className="bg-primary-900/5 text-primary-950 hover:bg-primary-900/10 flex h-11 w-11 items-center justify-center rounded-full transition"
            >
              <HiOutlineX aria-hidden="true" className="text-xl" />
            </button>
          </div>

          <nav aria-label="Mobile menu" className="mt-12 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `font-display border-b border-black/8 py-5 text-3xl tracking-[-0.025em] transition-colors ${
                    isActive
                      ? "text-primary-600"
                      : "text-primary-950 hover:text-primary-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="/#experiences"
              onClick={onClose}
              className="font-display text-primary-950 hover:text-primary-700 border-b border-black/8 py-5 text-3xl tracking-[-0.025em] transition-colors"
            >
              Experiences
            </a>

            <a
              href="/#about"
              onClick={onClose}
              className="font-display text-primary-950 hover:text-primary-700 border-b border-black/8 py-5 text-3xl tracking-[-0.025em] transition-colors"
            >
              About
            </a>
          </nav>

          <div className="mt-auto pt-8">
            {user ? (
              <div className="grid gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigate("/my-bookings")}
                  className="secondary-button w-full"
                >
                  My bookings
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigate("/owner")}
                  className="primary-button w-full"
                >
                  Owner dashboard
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleSignIn}
                className="primary-button group w-full gap-2"
              >
                Sign in to continue
                <HiOutlineArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            )}

            <p className="mt-6 text-xs leading-5 text-zinc-500">
              Discover distinctive stays for your next journey.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
