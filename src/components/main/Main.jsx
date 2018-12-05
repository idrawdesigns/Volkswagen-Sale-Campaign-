import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './main.scss'

import Logo from './Logo'
import CarList from './CarList'
import FullDetails from '../carfulldetails/index'

const Home = () => {
  return <div className="main-content" />
}

const main = () => {
  return (
    <div className="wrapper">
      <aside className="logo">
        <Logo />
      </aside>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={FullDetails} />
      </Switch>
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
