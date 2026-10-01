import { useClerk, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Brand from "./navigation/Brand";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  function handleSignIn() {
    setIsMenuOpen(false);
    openSignIn();
  }

  function handleNavigate(path) {
    setIsMenuOpen(false);
    navigate(path);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isTransparent ? "py-0" : "py-3"
      }`}
    >
      <div className={isTransparent ? "page-container" : "page-container"}>
        <nav
          aria-label="Main navigation"
          className={`flex items-center justify-between transition-all duration-500 ${
            isTransparent
              ? "h-[92px] border-b border-white/15"
              : "h-[68px] rounded-full border border-black/5 bg-[#f8f5ef]/95 px-4 shadow-[0_12px_40px_rgba(20,31,27,0.10)] backdrop-blur-xl sm:px-5 lg:px-6"
          }`}
        >
          <Brand light={isTransparent} />

          <DesktopNavigation
            light={isTransparent}
            user={user}
            onSignIn={handleSignIn}
            onNavigate={handleNavigate}
          />

          <MobileNavigation
            light={isTransparent}
            user={user}
            isOpen={isMenuOpen}
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
            onSignIn={handleSignIn}
            onNavigate={handleNavigate}
          />
        </nav>
      </div>
    </header>
  );
}
