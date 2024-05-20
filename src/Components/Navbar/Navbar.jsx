import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IndianFlag from '../../assets/indianflag.webp'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


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
            <input type="text" placeholder="Search Amazon.in" />
            <div className="searchbox">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="lang">
            <img src={IndianFlag} />
            <span>IN</span>
            <ArrowDropDownIcon className='di' />
          </div>
          <div className="navbar__links">
            <a href="#">
              <span>Hello, sign in</span>
              <div>
                <span>Account & Lists </span>
                <ArrowDropDownIcon className='di' />
              </div>
            </a>
            <a href="#">
              <span>Returns</span>
              <div>
                <span>& orders</span>
              </div>
            </a>
            <a className='cartParent' href="#">
              <AddShoppingCartOutlinedIcon/>
              <div  className='cart'>
                <span>Cart</span>
              </div>
            </a>
          </div>
        </div>
      </div>

    </>

  );
}

export default Navbar;