"use client";

import React, { useRef } from "react";
import Heatmap from "./Heatmap";
import { MapContainer } from "react-leaflet";
import L from "leaflet";

interface HeatmapWithZoomProps {
  points: [number, number, number][];
}

const HeatmapWithZoom: React.FC<HeatmapWithZoomProps> = ({ points }) => {
  const mapRef = useRef<L.Map | null>(null);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() - 1);
    }
  };

  return (
    <div className="relative">
      <MapContainer ref={mapRef} center={[20, 0]} zoom={2} style={{ height: "100vh", width: "100%" }}>
        <Heatmap points={points} />
      </MapContainer>
      <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
        <button
          onClick={handleZoomIn}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default HeatmapWithZoom;
