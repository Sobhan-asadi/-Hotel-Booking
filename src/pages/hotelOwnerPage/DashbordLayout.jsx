import { SignedIn, SignedOut, SignIn, useAuth } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import MobileOwnerNavigation from "../../components/hotelOwner/MobileOwnerNavigation";
import NavborDashboard from "../../components/hotelOwner/NavbarDashboard";
import Sidebar from "../../components/hotelOwner/Sidebar";

function OwnerPortalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f7f3]">
      <div className="flex flex-col items-center">
        <div className="border-primary-900/15 border-t-primary-900 h-9 w-9 animate-spin rounded-full border-2" />

        <p className="mt-4 text-xs font-medium text-zinc-400">
          Loading owner portal...
        </p>
      </div>
    </div>
  );
}

function OwnerSignIn() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f3ed] px-5 py-10">
      <div
        aria-hidden="true"
        className="bg-primary-200/30 absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-accent-200/30 absolute -right-40 -bottom-40 h-[460px] w-[460px] rounded-full blur-3xl"
      />

      <div className="border-primary-900/[0.07] relative z-10 grid w-full max-w-[980px] overflow-hidden rounded-[32px] border bg-white shadow-[0_30px_100px_rgba(20,40,32,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-primary-950 hidden p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-accent-300 text-[10px] font-bold tracking-[0.18em] uppercase">
              Ogo Hotel Booking
            </p>

            <h1 className="font-display mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.035em]">
              Your property,
              <br />
              managed simply.
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Access your owner workspace to manage rooms and review property
              performance.
            </p>
          </div>

          <p className="text-[10px] tracking-[0.08em] text-white/35 uppercase">
            Owner portal
          </p>
        </div>

        <div className="flex min-h-[560px] items-center justify-center p-5 sm:p-10">
          <SignIn
            routing="hash"
            fallbackRedirectUrl="/owner"
            appearance={{
              elements: {
                rootBox: "w-full",
                cardBox: "w-full shadow-none",
                card: "w-full shadow-none border-0 bg-transparent",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function DashbordLayout() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return <OwnerPortalLoading />;
  }

  return (
    <>
      <SignedOut>
        <OwnerSignIn />
      </SignedOut>

      <SignedIn>
        <div className="flex min-h-screen flex-col bg-[#f8f7f3]">
          <NavborDashboard />

          <div className="flex min-h-0 flex-1">
            <Sidebar />

            <main className="min-w-0 flex-1">
              <div className="mx-auto w-full max-w-[1600px] px-4 pt-6 pb-28 sm:px-6 sm:pt-8 lg:px-8 lg:pb-8 xl:px-10 xl:py-9">
                <Outlet />
              </div>
            </main>
          </div>

          <MobileOwnerNavigation />
        </div>
      </SignedIn>
    </>
  );
}
