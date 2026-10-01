import { Outlet } from "react-router-dom";

import NavborDashboard from "../../components/hotelOwner/NavbarDashboard";
import Sidebar from "../../components/hotelOwner/Sidebar";

export default function DashbordLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f7f3]">
      <NavborDashboard />

      <div className="flex min-h-0 flex-1">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10 xl:py-9">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
