import { SignInButton, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function NavborDashboard() {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 bg-white px-4 py-3 transition-all duration-300 md:px-8">
      <Link className="" to="/">
        <img
          src="/logo.png"
          alt="logoHotel"
          className="h-9 opacity-80 invert"
        />
      </Link>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
