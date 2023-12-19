import React from 'react';

const Invoice = ({ invoiceData }) => {
  return (
    <div>
      <h2>Generated Invoice</h2>
      <p>Customer Name: {invoiceData.customerName}</p>
      <p>Amount: {invoiceData.amount}</p>
    </div>
  );
};

export default Invoice;
