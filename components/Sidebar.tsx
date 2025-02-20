"use client";

import React, { useState } from "react";

const Sidebar = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div style={{ display: "flex", height: "100vh",minHeight: '100vh' }}>
      <div
        style={{
          width: isOpen ? "250px" : "50px",
          background: "#333",
          color: "white",
          padding: "10px",
          transition: "width 0.3s",
          overflowX: "hidden",
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            background: "#444",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          {isOpen ? "Close" : "☰"}
        </button>
        {isOpen && (
          <ul style={{ listStyle: "none", padding: "10px"  }}>
            <li onClick={() => onSelect("vulnerability")} style={{ padding: "8px", cursor: "pointer" }}>Vulnerability</li>
            <li onClick={() => onSelect("internet-services")} style={{ padding: "8px", cursor: "pointer" }}>Internet Services</li>
            <li onClick={() => onSelect("geolocation")} style={{ padding: "8px", cursor: "pointer" }}>GeoLocation</li>
            <li onClick={() => onSelect("endpoint")} style={{ padding: "8px", cursor: "pointer" }}>Endpoint</li>
            <li onClick={() => onSelect("risk")} style={{ padding: "8px", cursor: "pointer" }}>Risk</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
