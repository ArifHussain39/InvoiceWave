import React, { useState } from 'react';

const InvoiceForm = ({ onSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerName, amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer Name:
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <button type="submit">Generate Invoice</button>
    </form>
  );
};

export default InvoiceForm;
