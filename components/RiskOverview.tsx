import React from "react";

interface RiskOverviewProps {
  score: number;
}

const RiskOverview: React.FC<RiskOverviewProps> = ({ score }) => {
  return (
    <div
      style={{
        background: "#1e1e1e",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>RISK OVERVIEW</h2>
      <p style={{ fontSize: "40px", fontWeight: "bold", color: "#ffcc00" }}>
        {score} <span style={{ fontSize: "18px" }}>/100</span>
      </p>
      <p style={{ color: "#ffcc00" }}>Medium risk</p>

      <button
        style={{
          background: "#333",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Cyber Risk Subindexes
      </button>

      <div style={{ marginTop: "10px" }}>
        <p style={{ color: "#a970ff" }}>● Exposure: <span>Medium</span></p>
        <p style={{ color: "#ff4d4d" }}>● Attack: <span>Medium</span></p>
        <p style={{ color: "#ff66b2" }}>● Security Configuration: <span>Medium</span></p>
      </div>

      <button
        style={{
          background: "#333",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Risk Event Overview
      </button>
    </div>
  );
};

export default RiskOverview;
