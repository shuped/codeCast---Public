import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { fetchActiveStreams } from '../../../redux/ducks/streamsDuck.js'



class ActiveStreams extends Component {  

  // constructor(props) {  
  //   super(props); 
  //   this.state = {
  //     activeStreams: [
  //       {
  //         title: 'Python',
  //         presentor: 'Spencer',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         activeStreamId: 1,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Javascript',
  //         presentor: 'Benji',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         activeStreamId: 2,
  //         imagePath: null
  //       },
  //       {
  //         title: 'HTML/CSS',
  //         presentor: 'Jeff',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         activeStreamId: 3,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Node',
  //         presentor: 'Space G',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         activeStreamId: 4,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Ruby',
  //         presentor: 'Mandy',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         activeStreamId: 5,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Express',
  //         presentor: 'Silvia',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet,',
  //         activeStreamId: 6,
  //         imagePath: null
  //       }
  //     ]
  //   };
  
  // }

  componentDidMount() {
    this.props.fetchActiveStreams();
  }

  GetStreamId = (streamClicked) => {
    console.log(streamClicked)
    // react-router code goes here
    // react-router code goes here
    // react-router code goes here
  }

  MakeActiveStreamCard = (props) => {
    const { title, user, description, streamID, imagePath } = props;
    // missing image path
    return (
      <div className="activeStreamCard" key={ streamID } onClick={ () => this.GetStreamId( streamID) }>
        <div className="banner">
          <div>
            <h1>{ title }</h1>
            <h2>{ user }</h2>
          </div>
          {/* to use for image later */}
          {/* <img src="#imagePath" /> */}
          <div className="imagePlaceholder">p</div>
        </div>
        <div className="description-container">
          { description }
        </div>
      </div>
    )
  }

  render() {  
    console.log(this.props.activeStreams)
    const renderStreams = this.props.activeStreams.map( (stream) => {
      return this.MakeActiveStreamCard(stream);  
    });

    return (
      <main className="streams">
        { renderStreams }
      </main>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    activeStreams: state.streams.activeStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActiveStreams: () => dispatch(fetchActiveStreams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveStreams);