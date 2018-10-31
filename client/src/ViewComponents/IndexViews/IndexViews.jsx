import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Route, Switch } from "react-router-dom";

import IndexHeader from './IndexHeader.jsx';
import ActiveStreams from './ActiveStreams/ActiveStreams.jsx';
import ScheduledStreams from './ScheduledStreams/ScheduledStreams.jsx';
import ArchivedStreams from './ArchivedStreams/ArchivedStreams.jsx';

class IndexViews extends Component {
	render() {
		return (
			<div className="pageGrid">
				<div className="header-tabs">
					<Route component={ IndexHeader } />
				</div>	
				<div>
					<Switch>
						<Route path="/current" component={ ActiveStreams } className="index-view active" />
						<Route path="/scheduled" component={ ScheduledStreams } className="index-view scheduled" />
						<Route path="/archived" component={ ArchivedStreams } className="index-view archived" />
					</Switch>
				</div>
			</div>
		)
	}
}

export default IndexViews;



