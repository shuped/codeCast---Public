import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Chat from './StreamComponents/chat/ChatMain';
// import logo from './assets/logo.svg';

class App extends Component {

  componentDidMount(){
    this.socket = io('localhost:8080');
  }
  
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


