import React, { Component } from 'react';

import { connect } from 'react-redux';

//components
import Chat from './StreamComponents/chat/ChatMain';
import LiveCodeDisplay from './StreamComponents/fileDisplay/LiveCodeDisplay.jsx';
import Video from './StreamComponents/VideoStream/VideoStream.jsx';
//
// import logo from './assets/logo.svg';

class App extends Component {
  
  
  render() {
    return (
      <div className="App"> 
        <div className="component-container">
          <div className="Code-display">
            <Video />
          </div>
          <div className="Chat-display">
            <Chat />
          </div>
          <div className="Code-display">
            <LiveCodeDisplay />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
    //state mapping here    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
    //dispatch actions here
  };   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


