import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import { ownerNavigation } from "./ownerNavigation";

export default function Sidebar() {
  return (
    <aside className="border-primary-900/[0.07] sticky top-[76px] hidden h-[calc(100vh-76px)] w-[260px] shrink-0 border-r bg-[#f1efe8] lg:flex lg:flex-col">
      <div className="flex min-h-0 flex-1 flex-col px-4 py-5">
        <div className="border-primary-900/[0.07] rounded-[20px] border bg-white/75 p-4 shadow-[0_6px_24px_rgba(20,40,32,0.03)]">
          <div className="flex items-center gap-3">
            <div className="bg-primary-950 flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] text-white">
              <HiOutlineHome aria-hidden="true" className="text-lg" />
            </div>

            <div className="min-w-0">
              <p className="text-accent-700 text-[9px] font-bold tracking-[0.14em] uppercase">
                Workspace
              </p>

              <p className="text-primary-950 mt-1 truncate text-sm font-semibold">
                Hotel management
              </p>
            </div>
          </div>
        </div>

        <nav aria-label="Owner dashboard" className="mt-7">
          <p className="px-3 text-[9px] font-bold tracking-[0.16em] text-zinc-400 uppercase">
            Management
          </p>

          <div className="mt-3 space-y-1.5">
            {ownerNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `group relative flex min-h-[62px] items-center gap-3 rounded-[17px] px-3.5 transition-all duration-200 ${
                      isActive
                        ? "bg-primary-950 text-white shadow-[0_10px_28px_rgba(16,32,28,0.16)]"
                        : "hover:text-primary-950 text-zinc-500 hover:bg-white/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] transition-colors ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-primary-700 group-hover:bg-primary-50 bg-white shadow-[0_3px_12px_rgba(20,40,32,0.04)]"
                        }`}
                      >
                        <Icon aria-hidden="true" className="text-lg" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-xs font-semibold">
                          {item.name}
                        </span>

                        <span
                          className={`mt-1 block truncate text-[9px] ${
                            isActive ? "text-white/50" : "text-zinc-400"
                          }`}
                        >
                          {item.description}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          isActive ? "bg-accent-300" : "bg-transparent"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="mt-auto pt-6">
          <div className="border-primary-900/[0.07] border-t pt-5">
            <div className="bg-primary-950/[0.045] rounded-[18px] p-4">
              <p className="text-primary-700 text-[9px] font-bold tracking-[0.12em] uppercase">
                Owner portal
              </p>

              <p className="mt-2 text-[11px] leading-5 text-zinc-500">
                Manage room inventory and monitor your property from one
                workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
