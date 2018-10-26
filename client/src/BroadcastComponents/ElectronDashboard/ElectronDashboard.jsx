import React from 'react';
import { Button } from 'antd';

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      scheduledStreams: [
        {
          title: 'HTML/CSS',
          scheduledDate: "2018-03-25",
          scheduledTime: "9am",
          streamID: 1
        },
        {
          title: 'Node',
          scheduledDate: "2019-05-30",
          scheduledTime: "3pm",
          streamID: 2
        }
      ]
    }
  }


  OpenEditControls = (clickedID) => {

    console.log(clickedID)
  }

  DeleteCard = (clickedID) => {

    this.setState({scheduledStreams: this.state.scheduledStreams.filter( (stream) => {
      return stream.streamID !== clickedID;
    }) })
    
    //make as promise? since set state takes to long
    // leave in delete function
    // this.props.deleteStream(this.state.scheduledStreams);
  }

  // need data structure for scheduled streams, for edit purposes

  MakeScheduledStreamCard = (props) => {
    const { title, scheduledDate, scheduledTime, streamID } = props;
    return (
      <div className="scheduledStreamCard" key={ streamID } >
        <p>{ title }</p>
        <div>
          <div className="date-time">
            <p id="date">{ scheduledDate }</p>
            <p id="time">{ scheduledTime }</p>
          </div>
          <div className="controls">
            <Button id="edit-btn"  type="primary" onClick={ () => this.OpenEditControls(streamID) }>Edit</Button>
            <Button id="delete-btn" type="primary" onClick={ () => this.DeleteCard(streamID) }>Delete</Button>
          </div>
        </div>
      </div>
    )
  }

  render() {  
    console.log(this.state.scheduledStreams, "render");
    const renderStreams = this.state.scheduledStreams.map( (stream) => {
      return this.MakeScheduledStreamCard(stream);  
    });

    return (

        <main className="dashboard">
          <div className="header">
            <div className="image-placeholder">p</div>
          
            <div className="stream-controls">
              <Button id="instant"  type="primary">Start a Stream</Button>
              {/* missing confirm button delete button on click */}
              <Button id="scheduleNew" type="primary">Schedule a Stream</Button>
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

// leave in 

// const mapStateToProps = (state) => {
//   return {
//     fileDir: state.directory.directoryStructure
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteStream: (fileID) => dispatch(updateFile(fileID))
//   }
// }

export default Dashboard;
// export default connect(null, null)(ActiveStreams);

// data representation
// {
//   title: 'HTML/CSS',
//   broadcaster: '#'
//   scheduledDate: "2018-03-25",
//   scheduledTime: "9am",
//   description: 
//   id: 1
// }