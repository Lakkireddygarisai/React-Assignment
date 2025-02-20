"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import countryData from "@/data/countryCoordinates"; // Assuming a data file for coordinates

interface HeatmapProps {}

const Heatmap: React.FC<HeatmapProps> = () => {
  const HeatLayer = () => {
    const map = useMap();

    useEffect(() => {
      if (map) {
        countryData.forEach((country) => {
          const { lat, lng, name } = country;

          // Add circle marker for each country
          const marker = L.circleMarker([lat, lng], {
            radius: 5,
            color: "#70b363",
            weight: 1,
            fillColor: "orange",
            fillOpacity: 30,
          });

          marker.addTo(map);

          // Show country name on click
          marker.on("click", () => {
            marker.bindPopup(`<b>${name}</b>`).openPopup();
          });
        });
      }
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      className="w-full h-full"
      style={{ height: "100vh", backgroundColor: "#090909" }}
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      <HeatLayer />
    </MapContainer>
  );
};

export default Heatmap;
