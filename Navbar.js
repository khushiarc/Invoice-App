import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <Link className="navbar-brand" to="/dashboard">
        InvoiceApp
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Home Page</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/clients">Clients</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/invoices">Invoices</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
