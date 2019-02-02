import React, { Component } from 'react';
import { Button } from 'antd';
import { fetchBroadcasterStreams, postDeleteStream, stageStream } from '../redux/ducks/streamsDuck.js';
import { connect } from 'react-redux'; 

import { Router, withRouter, Link } from 'react-router-dom';
// import CodecastLogo from '../assets/logo.png';


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
    const { title, scheduledDate, streamID } = props;
    return (
      <div className="scheduledStreamCard" key={ streamID } >
        <div className="info-container">
          <p className="title">{ title }</p>
          <div className="date-time">
            <p id="date">{ scheduledDate }</p>
          </div>
        </div>
        <div>
          <div className="controls">
            <Link to='/StartScheduled' className="startPlaceholder" onClick={ () => this.LaunchScheduledStream(streamID) }>
              <Button id="start-btncc" className="btncc" type="primary" onClick={ () => this.OpenEditControls(streamID) }>
                Start Stream
              </Button>
            </Link>
            <Button id="edit-btncc" className="btncc" type="primary" onClick={ () => this.OpenEditControls(streamID) }>
              Edit
            </Button>
            <Button id="delete-btncc" className="btncc" type="primary" onClick={ () => this.props.deleteStream(streamID) }>
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
          <div className="header">
            {/* <img src={ CodecastLogo } /> */}
          </div>
          <div className="streams">
            <div className="info">
              <p>Welcome to the initial mock up of CodeCast's streaming app! Thanks for downloading!</p>
              <p>You can stream a project right now with the Stream Now button at the top - ready the embed link to your YouTube live stream or desired video</p>
              <p>You can schedule a stream by clicking Schedule a Stream at the top - this will let users on the website know when and what you plan to stream!</p>
              <p>If you want to begin a previously scheduled stream, below is the global list of scheduled streams. Note these are not user specific or restricted at this time.</p>
            </div>
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
