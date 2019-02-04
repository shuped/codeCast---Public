import React from 'react';
import { Input, Select } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import axios from '../../api.js'
const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

class LiveStreamNow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Untitled',
      user: 'Anon',
      userID: 1,
      description: 'No description provided. Get ready for a suprise!',
      scheduledDate: new Date(),
      youtubeURL: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      languageImage: 'javascript',
      path: null
    };
  };

  //handlers
  HandleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target, event.target.value)
  };
  
  HandleImageSelection = (value) => {
    this.setState({languageImage: value});
    console.log(value)
  };

  HandleSubmit = (event) => {
    event.preventDefault();
    // TODO: check form validation before terminalOpen and form submit

    // Post stream to server and retrive streamID on success
    axios({
      method: 'post',
      url: '/api/activeStreams/',
      data: this.state
    }).then((res) => {
      console.log('Post scheduled API streams success', res);
      // Send streamID to renderer.js for socket room
      ipcRenderer.send('terminalOpen', res.data.streamID, this.state.path)
      // TODO: show broadcasting view
      this.props.history.push('/');
    }).catch((err) => {
      console.error('Error: Post scheduled stream rejected:', err.data);
      // TODO: Render error element
    })
  };

  render() {  
    return (
      <main className="new-stream">
        <div className="inputs-container">
        

          <h1 className="container-header">Start New Stream</h1>

          <div className="forms-container">

            <form onSubmit={this.HandleSubmit}>

              <div className="title-input">
              <div className="">
                <h3>Title:</h3>
                <input type="text" placeholder="Title..." name='title' onChange={this.HandleInputChange} />
                </div>
                <div className="">
                <h3>Username:</h3>
                <input type="text" placeholder="John Carmack..." name='user' onChange={this.HandleInputChange} />
              </div>
              </div>

              <div className="description-input">
                <h3>Description</h3>
                <textarea type="text" placeholder="What project are you sharing today?" rows="4" cols="90" name='description' onChange={this.HandleInputChange} />
              </div>

              <div className="youtube-container">
                <h3>YouTube URL:</h3>
              
                <p>Copy the embed link to the YouTube video you wish to broadcast!</p>
                <input type="text" placeholder="youtube.com/embed/.." name='youtubeURL' onChange={this.HandleInputChange} />
              
              </div>
              <div className=" bottom-container">
                <h3>Path to Project Directory:</h3>
                <p>Copy the absolute path of the directory you want to broadcast. Note: users will have unrestricted access to files within the directory. </p>
                <div className="input-label-container">
                  <input type="text" placeholder="/Users/... or C:\..." name='path' onChange={this.HandleInputChange} /> 
                  <p className="warning-label">Streaming an excessively large directory like your Downloads or Program Files may cause this application to become unusable at this time.</p>
                </div>              
              </div>
              
              <div className="b-bottom-container">
                <input className="launch-btn" type="submit" value="Go live!" />
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(LiveStreamNow);
