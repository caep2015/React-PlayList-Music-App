import React, {Component} from 'react'

export default class PlayListForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleArtistChange = this.handleArtistChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.addToList = this.addToList.bind(this)
  }

  handleUsernameChange (event) {
    this.setState({userName: event.target.value})
  }
  handleArtistChange (event) {
    this.setState({songArtist: event.target.value})
  }
  handleTitleChange (event) {
    this.setState({songTitle: event.target.value})
  }
  handleNotesChange (event) {
    this.setState({songNotes: event.target.value})
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </form>
        </div>
        </div>
      )
    }
  }
