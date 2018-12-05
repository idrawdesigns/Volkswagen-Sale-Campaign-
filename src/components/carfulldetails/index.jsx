import React, { Component } from 'react'
import './index.scss'

class index extends Component {
  render() {
    return (
      <div className="details-wrapper">
        <div className="header">
          <i class="fas fa-times" />
        </div>

        <div className="content">
          <div className="Left-side">
            <div className="header-content">
              <div className="title">
                <h3>Amarok</h3>
              </div>
              <div className="scroll">
                <i class="fas fa-angle-right" />
                <i class="fas fa-angle-left" />
              </div>
            </div>
            <div className="terrain">
              <h4>All terrain</h4>
            </div>
            <div className="car-content">
              <div className="price">
                <span>Lease from</span>
                <br />
                <h2> 660</h2>
                <span>Ksh/pm</span>
              </div>
              <div className="image-container">
                <img
                  src={require('../../Assets/images/Amarok.png')}
                  alt="Amarok"
                />
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="specs">
              <h3>Specifications</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at. Eum aspernatur reprehenderit minus ex hic porro
                magnam?
              </p>
            </div>
            <br />
            <div className="specs">
              <h3>speifications </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at. Eum aspernatur reprehenderit minus ex hic porro
                magnam?
              </p>
            </div>
            <br />
            <div className="specs">
              <h3>speifications </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at. Eum aspernatur reprehenderit minus ex hic porro
                magnam?
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
