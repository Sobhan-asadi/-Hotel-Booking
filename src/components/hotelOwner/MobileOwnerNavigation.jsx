import { NavLink } from "react-router-dom";

import { ownerNavigation } from "./ownerNavigation";

export default function MobileOwnerNavigation() {
  return (
    <nav
      aria-label="Owner mobile navigation"
      className="fixed right-3 bottom-3 left-3 z-50 lg:hidden"
    >
      <div className="border-primary-900/[0.08] mx-auto flex max-w-md items-center gap-1 rounded-[22px] border bg-white/95 p-1.5 shadow-[0_18px_55px_rgba(20,40,32,0.16)] backdrop-blur-xl">
        {ownerNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex min-h-[58px] min-w-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-[17px] px-2 transition-all duration-200 ${
                  isActive
                    ? "bg-primary-950 text-white shadow-[0_7px_20px_rgba(16,32,28,0.16)]"
                    : "hover:bg-primary-50 hover:text-primary-800 text-zinc-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    aria-hidden="true"
                    className={`text-xl ${
                      isActive ? "text-white" : "text-primary-700"
                    }`}
                  />

                  <span className="truncate text-[9px] font-semibold">
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
