import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { streamsActions } from '../../../redux/_actions';
import { withRouter } from 'react-router-dom';
import ActiveStreamCard from './ActiveStreamCard.jsx';

class ActiveStreams extends Component {  

  componentDidMount() {
    this.props.fetchActiveStreams();
  }

  render() {
    const renderStreams = this.props.activeStreams
      .reverse()
      .map((stream) => ActiveStreamCard(stream));

    return (
      <div className="stream-container">
        <h1 className="index-header">Streaming Now</h1>
        <main className="streams">
          { renderStreams }
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeStreams: state.streams.activeStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActiveStreams: () => dispatch(streamsActions.fetchActiveStreams())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActiveStreams));