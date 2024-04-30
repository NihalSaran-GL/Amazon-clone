import React from 'react'
import './navbottom.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { margin } from '@mui/system';


function Navbottom() {
  return (
    <div className='navbt'>
  <div className='dpall2'>
        <MenuIcon id='wa' /> 
        <span>All</span>
      </div>
      
      <span>fresh</span>
      <span>Amazon miniTV</span>
      <span>sell</span>
      <span>Best Seller</span>
      <span>Mobiles</span>
      <span>Todays Deal</span>
      <div className='dpall'>
      <span>Prime</span>
        <ArrowDropDownIcon id='aw'/> 
      </div>
      <span>Customer Service</span>
      <span>Electronics</span>
      <span>New Releases</span>
      <span>Home & Kitchen</span>
      <span>Fashion</span>
      <span>Amzon Pay</span>
      <span>Gift Ideas</span>
      <span>Computers</span>
      <span>Books</span>
      <span>Car & Motorbike</span>
      <span>Home Improvment</span>

    </div>
  );

}
export default Navbottom;
