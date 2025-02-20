# Dashboard Project Setup

## Overview

This project is a web application built with Next.js and React that provides various data visualizations using Chart.js and Leaflet maps. It includes interactive charts and maps to display endpoint risks, geolocation data, and vulnerabilities.

## Features

- Interactive Doughnut charts for endpoint risks and vulnerabilities.
- Geolocation-based heatmaps using Leaflet and leaflet.heat.
- Sidebar navigation for easy access to different sections.
- Responsive design for optimal user experience.

## Project Structure

```
project-root/
│── components/           # Reusable React components
│   ├── Endpoint.js       # Displays endpoint risk data
│   ├── GeoLocation.js    # Renders geolocation-based maps
│   ├── Risk.js           # Shows risk distribution using charts
│   ├── VulnerabilityChart.js  # Displays vulnerability trends
│   ├── Sidebar.js        # Navigation sidebar
│── pages/                # Next.js page components
│── public/               # Static assets
│── styles/               # CSS styles
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

## Setup Instructions

## Prerequisites
Make sure you have the following installed before proceeding:
- **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

## Clone the Repository
To get a local copy of the project, run:

```sh
git clone https://github.com/Lakkireddygarisai/React-Assignment.git
cd React-Assignment
```

## Install Dependencies
Once inside the project directory, install the required packages:

```sh
npm install
# or
yarn install
# or
pnpm install
```

## Start the Development Server
Run the following command to start the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Build for Production
To build the project for production, use:

```sh
npm run build
# or
yarn build
# or
pnpm build
```

## Start the Production Server
After building, start the production server using:

```sh
npm run start
# or
yarn start
# or
pnpm start
```

## Environment Variables
Create a `.env.local` file and add necessary environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Additional Scripts
- `lint` - Run ESLint
  ```sh
  npm run lint
  ```
- `test` - Run tests
  ```sh
  npm run test
  ```

## Charts Implemented

### Endpoint Risk Chart

- Uses `react-chartjs-2` to display endpoint risk distributions.
- Configured with custom colors and legend styling.
- Data fetched dynamically from backend APIs.

### Vulnerability Chart

- Displays vulnerability trends over time using `Doughnut` charts.
- Customizable tooltips and legend options.

### Geolocation Heatmap

- Implements `react-leaflet` with `leaflet.heat`.
- Dynamically plots heat intensity based on real-time geolocation data.
- Uses OpenStreetMap tiles for visualization.
