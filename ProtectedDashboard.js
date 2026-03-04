import React from 'react';
import Navbar from '../components/Navbar';

const ProtectedDashboard = () => {
  return (
   <>

     <Navbar />
    <div className="container mt-5">
      <h2 className="text-success">Welcome! You are logged in.</h2>
      <p className="lead">Here you'll manage clients, invoices, and more.</p>
      <button
  className="btn btn-outline-danger mt-3"
  onClick={() => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }}
>
  Logout
</button>

    </div>
    </>
  );
};

export default ProtectedDashboard;
