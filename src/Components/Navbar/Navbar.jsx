import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Navbottom from './navbottom/navbottom';
import './Navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IndianFlag from '../../assets/indianflag.webp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Amazonlogo from '../../../src/assets/Logo.png'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="navbar__logo">
            {/* Use Link for routing */}
            <Link to="/">
            <img src={Amazonlogo} />

            </Link>
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
            {/* Use Link for routing */}
            <Link to="/signin">
              <span>Hello, sign in</span>
              <div>
                <span>Account & Lists </span>
                <ArrowDropDownIcon className='di' />
              </div>
            </Link>
            {/* Adjust other links accordingly */}
            <Link to="/returns">
              <span>Returns</span>
              <div>
                <span>& orders</span>
              </div>
            </Link>
            <Link to="/product" className='cartParent'>
              <AddShoppingCartOutlinedIcon/>
              <div  className='cart'>
                <span>Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Navbottom />
    </>
  );
}

export default Navbar;
