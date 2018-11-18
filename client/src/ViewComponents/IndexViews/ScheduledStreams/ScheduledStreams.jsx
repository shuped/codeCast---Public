import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { streamsActions } from '../../../redux/_actions';
import { withRouter } from 'react-router-dom';
import ScheduledStreamCard from './ScheduledStreamCard.jsx';

class ScheduledStreams extends Component {

  componentDidMount() {
    this.props.fetchScheduledStreams();
  }

  render() {
    const renderStreams = this.props.scheduledStreams
      .map((stream) => ScheduledStreamCard(stream));

    return (
      <div className="stream-container">
        <h1 className="index-header">Upcoming Streams</h1>
        <main className="streams">
          { renderStreams }
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scheduledStreams: state.streams.scheduledStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScheduledStreams: () => dispatch(streamsActions.fetchScheduledStreams())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduledStreams));