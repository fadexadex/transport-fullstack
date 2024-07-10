import React from 'react';
;

const RecentTransactions = ({ transactions }) => {
  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <div className="transaction-details">
              <p>{transaction.title}</p>
              <p>$100</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
