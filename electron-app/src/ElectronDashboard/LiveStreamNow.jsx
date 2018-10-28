import React from 'react';
import { Button } from 'antd';
import { Input, Select } from 'antd';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

const InputGroup = Input.Group;
const Option = Select.Option;

class LiveStreamNow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'placeholder',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdas',
      scheduledDate: Date.now(),
      youtubeURL: '',
      languageImage: 'image'
    }
  }

  //handlers
  TitleOnChange = (event) => {
    this.setState({title: event.target.value});
  }
  
  DescriptionOnChange = (event) => {
    this.setState({description: event.target.value})
  }

  HandleImageSelection = (value) => {
    this.setState({languageImage: value});
    console.log(value)
  }

  YoutubeUrlInput = (event) => {
    this.setState({youtubeURL: event.target.value})
  }

  HandleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: check form validation before terminalOpen
    
    ipcRenderer.send('terminalOpen', true);
    
    // TODO: show broadcasting view
  };
  render() {  
    return (
      <main className="new-stream">
        <header className="header">
          <Button id="dashboard-btn" type="primary">Dashboard</Button>
          <div className="logoPlaceholder">p</div>
        </header>
        <div className="inputs-container">
          <h1>Start New Stream</h1>

          <div className="forms-container">

            <form onSubmit={this.HandleSubmit}>

              <div className="title-input">
                <h3>Title:</h3>
                <input type="text" title={this.state.title} onChange={this.TitleOnChange} />
              </div>
              <div className="description-input">
                <h3>Description:</h3>
                <textarea type="text" rows="4" cols="90" description={this.state.description} onChange={this.DescriptionOnChange} />
              </div>

              <div className=" bottom-container">

                <div className="youtube-container">
                  <h3>YouTube URL:</h3>
                  <input type="text" placeholder="https://www.youtube.com/channel/PLACEHOLDER" onChange={this.YoutubeUrlInput} />
                </div>
                <div className="b-bottom-container">
                  <InputGroup compact>
                    <Select className="image-select" defaultValue="default" onChange={this.HandleImageSelection}>
                      <Option value="default">----</Option>
                      <Option value="image/path1">Node</Option>
                      <Option value="image/path2">Ruby</Option>
                    </Select>
                  </InputGroup>
                  <input type="submit" value="Go live!" />
                </div>

              </div>
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
//     newScheduledStream: (fileID) => dispatch(updateFile(fileID))
//   }
// }

  export default LiveStreamNow;
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