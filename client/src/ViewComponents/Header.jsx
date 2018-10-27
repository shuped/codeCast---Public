import React, { Component } from 'react';
import CodecastLogo from '../images/CODECAST_LOGO.png'
class Header extends Component {
	render() {
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
}

export default Header;