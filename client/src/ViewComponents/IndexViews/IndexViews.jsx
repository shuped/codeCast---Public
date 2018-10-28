import React, { Component } from 'react';
import ArchivedStreams from './ArchivedStreams/ArchivedStreams.jsx';
import ScheduledStreams from './ScheduledStreams/ScheduledStreams.jsx';
import ActiveStreams from './ActiveStreams/ActiveStreams.jsx';

class IndexViews extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageValue: '/current',
			erectileState: 'quarter chub'
		}
	}

	setRouteState = (route) => {
		this.setState({pageValue: route})
		console.log("State:", this.state)
	}

	render() {
		
		let pageVal = () => {
			if (this.state.pageValue === '/current') {
				return (
					<div className='index-view'>
						<ActiveStreams />
					</div>
				)
			}
			if (this.state.pageValue === '/scheduled') {
				return (
					<div className='index-view'>
						<ScheduledStreams />
					</div>
				)
			}
			if (this.state.pageValue === '/archived') {
				return (
					<div className='index-view'>
						<ArchivedStreams />
					</div>
				)
			}
		}
		
		return (
			<div className="pageGrid">
				<div>
				<button className="tablink" onClick={() => this.setRouteState('/current')} id="defaultOpen">
					CURRENT STREAMS
				</button>
				<button className="tablink" onClick={() => this.setRouteState('/scheduled')}>
					SCHEDULED STREAMS
				</button>
				<button className="tablink" onClick={() => this.setRouteState('/archived')}>
					ARCHIVED STREAMS
				</button>

				{pageVal()}

				</div>
			</div>
		)
	}
}

export default IndexViews;

     



