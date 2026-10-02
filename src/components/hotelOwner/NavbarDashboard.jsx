import { UserButton } from "@clerk/clerk-react";
import { HiOutlineArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const pageMeta = {
  "/owner": {
    eyebrow: "Overview",
    title: "Dashboard",
  },
  "/owner/add-room": {
    eyebrow: "Inventory",
    title: "Add room",
  },
  "/owner/list-room": {
    eyebrow: "Inventory",
    title: "Manage rooms",
  },
};

export default function NavborDashboard() {
  const { pathname } = useLocation();

  const currentPage = pageMeta[pathname] ?? {
    eyebrow: "Owner portal",
    title: "Property management",
  };

  return (
    <header className="border-primary-900/[0.07] sticky top-0 z-40 shrink-0 border-b bg-[#f8f7f3]/90 backdrop-blur-xl">
      <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            to="/"
            aria-label="Go to homepage"
            className="border-primary-900/[0.08] hover:border-primary-900/[0.14] flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border bg-white shadow-[0_4px_18px_rgba(20,40,32,0.04)] transition"
          >
            <img
              src="/logo.png"
              alt="Ogo"
              className="h-7 w-auto opacity-80 invert"
            />
          </Link>

          <div className="bg-primary-900/[0.08] hidden h-8 w-px sm:block" />

          <div className="min-w-0">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="bg-accent-500 h-1.5 w-1.5 rounded-full" />

              <p className="text-[9px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
                {currentPage.eyebrow}
              </p>
            </div>

            <p className="text-primary-950 truncate text-sm font-semibold tracking-[-0.01em] sm:mt-1">
              {currentPage.title}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="group hover:border-primary-900/[0.07] hover:text-primary-950 flex min-h-10 items-center gap-2 rounded-full border border-transparent px-3 text-xs font-semibold text-zinc-500 transition-colors hover:bg-white sm:px-4"
          >
            <HiOutlineArrowLeft
              aria-hidden="true"
              className="text-base transition-transform group-hover:-translate-x-0.5"
            />

            <span className="hidden sm:inline">Back to website</span>

            <HiOutlineExternalLink
              aria-hidden="true"
              className="hidden text-sm text-zinc-400 md:block"
            />
          </Link>

          <div className="bg-primary-900/[0.08] h-7 w-px" />

          <div className="border-primary-900/[0.07] flex items-center gap-3 rounded-full border bg-white py-1.5 pr-2 pl-3 shadow-[0_4px_18px_rgba(20,40,32,0.035)]">
            <div className="hidden text-right md:block">
              <p className="text-[9px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
                Owner account
              </p>

              <p className="text-primary-950 mt-0.5 text-[11px] font-semibold">
                Property manager
              </p>
            </div>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
