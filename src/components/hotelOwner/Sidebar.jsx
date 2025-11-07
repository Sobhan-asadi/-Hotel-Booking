import { BsBuildingAdd } from "react-icons/bs";
import {
  MdFormatListNumbered,
  MdOutlineDashboardCustomize,
} from "react-icons/md";

import { NavLink } from "react-router-dom";

const sidebarLinks = [
  { name: "Dashboard", path: "/owner", icon: <MdOutlineDashboardCustomize /> },
  { name: "Add Room", path: "add-room", icon: <BsBuildingAdd /> },
  {
    name: "List Room",
    path: "list-room",
    icon: <MdFormatListNumbered />,
  },
];

export default function Sidebar() {
  return (
    <div className="flex h-full w-16 flex-col border-r border-gray-300 pt-4 text-base transition-all duration-300 md:w-64">
      {sidebarLinks.map((item) => (
        <NavLink
          key={item}
          to={item.path}
          end="/owner"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 md:px-8 ${isActive ? "border-r-4 border-blue-600 bg-blue-600/10 text-blue-600 md:border-r-[6px]" : "border-white text-gray-700 hover:bg-gray-100/90"}`
          }
        >
          {item.icon}
          <p className="hidden text-center md:block">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
