import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import Nav from './ViewComponents/Nav.jsx';
import Index from './ViewComponents/IndexViews/IndexViews.jsx';
import Stream from './StreamComponents/StreamIndex.jsx';

// import logo from './assets/logo.svg';

class App extends Component {   
  render() {
    return (
      <div className="App">
        <Stream />
      </div>
    );
  }
}

export default (App);


