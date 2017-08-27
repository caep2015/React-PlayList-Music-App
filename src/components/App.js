import React, { Component } from 'react'
import '../styles/App.css'
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayList from './PlayList'
import PlayListItem from './PlayListItem'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <PlayListForm />
        <PlayList />
        <PlayListItem />
      </div>
    )
  }
}

export default App;
