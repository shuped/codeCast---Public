import React, { Component } from 'react';

import { connect } from 'react-redux';

//components
import Chat from './StreamComponents/chat/ChatMain';
import LiveCodeDisplay from './StreamComponents/fileDisplay/LiveCodeDisplay.jsx';
<<<<<<< HEAD
import FileDirectory from './StreamComponents/fileDirectory/FileDirectory';
import Console from './StreamComponents/Terminal/Terminal'
//
=======
import Video from './StreamComponents/VideoStream/VideoStream.jsx';
import Terminal from './StreamComponents/Terminal/Terminal.jsx';
import FileDirectory from './StreamComponents/fileDirectory/FileDirectory.jsx';
import ActiveStreams from './ViewComponents/IndexViews/ActiveStreams/ActiveStreams.jsx';

>>>>>>> 47b26a78897ee7c2dd7262050793e08e7136cd98
// import logo from './assets/logo.svg';

class App extends Component {
  
  
  render() {
    

<<<<<<< HEAD
    return (
      <div className="App"> 
        <div className="component-container">
          <div className="Chat-display">
            <Chat />
          </div>
=======
        <div className='index-view'>
          <ActiveStreams />
        </div>



        {/* <div className='component-container1'>
          <div className="Filetree-display">
            <FileDirectory />
          </div>
          <div className="Video-display">
            <Video />
          </div>
          <div className="Chat-display">
            <Chat />
          </div>
        </div> */}

        {/* <div className="component-container2">
>>>>>>> 47b26a78897ee7c2dd7262050793e08e7136cd98
          <div className="Code-display">
            <LiveCodeDisplay />
          </div>
          <div>
            <FileDirectory />
          </div>
<<<<<<< HEAD
        </div>
=======
        </div> */}


>>>>>>> 47b26a78897ee7c2dd7262050793e08e7136cd98
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


