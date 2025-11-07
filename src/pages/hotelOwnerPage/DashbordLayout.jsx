import { Outlet } from "react-router-dom";
import NavborDashboard from "../../components/hotelOwner/NavbarDashboard";
import Sidebar from "../../components/hotelOwner/Sidebar";

export default function DashbordLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header>
        <NavborDashboard />
      </header>

      <div className="flex h-screen">
        <aside>
          <Sidebar />
        </aside>

        <main className="h-screen flex-1 p-4 pt-10 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
