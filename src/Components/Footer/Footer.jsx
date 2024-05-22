import React from 'react'
import './Footer.css'
import { FooterBottom } from './FooterBottom/FooterBottom';
import { FooterSignIn } from './FooterSignIn/FooterSignIn'

function Footer() {
  return (
    <>
      <FooterSignIn />
      <div className='FooterContainer'>
        <div className="topFooter">Back to top</div>
        <div className="footer">
          <div className='footer-titles-container'>
            <div className="titles">
              <h3>Get to Know Us</h3>
              <div>About Us</div>
              <div>Careers</div>
              <div>Press Releases</div>
              <div>Amazon Science</div>
            </div>
            <div className="titles">
              <h3>Connect with Us</h3>
              <div>Facebook</div>
              <div>Twitter</div>
              <div>Instagram</div>
            </div>
            <div className="titles">
              <h3>Make money with Us</h3>
              <div>Sell on Amazon</div>
              <div>Sell under Amazon accelerator</div>
              <div>Protect and Build Your Brand</div>
              <div>Amazon Global Selling</div>
              <div>Become an Affillate</div>
              <div>Fulfilment by Amazon</div>
              <div>Advertise your Products</div>
              <div>Amazon Pay on Merchants</div>
            </div>
            <div className="titles">
              <h3>Let us Help You</h3>
              <div>COVID-19 and Amazon</div>
              <div>Your Account</div>
              <div>Returns Center</div>
              <div>100% Purchase Protection</div>
              <div>Amazon App Download</div>
              <div>Help</div>
            </div>
          </div>
          <hr />
          <div className="bottomFooter"></div>
        </div>
      </div>
      <FooterBottom />
    </>
  )
}

export default Footer;
