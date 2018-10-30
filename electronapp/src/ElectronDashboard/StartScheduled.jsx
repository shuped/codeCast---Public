import React from 'react';
import { Button } from 'antd';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';
import { putScheduledStream } from '../redux/ducks/streamsDuck';


const InputGroup = Input.Group;
const Option = Select.Option;

class StartScheduled extends React.Component {

  constructor() {
    super();
    this.state = {
      youtubeURL: 'www.youtube.ca'
    }
  }

  YoutubeUrlInput = (event) => {
    this.setState({youtubeURL: event.target.value})
  }

  HandleSubmit = (event) => {
    event.preventDefault();
    //redirect to broadcast page
    this.props.startScheduledStream({
      ...this.props.stagedStream,
      isActive:true,
      youtubeURL: this.state.youtubeURL
    });
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

const mapStateToProps = (state) => {
  return {
    stagedStream: state.streams.stagedStream
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startScheduledStream: (stream) => dispatch(putScheduledStream(stream)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScheduled);
