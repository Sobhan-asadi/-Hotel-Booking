import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NavborDashboard() {
  return (
    <header className="border-primary-900/[0.08] flex h-[72px] shrink-0 items-center justify-between border-b bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-4">
        <Link to="/" aria-label="Go to homepage" className="shrink-0">
          <img
            src="/logo.png"
            alt="Ogo"
            className="h-9 w-auto opacity-80 invert"
          />
        </Link>

        <div className="bg-primary-900/[0.1] hidden h-6 w-px sm:block" />

        <div className="hidden min-w-0 sm:block">
          <p className="text-[10px] font-bold tracking-[0.14em] text-zinc-400 uppercase">
            Owner portal
          </p>

          <p className="text-primary-950 mt-0.5 truncate text-sm font-semibold">
            Property management
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          to="/"
          className="hover:bg-primary-50 hover:text-primary-950 flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-zinc-500 transition-colors sm:px-4"
        >
          <HiOutlineArrowLeft aria-hidden="true" className="text-base" />

          <span className="hidden sm:inline">Back to website</span>
        </Link>

        <div className="bg-primary-900/[0.1] h-6 w-px" />

        <SignedOut>
          <SignInButton mode="modal">
            <button
              type="button"
              className="bg-primary-950 hover:bg-primary-700 min-h-10 rounded-full px-4 text-xs font-semibold text-white transition-colors"
            >
              Sign in
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
