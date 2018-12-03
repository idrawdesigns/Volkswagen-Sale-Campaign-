import React, { Component } from 'react'
import './App.scss'

//componets
import Main from './components/main/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="main">
           <Main />
      </div>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    )
  }
}

export default App
