import { UserButton } from "@clerk/clerk-react";
import { HiOutlineArrowRight, HiOutlineCalendar } from "react-icons/hi";
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

export default function DesktopNavigation({
  light = false,
  user,
  onSignIn,
  onNavigate,
}) {
  const linkBaseClass =
    "rounded-full px-4 py-2 text-sm font-medium transition-colors";

  const inactiveLinkClass = light
    ? "text-white/70 hover:text-white"
    : "text-zinc-600 hover:text-primary-950";

  return (
    <>
      <div className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `${linkBaseClass} ${
                isActive
                  ? light
                    ? "bg-white/12 text-white"
                    : "bg-primary-900/7 text-primary-950"
                  : inactiveLinkClass
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden items-center gap-3 md:flex">
        {user ? (
          <>
            <button
              type="button"
              onClick={() => onNavigate("/owner")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                light
                  ? "text-white/75 hover:bg-white/10 hover:text-white"
                  : "hover:bg-primary-900/5 hover:text-primary-950 text-zinc-600"
              }`}
            >
              Dashboard
            </button>

            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<HiOutlineCalendar />}
                  onClick={() => onNavigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            type="button"
            onClick={onSignIn}
            className={`group flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
              light
                ? "text-primary-950 hover:bg-accent-100 bg-white"
                : "bg-primary-900 hover:bg-primary-700 text-white"
            }`}
          >
            Sign in
            <HiOutlineArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        )}
      </div>
    </>
  );
}
