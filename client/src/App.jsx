import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
// import IndexViews from './ViewComponents/IndexViews/IndexViews.jsx';
// import Header from './ViewComponents/Header.jsx'
import StreamIndex from './StreamComponents/StreamIndex.jsx'

// import logo from './assets/logo.svg';

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <StreamIndex />
      </div>
    );
  }
}




export default (App);


