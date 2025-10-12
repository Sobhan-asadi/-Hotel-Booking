import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LayoutPage from "../pages/LayoutPage";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LayoutPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
