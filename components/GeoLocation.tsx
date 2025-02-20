"use client";

import React from "react";
import Heatmap from "./Heatmap"; // Import the Heatmap component

const GeoLocation: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Heading in top-left corner */}
      <h1 className="text-center text-3xl font-bold py-4">Geolocation Heatmap</h1>
      

      {/* Importing Heatmap component */}
      <Heatmap />
    </div>
  );
};

export default GeoLocation;
