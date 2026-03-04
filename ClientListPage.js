import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

import API from '../api/axios';

const ClientListPage = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchClients = async () => {
    const res = await API.get('/clients');
    setClients(res.data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleAddOrUpdate = async () => {
    if (editingId) {
      await API.put(`/clients/${editingId}`, { name });
    } else {
      await API.post('/clients', { name });
    }
    setName('');
    setEditingId(null);
    fetchClients();
  };

  const handleDelete = async id => {
    await API.delete(`/clients/${id}`);
    fetchClients();
  };

  const startEdit = client => {
    setName(client.name);
    setEditingId(client.id);
  };

  return (
   <>

     <Navbar />
    <div className="container mt-5">
      <h2 className="mb-4">Clients</h2>

      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          placeholder="Client Name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddOrUpdate}>
          {editingId ? 'Update' : 'Add'}
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => startEdit(client)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
};

export default ClientListPage;
