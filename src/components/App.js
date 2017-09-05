import React, { Component } from 'react'
import '../styles/App.css'
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayList from './PlayList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
         <div className="row">
          <div className="col-6">
          <PlayListForm />
          </div>
          <div className="col-6">
          <PlayList />
          </div>
        </div>
      </div>
    )
  }
}

export default App
