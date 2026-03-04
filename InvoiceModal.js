import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const InvoiceModal = ({ show, handleClose }) => {
  const [clientId, setClientId] = useState('');
  const [amount, setAmount] = useState('');
  const [item, setItem] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [itemList, setItemList] = useState([]);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // Sample item list – replace with API call if available
  useEffect(() => {
    const fetchItems = async () => {
      // Uncomment below if using backend API
      // const res = await API.get('/items');
      // setItemList(res.data);
      
      setItemList([
        { name: 'Ultrasonic Generator', price: 15000 },
        { name: 'Face Mask Roller Die', price: 9000 },
        { name: 'Ultrasonic Welding SPM', price: 25000 },
        { name: 'Repairing and Maintenance Service', price: 5000 }
      ]);
    };
    fetchItems();
  }, []);

  // Match transcript with items
  useEffect(() => {
    const matchedItem = itemList.find(itemObj =>
      transcript.toLowerCase().includes(itemObj.name.toLowerCase().split(' ')[0])
    );

    if (matchedItem) {
      setItem(matchedItem.name);
      setAmount(matchedItem.price);
    }
  }, [transcript, itemList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInvoice = {
      item,
      clientId,
      amount,
      dueDate
    };

    try {
      await API.post('/invoices', newInvoice);
      alert('Invoice created successfully!');
      handleClose();
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">
      <div className="modal-dialog">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header bg-purple text-white">
              <h5 className="modal-title">Create Invoice</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>

            <div className="modal-body">
              {/* Client ID */}
              <div className="mb-3">
                <label htmlFor="clientId">Client ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="clientId"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  required
                />
              </div>

              {/* Item Dropdown */}
              <div className="mb-3">
                <label htmlFor="item">Item</label>
                <select
                  className="form-select"
                  id="item"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  required
                >
                  <option value="">-- Select an Item --</option>
                  {itemList.map((option, index) => (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div className="mb-3">
                <label htmlFor="amount">Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              {/* Due Date */}
              <div className="mb-3">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>

              {/* Speech Input */}
  

              <div className="mb-3">
                <label>🎤 Voice Input for Item Name</label>
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-outline-primary" onClick={SpeechRecognition.startListening}>
                    Start Listening
                  </button>
                  <button type="button" className="btn btn-outline-danger" onClick={SpeechRecognition.stopListening}>
                    Stop
                  </button>
                  <button type="button" className="btn btn-outline-dark" onClick={resetTranscript}>
                    Reset
                  </button>
                  <span className={`ms-3 badge ${listening ? 'bg-success' : 'bg-secondary'}`}>
                    {listening ? 'Listening...' : 'Not Listening'}
                  </span>
                </div>
                <p className="mt-2"><strong>Transcript:</strong> {transcript}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-purple">Save Invoice</button>
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceModal;
