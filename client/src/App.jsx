import React, { Component } from 'react';
import { connect } from 'react-redux';

//components

import Chat from './StreamComponents/Chat/ChatMain';
import LiveCodeDisplay from './StreamComponents/FileDisplay/LiveCodeDisplay.jsx';
import Video from './StreamComponents/VideoStream/VideoStream.jsx';
import Terminal from './StreamComponents/Terminal/Terminal.jsx';
import FileDirectory from './StreamComponents/FileDirectory/FileDirectory.jsx';
import ArchivedStreams from './ViewComponents/IndexViews/ArchivedStreams/ArchivedStreams.jsx';
import IndexViews from './ViewComponents/IndexViews/IndexViews.jsx'
import Header from './ViewComponents/Header.jsx'
//
// import logo from './assets/logo.svg';

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <IndexViews />
        </div>

        {/* <div className='component-container1'>
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

        <div>
          <IndexViews />
        </div>
        </div> */}
      </div> 
    );
  }
}




export default (App);


