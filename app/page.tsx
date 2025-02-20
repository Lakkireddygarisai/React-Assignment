"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import GeoLocation from "@/components/GeoLocation";
import Endpoint from "@/components/Endpoint";
import Risk from "@/components/Risk";
import VulnerabilityChart from "@/components/VulnerabilityChart";
import InternetFacingServicesChart from "@/components/InternetFacingServicesChart";

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState("vulnerability");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "geolocation":
        return <GeoLocation />;
      case "endpoint":
        return <Endpoint />;
      case "risk":
        return <Risk />;
      case "internet-services":
        return <InternetFacingServicesChart />;
      default:
        return <VulnerabilityChart />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelect={setSelectedComponent} />
      <div style={{ flex: 1, padding: "20px" }}>{renderComponent()}</div>
    </div>
  );
};

export default Page;
