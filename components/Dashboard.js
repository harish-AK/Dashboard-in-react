import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [data] = useState([
    { label: 'Total Models', value: 3000 },
    { label: 'Total 3D Rooms', value: 30 },
    { label: 'Weekly Best', value: 30 },
    { label: 'Sprint Best', value: 30 },
    { label: 'Total Hours', value: 2000 }
  ]);

  return (
    <div className="dashboard">
      <h1>Here is your progress</h1>
      <div className="dashboard-cards">
        {data.map(item => (
          <div className="card" key={item.label}>
            <h2>{item.label}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
