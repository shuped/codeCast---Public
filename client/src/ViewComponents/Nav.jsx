import React from 'react';
import { NavLink } from "react-router-dom";
 
import CodecastLogo from '../images/CODECAST_LOGO.png';

function Nav() {
	return (
		<header>
			<div className='nav'>
				<img className='headerLogo' src={CodecastLogo}></img>
				<NavLink to="/login" className="headerbtn">Login</NavLink>
				<NavLink to="/register" className="headerbtn">Register</NavLink>
			</div>
		</header>
	)
}

export default Nav;