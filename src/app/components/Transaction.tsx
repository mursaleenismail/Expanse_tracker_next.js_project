import React from 'react';

interface TransactionData {
    id: number;
    text: string;
    amount: number;
  }

export const Transaction = ({ transaction }: { transaction: TransactionData }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

