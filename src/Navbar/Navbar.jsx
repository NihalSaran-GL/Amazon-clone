// Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="https://via.placeholder.com/150" alt="Amazon Logo" />
      </div>
      <div className="navbar__links">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        {/* Add more links as needed */}
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
