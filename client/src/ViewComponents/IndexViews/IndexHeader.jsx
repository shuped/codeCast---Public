import React from 'react';
import { Link, withRouter } from "react-router-dom"; 

function IndexHeader() {
	return (
		<header>
			<div className='index-tabs'>
        <Link to={`/active`} className="tablink">Current Streams</Link>
				<Link to={`/scheduled`} className="tablink">Scheduled Streams</Link>
				<Link to={`/archived`} className="tablink">Archived Streams</Link>
			</div>
		</header>
	)
}
export default withRouter(IndexHeader);
