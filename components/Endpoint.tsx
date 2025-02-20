"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Windows", "macOS", "Linux", "No Security Agent"],
  datasets: [
    {
      data: [16, 1, 5, 7],
      backgroundColor: ["#007bff", "#00c49f", "#8884d8", "#a8a8a8"],
      hoverBackgroundColor: ["#0056b3", "#008f72", "#6757a7", "#7f7f7f"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#ffffff'
      }
    }
  },
};

const Endpoint = () => {
  return (
    <div style={{ padding: '40px', minHeight: '100vh', backgroundColor: '#1a1a1a', color: '#ffffff', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Endpoint Protection</h1>
      
      {/* Main Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px', backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
        {/* Top Section with Inline Styles */}
        <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '16px' }}>22 / 29 Agents Deployed</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '164px' }}>
          {/* Doughnut Chart */}
          <div style={{ width: '300px', height: '300px' }}>
            <Doughnut data={data} options={options} />
          </div>

          {/* Statistics List */}
          <div style={{ textAlign: 'left', flex: 1 }}>
            <p style={{ margin: '8px 0' }}><span style={{ color: '#007bff' }}>● Windows:</span> 16 (55.2%)</p>
            <p style={{ margin: '8px 0' }}><span style={{ color: '#00c49f' }}>● macOS:</span> 1 (3.4%)</p>
            <p style={{ margin: '8px 0' }}><span style={{ color: '#8884d8' }}>● Linux:</span> 5 (17.2%)</p>
            <p style={{ margin: '8px 0' }}><span style={{ color: '#a8a8a8' }}>● No Security Agent:</span> 7 (24.2%)</p>
          </div>
        </div>
        
        {/* Table with Inline Styles */}
        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#3d3d3d', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Agent Statistics</h2>
          <table style={{ width: '100%', textAlign: 'left', color: '#ffffff', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #4d4d4d', padding: '8px' }}>OS</th>
                <th style={{ borderBottom: '1px solid #4d4d4d', padding: '8px' }}>Standard Protection</th>
                <th style={{ borderBottom: '1px solid #4d4d4d', padding: '8px' }}>Server Protection</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>Windows</td>
                <td style={{ padding: '8px' }}>12</td>
                <td style={{ padding: '8px' }}>5</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>macOS</td>
                <td style={{ padding: '8px' }}>1</td>
                <td style={{ padding: '8px' }}>0</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Linux</td>
                <td style={{ padding: '8px' }}>0</td>
                <td style={{ padding: '8px' }}>5</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Active Agents</td>
                <td style={{ padding: '8px' }}>13</td>
                <td style={{ padding: '8px' }}>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Endpoint;