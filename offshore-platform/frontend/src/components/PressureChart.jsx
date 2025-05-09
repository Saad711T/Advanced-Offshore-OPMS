import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const dummyData = [
  { time: '10:00', pressure: 45 },
  { time: '10:05', pressure: 48 },
  { time: '10:10', pressure: 46 },
  { time: '10:15', pressure: 47 }
];

function PressureChart() {
  return (
    <LineChart width={600} height={300} data={dummyData}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pressure" stroke="#8884d8" />
    </LineChart>
  );
}

export default PressureChart;
