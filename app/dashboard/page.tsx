import ChartWrapper from "../../components/ChartWrapper";
import FilterInput from "../../components/FilterInput";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>
      <FilterInput />
      <ChartWrapper />
    </div>
  );
}
