import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import InvoiceForm from './components/InvoiceForm';
import Invoice from './components/Invoice';

function App() {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleGenerateInvoice = (data) => {
    setInvoiceData(data);
  };

  return (
    <div className="App">
      <h1>Invoice Generator</h1>
      <InvoiceForm onSubmit={handleGenerateInvoice} />
      {invoiceData && <Invoice invoiceData={invoiceData} />}
    </div>
  );
}

export default App;
