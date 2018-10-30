import React from 'react';
import { Route, Switch } from "react-router-dom";

import ActiveStreams from './ActiveStreams/ActiveStreams.jsx';
import ScheduledStreams from './ScheduledStreams/ScheduledStreams.jsx';
import ArchivedStreams from './ArchivedStreams/ArchivedStreams.jsx';
import Stream from '../../StreamComponents/StreamIndex.jsx';

function IndexViews (){

	return (
		<div className="pageGrid">				
			<div>
				<Switch>
					<Route path="/current" component={ ActiveStreams } className="index-view active" />
					<Route path="/scheduled" component={ ScheduledStreams } className="index-view scheduled" />
					<Route path="/archived" component={ ArchivedStreams } className="index-view archived" />
					<Route path="/stream/:id" component={ Stream } />
				</Switch>
			</div>
		</div>
	)
}

export default IndexViews;



