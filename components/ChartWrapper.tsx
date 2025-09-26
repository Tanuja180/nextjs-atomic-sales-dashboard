"use client";
import { useState } from "react";
import SalesChart from "./SalesChart";
import salesData from "../data/sales";

export default function ChartWrapper() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState<number>(0);

  const filteredData = salesData.filter((d) => d.sales >= threshold);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setChartType("bar")}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          Bar
        </button>
        <button
          onClick={() => setChartType("line")}
          className="px-3 py-1 rounded bg-green-500 text-white"
        >
          Line
        </button>
        <button
          onClick={() => setChartType("pie")}
          className="px-3 py-1 rounded bg-purple-500 text-white"
        >
          Pie
        </button>
      </div>
      <SalesChart data={filteredData} chartType={chartType} />
    </div>
  );
}
