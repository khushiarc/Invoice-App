import React, { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
  e.preventDefault();
  setError('');
  try {
    const res = await API.post('/auth/login', { email, password });
    const { token } = res.data;

    // ✅ Store token in localStorage
    localStorage.setItem('authToken', token);

    // ✅ Redirect to dashboard
    navigate('/dashboard');
  } catch (err) {
    console.error(err);
    setError(err.response?.data?.msg || 'Login failed');
  }
};



  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        
        <button className="btn soft-purple w-100 mt-3" onClick={() => navigate('/Login')}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
