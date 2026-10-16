import { Bell } from "lucide-react";
import { Card } from "../common/Card";
import { reminders } from "../../data/mockData";

export function RemindersCard() {
  return (
    <Card title="Reminder" className="min-h-[350px]">
      <div className="mb-3 rounded-xl bg-[#f8f5eb] p-3">
        <div className="flex items-center gap-2 font-medium">
          <Bell size={16} className="text-brand" />
          Follow-Ups
        </div>
        <p className="text-xs text-neutral-500">
          15 leads need to be followed up.
        </p>
        <div className="mt-2 flex -space-x-1.5">
          {["J", "M", "A", "E"].map((name) => (
            <span
              key={name}
              className="grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-brand-pale text-[10px] font-semibold text-brand-dark"
            >
              {name}
            </span>
          ))}
          <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-neutral-200 text-[9px]">
            +11
          </span>
        </div>
      </div>
      <div className="space-y-5">
        {reminders.map((item) => (
          <div key={item.title}>
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-xs leading-relaxed text-neutral-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
