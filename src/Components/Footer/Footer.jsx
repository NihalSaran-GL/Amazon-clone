import React from 'react'
import './Footer.css'
import { FooterBottom } from './FooterBottom/FooterBottom';
import { FooterSignIn } from './FooterSignIn/FooterSignIn'

export const Footer = () => {
  return (
    <>
      <FooterSignIn />
      <div className='FooterContainer'>
        <div className="topFooter"></div>
        <div className="footer"></div>
      </div>
      <FooterBottom />
    </>
  )
}
