// src/api.js
const data = {
    Q1: { revenue: "716.57 B", netIncome: "154.77 B", netProfit: "21.60%", operatingIncome: "213.55 B" },
    Q2: { revenue: "607.66 B", netIncome: "180.94 B", netProfit: "29.78%", operatingIncome: "149.95 B" },
    Q3: { revenue: "711.87 B", netIncome: "185.37 B", netProfit: "26.04%", operatingIncome: "252.08 B" },
    Q4: { revenue: "805.33 B", netIncome: "161.00 B", netProfit: "19.99%", operatingIncome: "219.36 B" },
  };
  
  export const getMetrics = (quarter) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data[quarter] || {});
      }, 500);
    });
  };
  