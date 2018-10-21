import React, { Component } from 'react';


//components
import LiveCodeDisplay from './functionalComponents/liveCodeDisplay/LiveCodeDisplay.jsx';
//<LiveCodeDisplay />

import { connect } from 'react-redux';
import Chat from './StreamComponents/chat/ChatMain';

// import logo from './assets/logo.svg';

class App extends Component {
  
  
  render() {
    return (
      <div className="App"> 
        <Chat />
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


