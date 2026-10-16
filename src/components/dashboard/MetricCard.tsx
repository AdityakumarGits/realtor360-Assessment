import { Handshake, House, Coins, Users } from "lucide-react";
import type { Metric } from "../../types";

const icons = { home: House, users: Users, handshake: Handshake, coins: Coins };

export function MetricCard({ metric }: { metric: Metric }) {
  const Icon = icons[metric.icon];
  const positive = metric.trend === "up";
  return (
    <div className="panel flex min-h-[108px] items-center gap-4 p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-neutral-100 text-brand">
        <Icon size={22} fill="currentColor" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-neutral-700 sm:text-base">{metric.label}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <strong className="text-2xl font-semibold text-neutral-800">
            {metric.value}
          </strong>
          <span
            className={`rounded-full px-2.5 py-1 text-xs ${positive ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"}`}
          >
            {metric.change} {positive ? "↗" : "↘"}
          </span>
        </div>
      </div>
    </div>
  );
}
