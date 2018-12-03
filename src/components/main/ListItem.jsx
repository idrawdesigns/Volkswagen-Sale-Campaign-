import React from 'react'
import './ListItem.scss'

const ListItem = () => {
  return (
    <div className="product-card">
      <div className="car-name">Crafter</div>
      <div className="product-container">
        <div className="image-wrapper">
          <img
            src={require('../../Assets/images/Amarok.png')}
            alt="Car"
            style={{ width: 140 }}
          />
        </div>
        <div className="product-content">
          <span>Lease from</span>
          <h2>660</h2>
          <span>Ksh/pm</span>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ListItem
