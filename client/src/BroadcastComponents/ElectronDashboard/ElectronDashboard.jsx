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
          id: 1
        },
        {
          title: 'Node',
          scheduledDate: "2019-05-30",
          scheduledTime: "3pm",
          id: 2
        }
      ]
    }
  }

  MakeScheduledStreamCard = (props) => {
    const { title, scheduledDate, scheduledTime, id } = props;
    return (
      <div className="scheduledStreamCard" key={ id } >
        <p>{ title }</p>
        <div>
          <div className="date-time">
            <p id="date">{ scheduledDate }</p>
            <p id="time">{ scheduledTime }</p>
          </div>
          <div className="controls">
            <Button id="edit-btn"  type="primary">Edit</Button>
            <Button id="delete-btn" type="primary">Delete</Button>
          </div>
        </div>
      </div>
    )
  }

  render() {  
    
    const renderStreams = this.state.scheduledStreams.map( (stream) => {
      return this.MakeScheduledStreamCard(stream);  
    });

    return (

      

      <main className="streams">
        { renderStreams }
      </main>
    );
  }




}

// const mapStateToProps = (state) => {
//   return {
//     fileDir: state.directory.directoryStructure
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendFileID: (fileID) => dispatch(updateFile(fileID))
//   }
// }

export default Dashboard;


