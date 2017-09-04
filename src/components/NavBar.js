import React, {Component} from 'react'
import logo from '../tunes.png'
import '../styles/index.css'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar sticky-top navbar-light bg-faded">
          <span>
            <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='Logo' />
            <a className="navbar-brand" href="/">Play List Tunes</a>
          </span>
        </nav>
        <header className='header'>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">Welcome to Play List Tunes!</h1>
              <p className="lead">Load your songs!</p>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
