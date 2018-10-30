import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 
import CodecastLogo from '../images/CODECAST_LOGO.png';

function Header() {
	return (
		<header>
			<div className='header'>
				<img className='headerLogo' src={CodecastLogo}></img>
				<button className='headerbtn' >LOG IN</button>
				<button className='headerbtn' >REGISTER</button>
			</div>
		</header>
	)
}

export default Header;