"use client";
import { useState } from "react";

export default function FilterInput() {
  const [threshold, setThreshold] = useState(0);

  return (
    <div className="mb-4">
      <label className="mr-2">Sales Threshold:</label>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="border rounded px-2 py-1"
      />
    </div>
  );
}
