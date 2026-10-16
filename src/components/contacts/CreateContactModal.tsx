import { useState } from "react";
import { X } from "lucide-react";
import type { Contact, ContactRole, ContactStatus } from "../../types";

interface CreateContactModalProps {
  onClose: () => void;
  onSave: (contact: Omit<Contact, "id">) => void;
}

const emptyContact: Omit<Contact, "id"> = {
  name: "",
  email: "",
  company: "",
  role: "Buyer",
  phone: "",
  dealStage: "Negotiation",
  status: "Active",
  assignedTo: "Jessica Chen",
  city: "Delhi",
  leadSource: "Website Form",
};

export function CreateContactModal({
  onClose,
  onSave,
}: CreateContactModalProps) {
  const [form, setForm] = useState(emptyContact);
  const update = (key: keyof typeof emptyContact, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));
  const inputFields = [
    { key: "name", label: "Full name", placeholder: "e.g. Priya Sharma" },
    { key: "email", label: "Email", placeholder: "name@example.com" },
    { key: "company", label: "Company", placeholder: "Company name" },
    { key: "phone", label: "Phone number", placeholder: "+91 ..." },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave(form);
        }}
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Create Contact</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-2 hover:bg-neutral-100"
          >
            <X size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {inputFields.map((field) => (
            <label key={field.key} className="space-y-1 text-sm font-medium">
              {field.label}
              <input
                required={field.key === "name"}
                type={field.key === "email" ? "email" : "text"}
                value={form[field.key]}
                onChange={(event) => update(field.key, event.target.value)}
                placeholder={field.placeholder}
                className="input-control"
              />
            </label>
          ))}
          <label className="space-y-1 text-sm font-medium">
            Role
            <select
              value={form.role}
              onChange={(event) =>
                update("role", event.target.value as ContactRole)
              }
              className="input-control"
            >
              {["Buyer", "Seller", "Investor", "Broker", "Developer"].map(
                (role) => (
                  <option key={role}>{role}</option>
                ),
              )}
            </select>
          </label>
          <label className="space-y-1 text-sm font-medium">
            Status
            <select
              value={form.status}
              onChange={(event) =>
                update("status", event.target.value as ContactStatus)
              }
              className="input-control"
            >
              {[
                "Active",
                "In Progress",
                "Converted",
                "Cold",
                "Not Interested",
              ].map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm font-medium sm:col-span-2">
            Assigned to
            <select
              value={form.assignedTo}
              onChange={(event) => update("assignedTo", event.target.value)}
              className="input-control"
            >
              {["Jessica Chen", "Mohit", "Arjun", "Emily"].map((person) => (
                <option key={person}>{person}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-neutral-200 px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button type="submit" className="primary-button">
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
}
