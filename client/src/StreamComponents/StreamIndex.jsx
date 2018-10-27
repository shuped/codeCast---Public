import React, { Component } from 'react'
import { connect } from 'react-redux'

class Stream extends Component (props) {

  render() {(
      <div className="stream-parent">
        <div className='component-container1'>
        <div className="Filetree-display">
          <FileDirectory />
        </div>
        <div className="Video-display">
          <Video />
        </div>
        <div className="Chat-display">
          <Chat />
        </div>
      </div>  

      <div className="component-container2">
        <div className="Code-display">
          <LiveCodeDisplay />
        </div>
        <div className="Terminal-display">
          <Terminal />
        </div>
      </div>
    </div>
  )}
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

