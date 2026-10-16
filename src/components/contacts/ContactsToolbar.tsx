import { Download, LayoutGrid, List, Plus, Search } from "lucide-react";

interface ContactsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  view: "table" | "grid";
  onViewChange: (view: "table" | "grid") => void;
  onCreate: () => void;
  onExport: () => void;
}

export function ContactsToolbar({
  search,
  onSearchChange,
  view,
  onViewChange,
  onCreate,
  onExport,
}: ContactsToolbarProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-neutral-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold">All Contacts</h1>
        <button onClick={onCreate} className="primary-button mt-3">
          <Plus size={16} />
          Create Contact
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <label className="flex min-w-[190px] flex-1 items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 sm:w-56 sm:flex-none">
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search Contact"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
          <Search size={18} />
        </label>
        <div className="flex rounded-lg bg-[#f8f5eb] p-1">
          <button
            onClick={() => onViewChange("grid")}
            aria-label="Grid view"
            className={`rounded p-1.5 ${view === "grid" ? "bg-brand text-white" : ""}`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => onViewChange("table")}
            aria-label="Table view"
            className={`rounded p-1.5 ${view === "table" ? "bg-brand text-white" : ""}`}
          >
            <List size={18} />
          </button>
        </div>
        <button
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-lg bg-[#f8f5eb] px-3 py-2 text-sm hover:bg-brand-pale"
        >
          <Download size={16} />
          Export
        </button>
      </div>
    </div>
  );
}
