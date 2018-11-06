import React, { Component } from 'react'
import Chat from './Chat/ChatMain.jsx';
import LiveCodeDisplay from './FileDisplay/LiveCodeDisplay.jsx';
import Video from './VideoStream/VideoStream.jsx';
import Terminal from './Terminal/Terminal.jsx';
import FileDirectory from './FileDirectory/FileDirectory.jsx';
import { connect } from 'react-redux';

class Stream extends Component {
  render() {
    const streamID = this.props.match.params.id;
    return (
      <div className="stream-parent">
        <div className='component-container1'>
          <div className="Filetree-display">
            <FileDirectory streamID={streamID}/>
          </div>
          <div className="Video-display">
            <Video streamID={streamID}/>
          </div>
          <div className="Chat-display">
            <Chat streamID={streamID}/>
          </div>
        </div>  
        <div className="component-container2">
          <div className="Code-display">
            <LiveCodeDisplay streamID={streamID}/>
          </div>
          <div className="Terminal-display">
            <Terminal streamID={streamID}/>
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

  };   
}


export default connect(mapStateToProps, mapDispatchToProps)(Stream);

