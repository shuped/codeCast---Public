import React, { Component } from 'react'
import Chat from './Chat/ChatMain.jsx';
import LiveCodeDisplay from './FileDisplay/LiveCodeDisplay.jsx';
import Video from './VideoStream/VideoStream.jsx';
import Terminal from './Terminal/Terminal.jsx';
import FileDirectory from './FileDirectory/FileDirectory.jsx';
import { connect } from 'react-redux';
import { joinRoom } from '../redux/ducks/streamsDuck.js';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.streamID = this.props.match.params.id;
  }
  componentDidMount() {
    joinRoom(this.streamID)
  }
  render() {
    return (
      <div className="stream-parent">
        <div className='component-container1'>
          <div className="Filetree-display">
            <FileDirectory streamID={this.streamID}/>
          </div>
          <div className="Video-display">
            <Video streamID={this.streamID}/>
          </div>
          <div className="Chat-display">
            <Chat streamID={this.streamID}/>
          </div>
        </div>  
        <div className="component-container2">
          <div className="Code-display">
            <LiveCodeDisplay streamID={this.streamID}/>
          </div>
          <div className="Terminal-display">
            <Terminal streamID={this.streamID}/>
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
    joinRoom: (streamID) => dispatch(joinRoom(streamID))
  };   
}


export default connect(mapStateToProps, mapDispatchToProps)(Stream);

