import { Search } from "lucide-react";
import type { Contact } from "../../types";

export interface ContactFilterState {
  query: string;
  statuses: string[];
  roles: string[];
  assignees: string[];
  cities: string[];
  leadSources: string[];
}

interface ContactFiltersProps {
  contacts: Contact[];
  filters: ContactFilterState;
  onChange: (filters: ContactFilterState) => void;
}

const groups = [
  {
    key: "statuses",
    title: "Status",
    options: ["Active", "In Progress", "Converted", "Cold", "Not Interested"],
  },
  {
    key: "roles",
    title: "Role",
    options: ["Buyer", "Seller", "Investor", "Broker", "Developer"],
  },
  {
    key: "assignees",
    title: "Assigned To",
    options: ["Jessica Chen", "Mohit", "Arjun", "Emily"],
  },
  {
    key: "cities",
    title: "City",
    options: ["Bengaluru", "Pune", "Mumbai", "Hyderabad", "Delhi"],
  },
  {
    key: "leadSources",
    title: "Lead Source",
    options: ["Website Form", "Inbound Call", "Reference", "Facebook"],
  },
] as const;

export function ContactFilters({ filters, onChange }: ContactFiltersProps) {
  const toggle = (
    key: keyof Omit<ContactFilterState, "query">,
    value: string,
  ) => {
    const current = filters[key];
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  return (
    <aside className="bg-white p-5 lg:w-[290px] lg:shrink-0">
      <h2 className="mb-3 text-center text-2xl font-semibold">Filters</h2>
      <label className="mb-3 flex items-center gap-2 rounded-xl bg-[#f4f6f8] px-3 py-2">
        <input
          value={filters.query}
          onChange={(event) =>
            onChange({ ...filters, query: event.target.value })
          }
          placeholder="Search by Contact Name"
          className="w-full bg-transparent text-sm outline-none"
        />
        <Search size={18} />
      </label>
      <div className="space-y-4">
        {groups.map((group) => (
          <section key={group.key}>
            <h3 className="mb-2 text-xl font-medium">{group.title}</h3>
            <div className="space-y-1.5">
              {group.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-sm text-neutral-700"
                >
                  <input
                    type="checkbox"
                    checked={filters[group.key].includes(option)}
                    onChange={() => toggle(group.key, option)}
                    className="h-4 w-4 accent-[#d9b32e]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
      <button
        onClick={() =>
          onChange({
            query: "",
            statuses: [],
            roles: [],
            assignees: [],
            cities: [],
            leadSources: [],
          })
        }
        className="mt-5 text-sm font-medium text-brand-dark underline"
      >
        Clear all filters
      </button>
    </aside>
  );
}
