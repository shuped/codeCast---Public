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
					<IndexHeader />
				</div>	
				<div>
					<Switch>
						<Route path="/current" className="index-view active" component={ActiveStreams} />
						<Route path="/scheduled" className="index-view scheduled" component={ScheduledStreams} />
						<Route path="/archived" className="index-view archived" component={ArchivedStreams} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default IndexViews;



