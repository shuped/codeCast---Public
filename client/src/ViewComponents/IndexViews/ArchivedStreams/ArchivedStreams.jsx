import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { streamsActions } from '../../../redux/_actions';
import { withRouter } from 'react-router-dom';
import ArchivedStreamCard from './ArchivedStreamCard.jsx';

class ArchivedStreams extends Component { 
  
  componentDidMount() {
    this.props.fetchArchivedStreams();
  }

  render() {  
    const renderStreams = this.props.archivedStreams
      .map((stream) => ArchivedStreamCard(stream))

    return (
      <div className="stream-container">
        <h1 className="index-header">Archived Streams</h1>
        <main className="streams">
          { renderStreams }
        </main>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    archivedStreams: state.streams.archivedStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArchivedStreams: () => dispatch(streamsActions.fetchArchivedStreams())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArchivedStreams));