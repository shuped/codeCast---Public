import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
 
import CodecastLogo from '../images/CODECAST_LOGO.png';

function Nav() {
	var AWS_S3_NATIVE_BUCKET = 'http://codecastnative.s3.amazonaws.com/';
	return (
		<header>
			<div className="nav">
				<NavLink to="/"><img className="navLogo" src={ CodecastLogo }></img></NavLink>

				<div className="downloads-container">
				<p>Start streaming now! <br/>Download the app! </p>
					<div className="download-btns">
						<a className="navBtn" href={AWS_S3_NATIVE_BUCKET + "codeCast.app.zip"}>
							MacOS
						</a>
						<a className="navBtn" href={AWS_S3_NATIVE_BUCKET + "codeCast.exe.zip"}>
							Windows
						</a>
						{/* <NavLink to="/login" className="navBtn">Windows</NavLink>
						<NavLink to="/register" className="navBtn">MacOS</NavLink> */}
					</div>
				</div>
			</div>
			
		</header>
	)
}

export default withRouter(Nav);