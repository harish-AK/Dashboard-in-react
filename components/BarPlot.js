import React from 'react';
// import './BarPlot.css';
import { BarChart, Bar, XAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';


const Graph2 = () => {
  const data = [
    { sprintHistory: 240 },
    { sprintHistory: 220 },
    { sprintHistory: 290 },
    { sprintHistory: 200 },
    { sprintHistory: 181 },
    { sprintHistory: 500 },
    { sprintHistory: 100 },
    { sprintHistory: 210 },
  ];

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="sprintHistory" fill="#9B870C" />
    </BarChart>
  );
};


const Graph1 = () => {
  const data = [
    { performance: 320 },
    { performance: 290 },
    { performance: 250 },
    { performance: 210 },
    { performance: 180 },
    { performance: 140 },
    { performance: 100 },
    { performance: 60 },
  ];

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="performance" fill="#FFB6C1" />
    </BarChart>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const dataPie = [
  { name: 'weekly score', value: 75 },
  { name: 'balance', value: 25 },
];

const PieChartComp = () => {
  return (
    <PieChart width={500} height={300}>
      <Pie
        data={dataPie}
        cx={200}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {dataPie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

const BarPlotsContainer = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Graph2 />
      <Graph1 />
      <PieChartComp />
    </div>
  );
};

export default BarPlotsContainer;
