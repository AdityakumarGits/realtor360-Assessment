import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../common/Card";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function CalendarCard() {
  const [monthIndex, setMonthIndex] = useState(6);
  const [year, setYear] = useState(2025);
  const shiftMonth = (amount: number) => {
    const date = new Date(year, monthIndex + amount, 1);
    setMonthIndex(date.getMonth());
    setYear(date.getFullYear());
  };
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  return (
    <Card className="p-0">
      <div className="flex items-center justify-between px-4 pt-4">
        <h2 className="text-2xl font-semibold">
          {months[monthIndex]} {year}
        </h2>
        <div className="flex gap-2">
          <button
            aria-label="Previous month"
            onClick={() => shiftMonth(-1)}
            className="rounded p-1 hover:bg-neutral-100"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next month"
            onClick={() => shiftMonth(1)}
            className="rounded p-1 hover:bg-neutral-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-1 px-3 py-4 text-center text-xs">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <span key={`${day}-${i}`} className="py-2 font-medium">
            {day}
          </span>
        ))}
        {cells.map((day, i) => (
          <span
            key={i}
            className={`grid h-8 place-items-center rounded-md ${day === 8 && monthIndex === 6 && year === 2025 ? "bg-brand font-semibold" : ""} ${day ? "text-neutral-700" : ""}`}
          >
            {day}
          </span>
        ))}
      </div>
      <div className="border-t border-neutral-200 p-4">
        <h3 className="mb-3 font-medium">My Schedule</h3>
        <div className="space-y-3">
          <div className="rounded-lg border-l-2 border-emerald-400 bg-neutral-50 p-3">
            <p className="text-sm font-medium">Visit Client- Angel Plaza</p>
            <p className="text-xs text-neutral-500">
              Sector 45, Gurugram, Haryana
            </p>
          </div>
          <div className="rounded-lg border-l-2 border-emerald-400 bg-neutral-50 p-3">
            <p className="text-sm font-medium">
              Visit Client – Site Walkthrough
            </p>
            <p className="text-xs text-neutral-500">
              Review property and next steps
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
