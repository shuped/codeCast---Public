import React, { Component } from 'react'
import Chat from './Chat/ChatMain.jsx';
import LiveCodeDisplay from './FileDisplay/LiveCodeDisplay.jsx';
import Video from './VideoStream/VideoStream.jsx';
import Terminal from './Terminal/Terminal.jsx';
import FileDirectory from './FileDirectory/FileDirectory.jsx';
import { connect } from 'react-redux';
import { streamsActions } from '../redux/_actions';
import axios from '../redux/api.js';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.streamID = this.props.match.params.id;
  }
  componentDidMount() {
    this.props.joinRoom(this.streamID);

    // This is a holdover until a better solution is presented
    // Make a new redux state object, eg currentStream?
    // More research on Apollo should dictate this decision
    axios({
      method: 'get',
      url: `/api/query?id=${this.streamID}`
    }).then((res) => {
      this.setState({...res.data});
    });

  }
  render() {
    return (
      <div className="stream-parent">
        <div className='component-container1'>
          <div className="Filetree-display">
            <FileDirectory/>
          </div>
          <div className="Video-display">
            <Video url={this.state.youtubeURL}/>
          </div>
          <div className="Chat-display">
            <Chat/>
          </div>
        </div>  
        <div className="component-container2">
          <div className="Code-display">
            <LiveCodeDisplay/>
          </div>
          <div className="Terminal-display">
            <Terminal streamID={this.state.streamID}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    joinRoom: (streamID) => dispatch(streamsActions.joinRoom(streamID))
  };   
}


export default connect(mapStateToProps, mapDispatchToProps)(Stream);

