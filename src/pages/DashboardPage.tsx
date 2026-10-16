import { metrics } from "../data/mockData";
import { MetricCard } from "../components/dashboard/MetricCard";
import { LeadSourceChart } from "../components/dashboard/LeadSourceChart";
import { StageChart } from "../components/dashboard/StageChart";
import { SalesPeopleChart } from "../components/dashboard/SalesPeopleChart";
import { PipelineTable } from "../components/dashboard/PipelineTable";
import { TotalDealsCard } from "../components/dashboard/TotalDealsCard";
import { RemindersCard } from "../components/dashboard/RemindersCard";
import { CalendarCard } from "../components/dashboard/CalendarCard";

export function DashboardPage() {
  return (
    <div className="grid grid-cols-1 items-start gap-4 2xl:grid-cols-[minmax(0,1fr)_310px]">
      <div className="min-w-0 space-y-4">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </section>
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <LeadSourceChart />
          <StageChart />
          <div className="space-y-4">
            <SalesPeopleChart />
            <TotalDealsCard />
          </div>
          <PipelineTable />
        </section>
      </div>
      <aside className="space-y-4">
        <RemindersCard />
        <CalendarCard />
      </aside>
    </div>
  );
}
