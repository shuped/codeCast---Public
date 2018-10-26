import React from 'react';
import { Button } from 'antd';

class ScheduleNewStream extends React.Component {

  constructor() {
    super();
    this.state = {
      newStream: {
        
      }
    }
  }


  
  


  render() {  
 

    return (

        <main className="new-stream">
          <header className="header">

          </header>
          <div className="main">

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

export default ScheduleNewStream:
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