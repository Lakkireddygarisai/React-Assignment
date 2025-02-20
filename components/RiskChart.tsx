"use client";  
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const RiskChart: React.FC = () => {
  const data = {
    labels: ["2024-08", "2024-09", "2024-10", "2024-11", "2024-12", "2025-01"],
    datasets: [
      {
        label: "Risk Score",
        data: [30, 55, 50, 48, 52, 49],
        borderColor: "#ffcc00",
        backgroundColor: "rgba(255, 204, 0, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.2)" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "white" },
      },
    },
  };

  return (
    <div
      style={{
        background: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};
export default RiskChart;
