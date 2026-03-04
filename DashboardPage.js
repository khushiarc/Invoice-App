import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css'; 

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3 amethyst-heading">Welcome to the Invoice App</h2>
      <p className="text-center text-muted">Please register if you're new or login if you already have an account.</p>

      <div className="row justify-content-center mt-5 gap-4">
        <div className="col-md-5">
          <div className="card fancy-card">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">New Here?</h5>
              <p className="card-text">Create a new account to get started with the invoice system.</p>
              <button className="btn soft-purple w-100 mt-3" onClick={() => navigate('/register')}>Register</button>

            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card fancy-card">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Already Registered?</h5>
              <p className="card-text">Login to your account and manage invoices and clients.</p>
              <button className="btn soft-purple w-100 mt-3" onClick={() => navigate('/login')}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
