import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [crossings, setCrossings] = useState([]);

  const handleAddCrossing = () => {
    // This will be implemented later with actual functionality
    console.log('Adding new crossing...');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>My Train Crossings</h2>
        <button className="add-button" onClick={handleAddCrossing}>
          Add New
        </button>
      </div>
      
      <div className="crossings-list">
        {crossings.length === 0 ? (
          <p className="empty-message">No crossings added yet</p>
        ) : (
          crossings.map((crossing, index) => (
            <div key={index} className="crossing-item">
              <h3>{crossing.name}</h3>
              <p>{crossing.location}</p>
            </div>
          ))
        )}
      </div>

      <div className="alerts-section">
        <h3>Active Alerts</h3>
        <div className="alerts-list">
          <p className="empty-message">No active alerts</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar; 