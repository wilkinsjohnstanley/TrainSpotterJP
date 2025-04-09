import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Train Spotter Japan</h1>
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#alerts" className="nav-link">My Alerts</a>
        <a href="#settings" className="nav-link">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar; 