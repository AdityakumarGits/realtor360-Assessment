import type { Contact } from "../../types";

const statusStyles: Record<Contact["status"], string> = {
  Active: "border-green-500 bg-green-50",
  "In Progress": "border-amber-400 bg-amber-50",
  Converted: "border-sky-400 bg-sky-50",
  Cold: "border-neutral-400 bg-neutral-100",
  "Not Interested": "border-red-400 bg-red-50",
};

interface ContactsTableProps {
  contacts: Contact[];
  view: "table" | "grid";
}

export function ContactsTable({ contacts, view }: ContactsTableProps) {
  if (contacts.length === 0)
    return (
      <div className="p-10 text-center text-sm text-neutral-500">
        No contacts match these filters.
      </div>
    );

  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {contacts.map((contact) => (
          <article
            key={contact.id}
            className="rounded-xl border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{contact.name}</h3>
                <p className="text-sm text-neutral-500">{contact.email}</p>
              </div>
              <span
                className={`rounded-md border px-2 py-1 text-xs ${statusStyles[contact.status]}`}
              >
                {contact.status}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="text-neutral-500">Company:</span>{" "}
                {contact.company}
              </p>
              <p>
                <span className="text-neutral-500">Role:</span> {contact.role}
              </p>
              <p>
                <span className="text-neutral-500">Phone:</span> {contact.phone}
              </p>
              <p>
                <span className="text-neutral-500">Assigned to:</span>{" "}
                {contact.assignedTo}
              </p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-5 pb-5">
      <table className="w-full min-w-[950px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white text-sm font-semibold">
            {[
              "Contact Name",
              "Company",
              "Role",
              "Phone No.",
              "Deal Stage",
              "Status",
              "Assigned to",
            ].map((heading) => (
              <th
                key={heading}
                className="px-3 py-4 first:rounded-l-xl last:rounded-r-xl"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className="border-b border-neutral-300 last:border-b-0"
            >
              <td className="px-3 py-5">
                <p className="font-semibold text-neutral-900">{contact.name}</p>
                <p className="mt-1 text-neutral-500">Email: {contact.email}</p>
              </td>
              <td className="px-3 py-5">{contact.company}</td>
              <td className="px-3 py-5">{contact.role}</td>
              <td className="px-3 py-5">{contact.phone}</td>
              <td className="px-3 py-5">{contact.dealStage}</td>
              <td className="px-3 py-5">
                <span
                  className={`inline-block min-w-[76px] rounded-md border px-2 py-1 text-center ${statusStyles[contact.status]}`}
                >
                  {contact.status}
                </span>
              </td>
              <td className="px-3 py-5">{contact.assignedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
