import React from "react";
import RiskOverview from "../components/RiskOverview";
import RiskChart from "../components/RiskChart";

const Risk: React.FC = () => {
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0px",
          alignItems: "flex-start",
          width: "80%", 
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            flex: 1, 
            background: "#1e1e1e",
            padding: "20px",
            borderRadius: "10px",
            minHeight: "400px", 
          }}
        >
          <RiskOverview score={49} />
        </div>
        <div
          style={{
            flex: 1,
            background: "#1e1e1e",
            padding: "20px",
            borderRadius: "10px",
            minHeight: "400px", 
          }}
        >
          <RiskChart />
        </div>
      </div>
    </div>
  );
};

export default Risk;
