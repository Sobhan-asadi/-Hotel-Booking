import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function LayoutPage() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
}
