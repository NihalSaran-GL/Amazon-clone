// Navbar.jsx
import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import FlagIcon from '@mui/icons-material/Flag';
import styled from 'styled-components';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="src/assets/Logo.png" alt="Amazon Logo" />
      </div> 
      <div className="navbar__deliver-to">
      <LocationOnOutlinedIcon/>
        Deliver to
        <span className="navbar__deliver-to-country">India</span>
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
