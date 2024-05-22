import React from 'react'
import './FooterSignIn.css'
import { Link } from 'react-router-dom'

export const FooterSignIn = () => {
  return (
    <div className="footerSignIn-container">
      <hr style={{ color: 'red' }} />
      <div>
        <div>See personalized recommendations</div>
        <div className="mehrcontainer">
          <a href="">
            <div className="amazonbutton">
              <Link to='/signin'>
                <span> Sign In </span>
              </Link>
            </div>
          </a>
        </div>
        <div>
          <span>New customers?</span>
          <Link to='/signup'>
            <a href='' id='span2'>Start here.</a>
          </Link>
        </div>
      </div>
      <hr />
    </div >
  )
}
