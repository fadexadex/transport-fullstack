import React from 'react';

const Summary = () => {
  return (
    <div className="summary">
      <div className="summary-card">
        <h2>Total Payments</h2>
        <p>$10,000</p>
      </div>
      <div className="summary-card">
        <h2>Pending Payments</h2>
        <p>$2,500</p>
      </div>
      <div className="summary-card">
        <h2>Completed Payments</h2>
        <p>$7,500</p>
      </div>
    </div>
  );
};

export default Summary;
