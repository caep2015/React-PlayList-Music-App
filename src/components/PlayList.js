import React, { Component } from 'react'
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      songs: []
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount () {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json()
      }).then(data => {
        this.setState({songs: data})
      })
  }

  fetchData (e) {
   e.preventDefault()
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
     return results.json()
   }).then(data => {
     this.setState({songs: data})
   })
  }

  render () {
    return (
      <div>
        <div>
          <form onSubmit={this.fetchData}>
          <button type="submit" className="btn btn-warning">Update</button>
          </form>
        </div>
        <div>
          <PlayListItem songs={this.state.songs} />
        </div>
      </div>
    )
  }
}
