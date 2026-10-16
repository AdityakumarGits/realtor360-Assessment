import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../common/Card";
import { salesPeopleData } from "../../data/mockData";

export function SalesPeopleChart() {
  return (
    <Card title="Deals by Sales People by Development" className="h-[260px]">
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={salesPeopleData}
          layout="vertical"
          margin={{ left: 0, right: 6, top: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="0" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11 }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11 }}
            width={62}
          />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="plaza" name="Angel Plaza" stackId="a" fill="#d9b32e" />
          <Bar
            dataKey="garden"
            name="Angel Garden"
            stackId="a"
            fill="#efdfa8"
          />
          <Bar
            dataKey="none"
            name="None"
            stackId="a"
            fill="#f6efd7"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
