import React, {Component} from 'react'
const submitStyle = {
  color: 'white',
  backgroundColor: 'pink',
  border: 0
}

export default class PlayListForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <div>
        <div className='playlist-form'>
        <form>
        <div className="from-group">
          <label htmlFor="formGroupExampleInput">Username:</label>
          <input value={this.state.value} onChange={this.handleUsernameChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your username..." />
        </div>
        <div className="form-group">
          <label htmlFor="forGroupExampleInput2">Artist/Band</label>
          <input value={this.state.value} onChange={this.handleArtistChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter the Band or Artist name..." />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Song Title:</label>
          <input value={this.state.value} onChange={this.handleTitleChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter the song title..." />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Song Notes:</label>
          <input value={this.state.value} onChange={this.handleNotesChange} type="text" className="form-control" id="forGroupExampleInput2" placeholder="Enter some notes about the song..." />
        </div>
        <div>
          <button style={submitStyle} type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
      </div>
      </div>
    )
  }
}

//userName
//songList
//songTitle
//songNotes
