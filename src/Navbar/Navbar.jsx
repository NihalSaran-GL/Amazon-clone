// Navbar.jsx
import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="navbar__logo">
            <img src="src/assets/Logo.png" alt="Amazon Logo" />
          </div>
          <div className="navbar__deliver-to">
            <span>
              <div></div>
              <span>Deliver to</span>
            </span>
            <div>
              <LocationOnOutlinedIcon />
              <span className="navbar__deliver-to-country">India</span>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="navbar__search">
            <div className="box">
              <span>All</span>
              <ArrowDropDownIcon />
            </div>
            <input type="text" placeholder="Search..." />
            <div className="searchbox">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="rinavbottom
navbottomght">
          <div className="lang"><FlagIcon /></div>
          <div className="navbar__links">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
      
    </>

  );
}

export default Navbar;