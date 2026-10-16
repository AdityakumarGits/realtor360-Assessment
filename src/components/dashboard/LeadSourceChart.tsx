import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card } from "../common/Card";
import { leadSourceData } from "../../data/mockData";

const colors = ["#d9b32e", "#efdfa8", "#f6efd7", "#e8cf75"];

export function LeadSourceChart() {
  return (
    <Card title="Deals by Lead Source" className="h-[350px]">
      <ResponsiveContainer width="100%" height="88%">
        <PieChart>
          <Pie
            data={leadSourceData}
            dataKey="value"
            nameKey="name"
            innerRadius="30%"
            outerRadius="66%"
            paddingAngle={1}
            stroke="none"
          >
            {leadSourceData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [value, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-neutral-600">
        {leadSourceData.map((item, index) => (
          <span key={item.name} className="inline-flex items-center gap-1.5">
            <i
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: colors[index] }}
            />
            {item.name}
          </span>
        ))}
      </div>
    </Card>
  );
}
