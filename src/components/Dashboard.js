
import React, { useState } from "react";
import { getMetrics } from "../api";


const quarters = ["Q1", "Q2", "Q3", "Q4"];

const Dashboard = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(quarters[0]);
  const [metrics, setMetrics] = useState({});

  const fetchMetrics = async () => {
    const result = await getMetrics(selectedQuarter);
    setMetrics(result);
  };

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
  };

  return (
    <div>
        
      <h1>SBI Dashboard</h1>
      <label>Select Quarter: </label>
      <select value={selectedQuarter} onChange={handleQuarterChange}>
        {quarters.map((quarter) => (
          <option key={quarter} value={quarter}>
            {quarter}
          </option>
        ))}
      </select>
      <button onClick={fetchMetrics}>Fetch Metrics</button>
      <div>
        <h2>Metrics for {selectedQuarter}</h2>
        <div>Revenue: {metrics.revenue}</div>
        <div>Net Income: {metrics.netIncome}</div>
        <div>Net Profit: {metrics.netProfit}</div>
        <div>Operating Income: {metrics.operatingIncome}</div>
      </div>
    </div>
  );
};

export default Dashboard;
