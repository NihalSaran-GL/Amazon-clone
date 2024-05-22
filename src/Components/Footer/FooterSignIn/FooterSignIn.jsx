import React from 'react'
import './FooterSignIn.css'

export const FooterSignIn = () => {
  return (
    <div className="footerSignIn-container">
      <hr style={{ color: 'red' }} />
      <div>
        <div>See personalized recommendations</div>
        <div className="mehrcontainer">
          <a href="">
            <div className="amazonbutton">
              <span> Sign In </span>
            </div>
          </a>
        </div>
        <div>
          <span>New customers?</span>
          <span id='span2'>Start here.</span>
        </div>
      </div>
      <hr />
    </div >
  )
}
