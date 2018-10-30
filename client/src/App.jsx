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
        <div className="nav-bar">
          <Route component={ Nav } className="app-nav" />
        </div>
        <Switch>
          <Route exact path="/" component={ Index } />
          <Route path="/stream/:id" component={ Stream } />
        </Switch>
      </div>
    );
  }
}




export default (App);


