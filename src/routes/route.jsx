import { createBrowserRouter } from "react-router-dom";

import AllroomsPage from "../pages/AllroomsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LayoutPage from "../pages/LayoutPage";
import MyBookings from "../pages/MyBookings";
import NotFound from "../pages/NotFound";
import RoomDetails from "../pages/RoomDetails";
import AddRoomPage from "../pages/hotelOwnerPage/AddRoomPage";
import Dashboard from "../pages/hotelOwnerPage/Dashboard";
import DashbordLayout from "../pages/hotelOwnerPage/DashbordLayout";
import ListRoomPage from "../pages/hotelOwnerPage/ListRoomPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rooms", element: <AllroomsPage /> },
      { path: "/:name", element: <RoomDetails /> },
      { path: "/:name/mybookings", element: <MyBookings /> },
    ],
  },
  // DashbordLayout
  {
    path: "owner",
    element: <DashbordLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-room", element: <AddRoomPage /> },
      { path: "list-room", element: <ListRoomPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
