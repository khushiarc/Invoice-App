import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const InvoiceModal = ({ show, handleClose, handleSave }) => {
  const [client, setClient] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const onSave = () => {
    handleSave({ client, amount, date });
    setClient('');
    setAmount('');
    setDate('');
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Client</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter client name"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={onSave}>Save Invoice</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvoiceModal;
