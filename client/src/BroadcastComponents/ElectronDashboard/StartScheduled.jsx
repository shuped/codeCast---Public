import React from 'react';
import { Button } from 'antd';
import { Input, Select } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

class StartScheduled extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'placeholder',
      description: 'asdasdas',
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
    //redirect to broadcast page

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
//     newScheduledStream: (fileID) => dispatch(updateFile(fileID))
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