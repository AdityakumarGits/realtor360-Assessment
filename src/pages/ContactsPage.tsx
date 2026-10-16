import { useMemo, useState } from "react";
import {
  ContactFilters,
  type ContactFilterState,
} from "../components/contacts/ContactFilters";
import { ContactsToolbar } from "../components/contacts/ContactsToolbar";
import { ContactsTable } from "../components/contacts/ContactsTable";
import { CreateContactModal } from "../components/contacts/CreateContactModal";
import { contacts as initialContacts } from "../data/mockData";
import type { Contact } from "../types";

const emptyFilters: ContactFilterState = {
  query: "",
  statuses: [],
  roles: [],
  assignees: [],
  cities: [],
  leadSources: [],
};

export function ContactsPage() {
  const [allContacts, setAllContacts] = useState<Contact[]>(initialContacts);
  const [filters, setFilters] = useState<ContactFilterState>(emptyFilters);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"table" | "grid">("table");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContacts = useMemo(
    () =>
      allContacts.filter((contact) => {
        const text =
          `${contact.name} ${contact.email} ${contact.company}`.toLowerCase();
        const matchesText = `${filters.query} ${search}`
          .trim()
          .toLowerCase()
          .split(/\s+/)
          .every((word) => text.includes(word));
        return (
          matchesText &&
          (!filters.statuses.length ||
            filters.statuses.includes(contact.status)) &&
          (!filters.roles.length || filters.roles.includes(contact.role)) &&
          (!filters.assignees.length ||
            filters.assignees.includes(contact.assignedTo) ||
            (filters.assignees.includes("Jessica") &&
              contact.assignedTo === "Jessica Chen")) &&
          (!filters.cities.length || filters.cities.includes(contact.city)) &&
          (!filters.leadSources.length ||
            filters.leadSources.includes(contact.leadSource))
        );
      }),
    [allContacts, filters, search],
  );

  const createContact = (contact: Omit<Contact, "id">) => {
    setAllContacts((current) => [
      { ...contact, id: Math.max(0, ...current.map((item) => item.id)) + 1 },
      ...current,
    ]);
    setIsModalOpen(false);
  };

  const exportContacts = () => {
    const columns: (keyof Contact)[] = [
      "name",
      "email",
      "company",
      "role",
      "phone",
      "dealStage",
      "status",
      "assignedTo",
      "city",
      "leadSource",
    ];
    const csv = [
      columns.join(","),
      ...filteredContacts.map((contact) =>
        columns
          .map((key) => `"${String(contact[key]).replace(/"/g, '""')}"`)
          .join(","),
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "realtor360-contacts.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-[#f4f6f8] shadow-card">
      <div className="flex flex-col lg:flex-row">
        <ContactFilters
          filters={filters}
          onChange={setFilters}
          contacts={allContacts}
        />
        <section className="min-w-0 flex-1">
          <ContactsToolbar
            search={search}
            onSearchChange={setSearch}
            view={view}
            onViewChange={setView}
            onCreate={() => setIsModalOpen(true)}
            onExport={exportContacts}
          />
          <ContactsTable contacts={filteredContacts} view={view} />
        </section>
      </div>
      {isModalOpen && (
        <CreateContactModal
          onClose={() => setIsModalOpen(false)}
          onSave={createContact}
        />
      )}
    </div>
  );
}
