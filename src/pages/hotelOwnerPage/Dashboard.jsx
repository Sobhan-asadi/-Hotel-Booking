import DashboardHeader from "../../components/hotelOwner/dashboard/DashboardHeader";
import DashboardStats from "../../components/hotelOwner/dashboard/DashboardStats";
import RecentBookings from "../../components/hotelOwner/dashboard/RecentBookings";
import RevenueChart from "../../components/hotelOwner/dashboard/RevenueChart";
import RoomOverview from "../../components/hotelOwner/dashboard/RoomOverview";

export default function Dashboard() {
  return (
    <div className="space-y-7">
      <DashboardHeader />

      <DashboardStats />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
        <RevenueChart />

        <RoomOverview />
      </div>

      <RecentBookings />
    </div>
  );
}
