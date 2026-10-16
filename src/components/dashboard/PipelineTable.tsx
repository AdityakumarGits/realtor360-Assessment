import { Card } from "../common/Card";
import { pipelineData } from "../../data/mockData";

export function PipelineTable() {
  return (
    <Card title="Deals in Pipeline by Development" className="h-[350px]">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#f4f6f8] text-left">
            <th className="rounded-l-md px-3 py-2 font-medium">
              Development Name
            </th>
            <th className="rounded-r-md px-3 py-2 text-right font-medium">
              Record Count
            </th>
          </tr>
        </thead>
        <tbody>
          {pipelineData.map((item) => (
            <tr key={item.name}>
              <td className="px-3 py-3 text-neutral-700">{item.name}</td>
              <td className="px-3 py-3 text-right text-neutral-700">
                {item.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
