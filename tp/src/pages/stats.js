import React from 'react';


const Statistics = () => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Monthly Revenue</h3>
          <p>$5,000</p>
        </div>
        <div className="stat-card">
          <h3>New Customers</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Transactions</h3>
          <p>75</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
