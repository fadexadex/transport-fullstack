import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './dash.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your data fetching logic
    axios.get('https://127.0.0.1:8090/api/collections/logistics/records')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalRevenue = data.reduce((sum, item) => sum + item.amount, 0);
  const totalTransactions = data.length;
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Payments',
        data: data.map(item => item.amount),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Driver Dashboard</h1>
      <div className="metrics">
        <div className="metric">
          <h2>Total Revenue made</h2>
          <p>${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="metric">
          <h2>Total Transactions done</h2>
          <p>{totalTransactions}</p>
        </div>
      </div>
      <div className="chart">
        <Pie data={chartData} />
      </div>
      <div className="transactions">
        <h2>Recent Trips</h2>
        <ul>
          {data.slice(0, 10).map(item => (
            <li key={item.id}>
              <span>{item.date}</span>
              <span>${item.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
