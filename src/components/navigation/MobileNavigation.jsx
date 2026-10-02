import { UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
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
  {
    name: "Experiences",
    path: "/experiences",
  },
  {
    name: "About",
    path: "/about",
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
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  function handleNavigate(path) {
    onClose();
    onNavigate(path);
  }

  function handleSignIn() {
    onClose();
    onSignIn();
  }

  const mobileMenu = isOpen
    ? createPortal(
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[9999] bg-[#f8f5ef] md:hidden"
        >
          <div className="flex h-dvh min-h-0 flex-col">
            <div className="border-primary-900/[0.08] flex h-[84px] shrink-0 items-center justify-between border-b px-5">
              <div>
                <p className="font-display text-primary-950 text-2xl font-semibold tracking-[-0.03em]">
                  Ogo
                </p>

                <p className="text-accent-700 mt-0.5 text-[9px] font-bold tracking-[0.2em] uppercase">
                  Curated stays
                </p>
              </div>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
                className="bg-primary-900/[0.06] text-primary-950 hover:bg-primary-900/10 flex h-11 w-11 items-center justify-center rounded-full transition-colors"
              >
                <HiOutlineX aria-hidden="true" className="text-xl" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5">
              <nav aria-label="Mobile navigation" className="py-4">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group border-primary-900/[0.08] flex min-h-[68px] items-center justify-between border-b transition-colors ${
                        isActive
                          ? "text-primary-600"
                          : "text-primary-950 hover:text-primary-700"
                      }`
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-bold tracking-[0.12em] text-zinc-400">
                        0{index + 1}
                      </span>

                      <span className="font-display text-[28px] font-semibold tracking-[-0.035em]">
                        {link.name}
                      </span>
                    </div>

                    <HiOutlineArrowRight
                      aria-hidden="true"
                      className="text-base opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </NavLink>
                ))}
              </nav>

              <div className="py-6">
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
                    className="primary-button w-full gap-2"
                  >
                    Sign in to continue
                    <HiOutlineArrowRight
                      aria-hidden="true"
                      className="text-base"
                    />
                  </button>
                )}

                <p className="mt-5 text-center text-[10px] leading-5 text-zinc-400">
                  Discover distinctive stays for your next journey.
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

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

      {mobileMenu}
    </>
  );
}
