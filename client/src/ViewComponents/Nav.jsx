import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
 
import CodecastLogo from '../images/CODECAST_LOGO.png';

function Nav() {
	return (
		<header>
			<div className='nav'>
				<NavLink to="/"><img className='headerLogo' src={ CodecastLogo }></img></NavLink>
				<NavLink to="/login" className="headerbtn">Login</NavLink>
				<NavLink to="/register" className="headerbtn">Register</NavLink>
			</div>
			
		</header>
	)
}

export default withRouter(Nav);