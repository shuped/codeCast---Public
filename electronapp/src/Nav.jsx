import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return(
      <span className="nav-header">
        <NavLink className="home nav-link" to="/">Dashboard</NavLink>

        <NavLink className="start-now nav-link" to="/start-now">Stream Now</NavLink>

        <NavLink className="schedule-new nav-link" to="/schedule-new">Schedule New</NavLink>

        <NavLink className="start-scheduled nav-link" to="/start-scheduled">Start Scheduled</NavLink>
      </span>
    );
  }
}

export default Nav;