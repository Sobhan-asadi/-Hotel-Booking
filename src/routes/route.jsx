import { createBrowserRouter } from "react-router-dom";

import AllroomsPage from "../pages/AllroomsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LayoutPage from "../pages/LayoutPage";
import NotFound from "../pages/NotFound";
import RoomDetails from "../pages/RoomDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rooms", element: <AllroomsPage /> },
      { path: "details/:name", element: <RoomDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
