import {
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlineViewList,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Overview",
    path: "/owner",
    icon: HiOutlineHome,
    end: true,
  },
  {
    name: "Add room",
    path: "/owner/add-room",
    icon: HiOutlinePlusCircle,
  },
  {
    name: "Manage rooms",
    path: "/owner/list-room",
    icon: HiOutlineViewList,
  },
];

export default function Sidebar() {
  return (
    <aside className="border-primary-900/[0.08] flex h-full w-[72px] shrink-0 flex-col border-r bg-white px-3 py-5 md:w-[240px] md:px-4">
      <div className="hidden px-3 pb-5 md:block">
        <p className="text-[10px] font-bold tracking-[0.14em] text-zinc-400 uppercase">
          Workspace
        </p>

        <p className="text-primary-950 mt-1 text-sm font-semibold">
          Hotel management
        </p>
      </div>

      <nav aria-label="Owner dashboard" className="space-y-1.5">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              title={item.name}
              className={({ isActive }) =>
                `group flex min-h-12 items-center justify-center gap-3 rounded-[14px] px-3 text-sm font-semibold transition-colors md:justify-start ${
                  isActive
                    ? "bg-primary-950 text-white"
                    : "hover:bg-primary-50 hover:text-primary-950 text-zinc-500"
                }`
              }
            >
              <Icon aria-hidden="true" className="shrink-0 text-xl" />

              <span className="hidden md:block">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-primary-900/[0.07] mt-auto hidden border-t px-3 pt-5 md:block">
        <p className="text-[10px] leading-5 text-zinc-400">
          Manage your rooms and keep track of your property from one place.
        </p>
      </div>
    </aside>
  );
}
