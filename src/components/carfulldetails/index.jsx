import React, { Component } from 'react'

class index extends Component {
  render() {
    return (
      <div className="full-detail-wrapper">
        <header className="cancel-button">x</header>
        <main className="details-wrapper">
          <div className="Left-side">
            <h3>Left side</h3>
          </div>
          <div className="right-side">
            <h3>Right side</h3>
          </div>
        </main>
      </div>
    )
  }
}

export default index
