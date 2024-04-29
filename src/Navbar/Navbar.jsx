// Navbar.jsx
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import FlagIcon from '@mui/icons-material/Flag';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="src/assets/Logo.png" alt="Amazon Logo" />
      </div> 
      <div className="navbar__deliver-to">
      <LocationOnIcon/>
        Deliver to: 
        <span className="navbar__deliver-to-country">United States</span>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <div className="searchbox">
        <SearchIcon/>
        </div>
        
      </div>
      <div className="lang"><FlagIcon/></div>
      <div className="navbar__links">
        
        
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        {/* Add more links as needed */}
      </div>
      
    </div>
  );
}

export default Navbar;
