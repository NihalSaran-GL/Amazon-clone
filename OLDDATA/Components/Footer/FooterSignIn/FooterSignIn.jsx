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
          <div className="amazonbutton">
            <Link to='/signin'>
              <span> Sign In </span>
            </Link>
          </div>
        </div>
        <div>
          <span>New customers?</span>
          <Link to='/signup' id='span2'>
            Start here.
          </Link>
        </div>
      </div>
      <hr />
    </div>
  )
}
