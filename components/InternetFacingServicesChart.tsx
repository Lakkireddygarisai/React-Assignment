"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["12-26", "12-30", "12-31", "01-17", "01-21"],
  datasets: [
    {
      label: "Unique unexpected services/ports",
      data: [1, 0.8, 0, 0, 0],
      borderColor: "#ffffff",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      pointRadius: 4,
    },
    {
      label: "Total public IPs affected",
      data: [0, 0, 0, 0, 0],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      pointRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

export default function InternetFacingServicesChart() {
  return (
    <div style={{ background: "#141414", padding: "20px", borderRadius: "8px", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, fontSize: "16px" }}>UNEXPECTED INTERNET-FACING SERVICES/PORTS</h3>
        <button style={{ background: "#333", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}>View Details</button>
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "24px" }}>0</h2>
          <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Unique unexpected services/ports</p>
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: "24px" }}>0</h2>
          <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Total public IPs affected</p>
        </div>
      </div>
      <div style={{ marginTop: "20px", width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "100%", maxWidth: "600px", height: "100%" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
