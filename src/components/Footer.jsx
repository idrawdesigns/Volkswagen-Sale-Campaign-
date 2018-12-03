import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p>Nairobi Kenya | Login </p>
      <div className="form">
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" name="log-in-button" value="Sign In" />
      </div>
    </div>
  )
}

export default Footer
