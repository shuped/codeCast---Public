import React, { Component } from 'react';
import { Button } from 'antd';
import { fetchBroadcasterStreams, postDeleteStream, stageStream } from '../redux/ducks/streamsDuck.js';
import { connect } from 'react-redux'; 

import { withRouter, Link } from 'react-router-dom';


class Dashboard extends Component {
  
  componentDidMount() {
    let userID = 1;
    this.props.fetchBroadcasterStreams(1);
    // this.props.fetchBroadcasterStreams(userID);
  }

  LaunchScheduledStream = (clickedID) => {
    this.props.stageStream(clickedID);
  }

  OpenEditControls = (clickedID) => {
    console.log(clickedID);
  }

  
  // DeleteCard = (clickedID) => {

  //   this.setState({scheduledStreams: this.props.scheduledStreams.filter( (stream) => {
  //     return stream.streamID !== clickedID;
  //   }) })
    
    //make as promise? since set state takes to long
    // leave in delete function
    // this.props.deleteStream(this.state.scheduledStreams);
 

  // need data structure for scheduled streams, for edit purposes

  MakeScheduledStreamCard = (props) => {
    const { title, scheduledDate, scheduledTime, streamID } = props;
    return (
      <div className="scheduledStreamCard" key={ streamID } >
        <div className="info-container">
          <p className="title">{ title }</p>
          <div className="date-time">
            <p id="date">{ scheduledDate }</p>
            <p id="time">{ scheduledTime }</p>
          </div>
        </div>
        <div>
          <div className="controls">
            <Link to='/StartScheduled' className="startPlaceholder" onClick={ () => this.LaunchScheduledStream(streamID) }>
              <Button id="start-btn" className="btn" type="primary" onClick={ () => this.OpenEditControls(streamID) }>
                Start Stream
              </Button>
            </Link>
            <Button id="edit-btn" className="btn" type="primary" onClick={ () => this.OpenEditControls(streamID) }>
              Edit
            </Button>
            <Button id="delete-btn" className="btn" type="primary" onClick={ () => this.props.deleteStream(streamID) }>
              Delete
            </Button>
          </div>
        </div>
      </div>
    )
  }

  render() {  
    console.log(this.props.scheduledStreams, "render");
    
    const renderStreams = this.props.scheduledStreams
      .map((stream) => this.MakeScheduledStreamCard(stream));

    return (

        <main className="dashboard">        
          <div className="streams">
            <h2 className="container-header">Your Scheduled Streams</h2>
            { renderStreams }
          </div>
        </main>
      
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
    deleteStream: (fileID) => dispatch(postDeleteStream(fileID)),
    fetchBroadcasterStreams: (userID) => dispatch(fetchBroadcasterStreams(userID)),
    stageStream: (streamID) => dispatch(stageStream(streamID))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
