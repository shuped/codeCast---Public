import React, { Component } from 'react';


import { connect } from 'react-redux'
import io from 'socket.io-client';

//components
<<<<<<< HEAD
import FileDirectory from './functionalComponents/fileDirectory/FileDirectory.jsx';

=======
import LiveCodeDisplay from './functionalComponents/liveCodeDisplay/LiveCodeDisplay.jsx';
>>>>>>> master
// import logo from './assets/logo.svg';

class App extends Component {

  componentDidMount(){
    this.socket = io('localhost:8080');
  }
  
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <div>
          <FileDirectory />
        </div>
=======
        <LiveCodeDisplay />
>>>>>>> master
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //state mapping here    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //dispatch actions here
  };   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


