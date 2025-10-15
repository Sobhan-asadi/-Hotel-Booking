import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hotels", path: "/rooms" },
  { name: "Experience", path: "/" },
  { name: "About", path: "/" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { openSignIn } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <nav
        className={`bg-primary/30 fixed top-0 left-0 z-50 flex w-full items-center justify-between px-4 transition-all duration-500 md:px-16 lg:px-24 xl:px-32 ${isScrolled ? "bg-white/50 py-3 text-gray-700 shadow-md backdrop-blur-lg md:py-4" : "py-4 md:py-6"}`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center justify-center gap-2">
          <img
            className={`h-12 w-12 rounded-full object-center ${isScrolled && "opacity-90 invert"}`}
            src="/logo.png"
            alt=""
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-4 md:flex lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {link.name}
              <div
                className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 transition-all duration-300 group-hover:w-full`}
              />
            </a>
          ))}
          <button
            onClick={() => navigate("owner")}
            className={`cursor-pointer rounded-full border px-4 py-1 text-sm font-light ${isScrolled ? "text-black" : "text-white"} transition-all`}
          >
            Dashboard
          </button>
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          <CgSearch
            className={`h-6 w-6 text-white ${isScrolled && "invert"}`}
          />

          {/* user */}
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIconn />}
                  onClick={() => navigate("/")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={openSignIn}
              className={`ml-4 cursor-pointer rounded-full px-8 py-2.5 transition-all duration-500 ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}

        <div className="flex items-center gap-3 md:hidden">
          {user && (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<BookIconn />}
                  onClick={() => navigate("/")}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}

          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer text-white ${isScrolled ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-6 bg-white text-base font-medium text-gray-800 transition-all duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}

          {user && (
            <button
              onClick={() => navigate("owner")}
              className="cursor-pointer rounded-full border px-4 py-1 text-sm font-light transition-all"
            >
              Dashboard
            </button>
          )}

          {!user && (
            <button
              onClick={openSignIn}
              className="rounded-full bg-black px-8 py-2.5 text-white transition-all duration-500"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
