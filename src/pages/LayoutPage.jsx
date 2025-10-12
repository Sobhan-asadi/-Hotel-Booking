import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function LayoutPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
