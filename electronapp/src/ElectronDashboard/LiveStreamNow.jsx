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
      title: 'placeholder',
      user: 'Benji Liabø',
      userID: 1,
      description: '',
      scheduledDate: new Date(),
      youtubeURL: '',
      languageImage: ''
    };
  };

  //handlers
  HandleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
      ipcRenderer.send('terminalOpen', res.data.streamID)
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
                <h3>Title:</h3>
                <input type="text" name='title' onChange={this.HandleInputChange} />
              </div>
              <div className="description-input">
                <h3>Description:</h3>
                <textarea type="text" rows="4" cols="90" name='description' onChange={this.HandleInputChange} />
              </div>

              <div className=" bottom-container">

                <div className="youtube-container">
                  <h3>YouTube URL:</h3>
                  <input type="text" placeholder="https://www.youtube.com/channel/PLACEHOLDER" name='youtubeURL' onChange={this.HandleInputChange} />
                </div>
                <div className="b-bottom-container">
                  <input type="submit" value="Go live!" />
                </div>

              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(LiveStreamNow);
