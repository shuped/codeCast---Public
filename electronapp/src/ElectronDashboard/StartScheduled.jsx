import React, { Component } from 'react';
import { Button } from 'antd';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';
import axios from '../../api.js'
import { putScheduledStream } from '../redux/ducks/streamsDuck.js'

import { withRouter, Link } from 'react-router-dom';

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

const InputGroup = Input.Group;
const Option = Select.Option;

class StartScheduled extends Component {

  constructor() {
    super();
    this.state = {
      youtubeURL: 'Enter the URL for your youtube LiveStream here',
      path: null
    };
  };

  HandleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target, event.target.value)
  };

  // HandleSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.startScheduledStream({
  //     ...this.props.stagedStream,
  //     ...this.state,
  //     status: 'active'
  //   });
  //   // TODO: React route to Streaming view (chat?) or dashboard
  //   ipcRenderer.send('terminalOpen', res.data.streamID, this.state.path)
  //   console.log(this.state);
  //   this.props.history.push('/');
  // }

  HandleSubmit = (event) => {
    event.preventDefault();
    // TODO: check form validation before terminalOpen and form submit

    // Post stream to server and retrive streamID on success
    axios({
      method: 'put',
      url: '/api/scheduledStreams/',
      data: {
        ...this.props.stagedStream,
        ...this.state,
        status: 'active'
      }
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

      <main className="start-scheduled">        
        <div className="main-container">
          <div className="content-wrapper">
           <h1 className="container-header">{this.props.stagedStream.title}</h1>
           <p>{this.props.stagedStream.description}</p>
          </div>

          <div className="forms-container">
            <form onSubmit={this.HandleSubmit}>

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

const mapStateToProps = (state) => {
  return {
    stagedStream: state.streams.stagedStream[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startScheduledStream: (stream) => dispatch(putScheduledStream(stream))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartScheduled));
