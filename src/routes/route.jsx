import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LayoutPage = lazy(() => import("../pages/LayoutPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AllroomsPage = lazy(() => import("../pages/AllroomsPage"));
const RoomDetails = lazy(() => import("../pages/RoomDetails"));
const MyBookings = lazy(() => import("../pages/MyBookings"));
const ExperiencesPage = lazy(() => import("../pages/ExperiencesPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));

const DashbordLayout = lazy(
  () => import("../pages/hotelOwnerPage/DashbordLayout"),
);

const Dashboard = lazy(() => import("../pages/hotelOwnerPage/Dashboard"));

const AddRoomPage = lazy(() => import("../pages/hotelOwnerPage/AddRoomPage"));

const ListRoomPage = lazy(() => import("../pages/hotelOwnerPage/ListRoomPage"));

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

const pageLoader = (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="border-primary-900/15 border-t-primary-900 h-9 w-9 animate-spin rounded-full border-2" />

      <p className="mt-4 text-xs font-medium text-zinc-400">Loading...</p>
    </div>
  </div>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={pageLoader}>
        <LayoutPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={pageLoader}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={pageLoader}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "rooms",
        element: (
          <Suspense fallback={pageLoader}>
            <AllroomsPage />
          </Suspense>
        ),
      },
      {
        path: "rooms/:roomId",
        element: (
          <Suspense fallback={pageLoader}>
            <RoomDetails />
          </Suspense>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <Suspense fallback={pageLoader}>
            <MyBookings />
          </Suspense>
        ),
      },
      {
        path: "experiences",
        element: (
          <Suspense fallback={pageLoader}>
            <ExperiencesPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={pageLoader}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/owner",
    element: (
      <Suspense fallback={pageLoader}>
        <DashbordLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={pageLoader}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "add-room",
        element: (
          <Suspense fallback={pageLoader}>
            <AddRoomPage />
          </Suspense>
        ),
      },
      {
        path: "list-room",
        element: (
          <Suspense fallback={pageLoader}>
            <ListRoomPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={pageLoader}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default routes;
