import React, { Component } from 'react';
import { Button } from 'antd';
import { fetchBroadcasterStreams, postDeleteStream, stageStream } from '../redux/ducks/streamsDuck.js';
import { connect } from 'react-redux'; 

class Dashboard extends Component {
  
  componentDidMount() {
    let userID = 1;
    this.props.fetchBroadcasterStreams(1);
    // this.props.fetchBroadcasterStreams(userID);
  }

  LaunchScheduledStream = (clickedID) => {
    console.log(clickedID);
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
        <div className="startPlaceholder" onClick={ () => this.LaunchScheduledStream(streamID) }>|launch stream|</div>
        <p>{ title }</p>
        <div>
          <div className="date-time">
            <p id="date">{ scheduledDate }</p>
            <p id="time">{ scheduledTime }</p>
          </div>
          <div className="controls">
            <Button id="edit-btn"  type="primary" onClick={ () => this.OpenEditControls(streamID) }>Edit</Button>
            <Button id="delete-btn" type="primary" onClick={ () => this.props.deleteStream(streamID) }>Delete</Button>
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
            <div className="image-placeholder">p</div>
          
            <div className="stream-controls">
              <Button id="instant"  type="primary" onClick={ console.log("new instant stream") }>Start a Stream</Button>
              {/* missing confirm button delete button on click */}
              <Button id="scheduleNew" type="primary" onClick={ console.log("schedule upcoming") }>Schedule a Stream</Button>
            </div>
          </div>
          <div className="streams">
            <h2>Your Scheduled Streams</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
