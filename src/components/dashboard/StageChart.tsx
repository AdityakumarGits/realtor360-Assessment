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
import { stageData } from "../../data/mockData";

export function StageChart() {
  return (
    <Card title="Deals by Stages by Development" className="h-[350px]">
      <ResponsiveContainer width="100%" height="88%">
        <BarChart
          data={stageData}
          margin={{ top: 4, right: 4, left: -16, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis
            dataKey="stage"
            angle={-35}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 10, fill: "#666" }}
            height={55}
          />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar
            dataKey="plaza"
            name="Angel Plaza"
            stackId="a"
            fill="#d9b32e"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="garden"
            name="Angel Garden"
            stackId="a"
            fill="#efdfa8"
          />
          <Bar dataKey="none" name="None" stackId="a" fill="#f6efd7" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
