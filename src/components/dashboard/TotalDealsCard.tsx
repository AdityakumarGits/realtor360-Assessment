import { Card } from "../common/Card";

export function TotalDealsCard() {
  return (
    <Card title="Total Deals Closed" className="h-[150px]">
      <div className="h-10 overflow-hidden rounded-xl bg-neutral-100">
        <div className="h-full w-[42%] rounded-xl bg-gradient-to-r from-brand to-[#f0e5bd]" />
      </div>
      <div className="mt-1 flex justify-between text-sm text-neutral-500">
        <span>
          <strong className="mr-2 text-2xl font-semibold text-neutral-800">
            42
          </strong>
          Closed Deals
        </span>
        <span>
          <strong className="mr-2 text-2xl font-semibold text-neutral-800">
            132
          </strong>
          On Progress
        </span>
      </div>
    </Card>
  );
}
