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
			console.log("HELLOWORLD?")
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
			<div>
				<button className="tablink" onClick={() => this.setRouteState('/current')} id="defaultOpen">
					Current Streams
				</button>
				<button className="tablink" onClick={() => this.setRouteState('/scheduled')}>
					Scheduled Streams
				</button>
				<button className="tablink" onClick={() => this.setRouteState('/archived')}>
					Archived Streams
				</button>
					{this.state.pageValue}
				{pageVal()}
			</div>
		)
	}
}

export default IndexViews;

     



