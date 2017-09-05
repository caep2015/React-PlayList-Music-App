import React, {Component} from 'react'
import logo from '../tunes.png'
import '../styles/NavBar.css'

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-faded">
          <span>
            <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='Logo' />
            <a className="navbar-brand" href="/react-playlist">Play List Tunes</a>
          </span>
        </nav>
        <header className='header'>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <img className="card-img-top" src={require('../music_arts.png')} alt="header" style={{width: "100%", borderRadius: "5px"}} height="200px" />
              <h1 className="display-3">Welcome to Play List Tunes!</h1>
              <p className="lead">Load your songs below and have a party!</p>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
