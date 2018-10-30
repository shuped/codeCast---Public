import React from 'react';
import { Button } from 'antd';
import { Input, Select } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

class StartScheduled extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'New Stream About Stuff',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      streamID: 1,
    }

  }

  //handlers

  YoutubeUrlInput = (event) => {
    this.setState({youtubeURL: event.target.value})
  }

  HandleSubmit = (event) => {
    event.preventDefault();
    //redirect to broadcast page

    // based off of id, start stream 
    // startScheduledStream(IDTOSTART)
    console.log(this.state)
    
  }

  render() {  
    
    return (

      <main className="start-scheduled">
        <header className="header">
          <Button id="dashboard-btn" type="primary">Dashboard</Button>
          <div className="logoPlaceholder">p</div>
        </header>
        <div className="main-container">
          <div>
           <h1>{this.state.title}</h1>
           <p>{this.state.description}</p>
          </div>

          <div className="forms-container">
            <form onSubmit={this.HandleSubmit}>

                <div className="youtube-container">
                  <h3>YouTube URL:</h3>
                  <input type="text" placeholder="https://www.youtube.com/channel/PLACEHOLDER" onChange={this.YoutubeUrlInput} />
                </div>
                <input type="submit" value="Go live!" />
            </form>
          </div>
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
//     startScheduledStream: (fileID) => dispatch(updateFile(fileID))
//   }
// }

export default StartScheduled;
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