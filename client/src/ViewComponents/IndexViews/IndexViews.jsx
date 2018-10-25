import React, { Component } from 'react';

class IndexViews extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageValue: '/',
			erectileState: 'quarter chub'
		}
	}

	setRouteState = (route) => {
		this.setState({pageValue: route})
		console.log("State:", this.state)
	}


	render() {
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
			</div>
		)
	}
}

export default IndexViews;

     



