import React, { Component } from 'react';
import { Button } from 'antd';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';

const InputGroup = Input.Group;
const Option = Select.Option;

class StartScheduled extends Component {

  constructor() {
    super();
    this.state = {
      youtubeURL: 'Enter the URL for your youtube LiveStream here'
    };
  };

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
           <h1>{this.props.stagedStream.title}</h1>
           <p>{this.props.stagedStream.description}</p>
          </div>

          <div className="forms-container">
            <form onSubmit={this.HandleSubmit}>

                <div className="youtube-container">
                  <h3>YouTube URL:</h3>
                  <input type="text" placeholder='Enter the URL for your youtube LiveStream here' onChange={this.YoutubeUrlInput} />
                </div>
                <input type="submit" value="Go live!" />
            </form>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stagedStream: state.streams.stagedStream
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startScheduledStream: (fileID) => dispatch(updateFile(fileID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScheduled);