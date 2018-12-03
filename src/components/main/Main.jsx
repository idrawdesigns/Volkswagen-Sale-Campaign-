import React from 'react'
import './main.scss'

import Logo from './Logo'
import CarList from './CarList'

const main = () => {
  return (
    <div className="wrapper">
      <aside className="logo">
        <Logo />
      </aside>
      <div className="main-content" />
      <div
        className="car-list-panel "
        data-simplebar
        data-simplebar-auto-hide="true"
      >
        <CarList />
      </div>
    </div>
  )
}

export default main
