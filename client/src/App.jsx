import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//components

import Nav from './ViewComponents/Nav.jsx';
import Index from './ViewComponents/IndexViews/IndexViews.jsx';
import ActiveStreams from './ViewComponents/IndexViews/ActiveStreams/ActiveStreams.jsx';
import ScheduledStreams from './ViewComponents/IndexViews/ScheduledStreams/ScheduledStreams.jsx';
import ArchivedStreams from './ViewComponents/IndexViews/ArchivedStreams/ArchivedStreams.jsx';

// import logo from './assets/logo.svg';

class App extends Component {   
  render() {
    return (
      <div className="App">
        <Route component={ Nav } className="app-nav" />
        <Route path="/" component={ Index } />
      </div>
    );
  }
}

export default withRouter(App);


