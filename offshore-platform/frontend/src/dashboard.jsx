import React from 'react';
import Navbar from '../components/nav';
import PressureChart from '../components/PressureChart';

function dashboard() {
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: 'center' }}>Pressure Monitoring</h2>
      <PressureChart />
    </div>
  );
}

export default dashboard;



