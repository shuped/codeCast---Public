import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import Nav from './ViewComponents/Nav.jsx';
import Index from './ViewComponents/IndexViews/IndexViews.jsx';
import ActiveStreams from './ViewComponents/IndexViews/ActiveStreams/ActiveStreams.jsx';
import ScheduledStreams from './ViewComponents/IndexViews/ScheduledStreams/ScheduledStreams.jsx';
import ArchivedStreams from './ViewComponents/IndexViews/ArchivedStreams/ArchivedStreams.jsx';
import Stream from './StreamComponents/StreamIndex.jsx';
// import logo from './assets/logo.svg';

class App extends Component {   
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <Route component={ Nav } className="app-nav" />
        </div>
        <Route exact path="/" component={ Index } />
        <Switch>
					<Route path="/current" component={ ActiveStreams } className="index-view active" />
					<Route path="/scheduled" component={ ScheduledStreams } className="index-view scheduled" />
					<Route path="/archived" component={ ArchivedStreams } className="index-view archived" />
					<Route path="/stream/:id" component={ Stream } />
				</Switch>
      </div>
    );
  }
}

export default (App);


