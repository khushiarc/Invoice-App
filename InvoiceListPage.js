import React, { useState } from 'react';
import InvoiceModal from './InvoiceModal'; // Adjust path as needed

const InvoiceListPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const handleSaveInvoice = (newInvoice) => {
    // For now, just add to local state
    setInvoices([...invoices, newInvoice]);
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Invoices</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Create Invoice
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{inv.client}</td>
              <td>₹ {inv.amount}</td>
              <td>{inv.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <InvoiceModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveInvoice}
      />
    </div>
  );
};

export default InvoiceListPage;
