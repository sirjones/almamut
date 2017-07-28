import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title">ALMAMUT</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="slogan2"></h2>
        </div>
        <div className="polygon"></div>
        <p className="App-intro">
          <code>Welcome!</code>
        </p>
      </div>
    )
  }
}

export default App
