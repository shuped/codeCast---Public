import React from 'react';
import { Link } from "react-router-dom"; 

function IndexHeader () {
	return (
		<header>
			<div className='header'>
        <Link to="/current" className="tablink">Current Streams</Link>
				<Link to="/scheduled" className="tablink">Scheduled Streams</Link>
				<Link to="/archived" className="tablink">Archived Streams</Link>
			</div>
		</header>
	)
}

export default IndexHeader;