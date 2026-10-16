import { ChevronDown, Search } from "lucide-react";
import type { PageName } from "../../App";

const navItems = [
  "Home",
  "Developments",
  "Buildings",
  "Units",
  "Leads",
  "Companies",
  "Contacts",
  "Deals",
  "Activities",
  "Attorney Firms",
  "Reports",
];

interface TopNavigationProps {
  activePage: PageName;
  onNavigate: (page: PageName) => void;
}

export function TopNavigation({ activePage, onNavigate }: TopNavigationProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[70px] max-w-[1600px] items-center gap-5 px-4 sm:px-7">
        <button
          className="flex shrink-0 items-center gap-2"
          onClick={() => onNavigate("Home")}
          aria-label="Realtor360 home"
        >
          <span className="text-3xl leading-none text-brand">♙</span>
          <span className="text-lg font-extrabold tracking-tight text-neutral-800">
            REALTOR360
          </span>
        </button>
        <nav className="hidden min-w-0 flex-1 items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = item === activePage;
            const enabled = item === "Home" || item === "Contacts";
            return (
              <button
                key={item}
                onClick={() => enabled && onNavigate(item as PageName)}
                className={`whitespace-nowrap rounded-xl px-3 py-3 text-sm transition ${active ? "bg-brand text-white" : "text-neutral-700 hover:bg-brand-pale"} ${!enabled ? "cursor-default" : ""}`}
              >
                {item}
              </button>
            );
          })}
          <span className="px-2 text-neutral-500">•••</span>
        </nav>
        <label className="ml-auto hidden w-40 items-center gap-2 rounded-xl bg-neutral-100 px-3 py-3 lg:flex">
          <input
            className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            placeholder="Search..."
          />
          <Search size={19} />
        </label>
        <button
          className="flex items-center gap-2 text-sm"
          aria-label="User menu"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-pale font-semibold text-brand-dark">
            A
          </span>
          <ChevronDown size={15} />
        </button>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-4 pb-3 xl:hidden">
        {(["Home", "Contacts"] as PageName[]).map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            className={`rounded-lg px-4 py-2 text-sm ${activePage === item ? "bg-brand text-white" : "bg-neutral-100"}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
