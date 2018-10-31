import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import ActiveStreams from './ActiveStreams/ActiveStreams.jsx';
import ScheduledStreams from './ScheduledStreams/ScheduledStreams.jsx';
import ArchivedStreams from './ArchivedStreams/ArchivedStreams.jsx';
import IndexHeader from './IndexHeader.jsx';

function IndexViews (){

	return (
		<div className="pageGrid">
			<div className="header-tabs">
				<Route component={ IndexHeader } />
			</div>
			<h1>Welcome to CodeCast!</h1>
			<p>CodeCast is a platform for streaming live videos and tutorials to anyone, anywhere.</p>
			<p>Stream video, terminal output and your project directory, allowing you to reach and teach your viewers like never before!</p>
			<p>Choose one of the links in the top nav to check out upcoming, past and active streams!</p>
			<div>
				<Switch>
					<Route path="/active" component={ ActiveStreams } className="index-view active" />
          <Route path="/scheduled" component={ ScheduledStreams } className="index-view scheduled" />
          <Route path="/archived" component={ ArchivedStreams } className="index-view archived" />
				</Switch>
			</div>
		</div>
	)
}

export default withRouter(IndexViews);



