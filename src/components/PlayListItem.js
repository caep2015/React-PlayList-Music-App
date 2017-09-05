import React, {Component} from 'react'
import '../styles/PlayListItem.css'

export default class PlayListItem extends Component {

  render () {
    return (
      <div>
        <div className='playlist'>
          {this.props.songs.map((result) =>
          <div className="card" key={result._id}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-warning">Username: {result.userName}</li>
              <li className="list-group-item list-group-item-warning">Artist/Band: {result.songArtist}</li>
              <li className="list-group-item list-group-item-warning">Song Title: {result.songTitle}</li>
              <li className="list-group-item list-group-item-warning">Song notes: {result.songNotes}</li>
            </ul>
          </div>
          )}
        </div>
      </div>
    )
  }
}
