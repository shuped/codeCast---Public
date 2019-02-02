import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CodecastLogo from '../assets/CODECAST_LOGO.png';

function Nav() {
  return(
    <header className="nav-header">
      {/* <NavLink to="/"><img className="nav-logo" src={ CodecastLogo }></img></NavLink> */}

      {/*nav-links and nav-controls*/}
        <NavLink className="btn home nav-link" to="/">Dashboard</NavLink>

        <NavLink className="btn start-now nav-link" to="/LiveStreamNow">Stream Now!</NavLink>
        
        <NavLink className="btn start-scheduled nav-link" to='/ScheduleNewStream' id="scheduleNew" >Schedule a Stream</NavLink>

    </header>
  );
}


export default withRouter(Nav);