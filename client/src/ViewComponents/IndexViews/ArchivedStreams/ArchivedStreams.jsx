import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { fetchArchivedStreams } from '../../../redux/ducks/streamsDuck.js'



class ArchivedStreams extends Component {  

  // constructor(props) {  
  //   super(props); 
  //   this.state = {
  //     scheduledStreams: [
  //       {
  //         title: 'Python',
  //         presentor: 'Spencer',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         broadcastDate: 'Thusday, August 12 2017',
  //         archivedId: 1,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Javascript',
  //         presentor: 'Benji',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         broadcastDate: 'Wednesday, April 11 2017',
  //         archivedId: 2,
  //         imagePath: null
  //       },
  //       {
  //         title: 'HTML/CSS',
  //         presentor: 'Jeff',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         broadcastDate: 'Tuesday, March 27 2017',
  //         archivedId: 3,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Node',
  //         presentor: 'Space G',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         broadcastDate: 'Thusday, August 12 2017',
  //         archivedId: 4,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Ruby',
  //         presentor: 'Mandy',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         broadcastDate: 'Wednesday, April 11 2017',
  //         archivedId: 5,
  //         imagePath: null
  //       },
  //       {
  //         title: 'Express',
  //         presentor: 'Silvia',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         broadCastDate: 'Tuesday, March 27 2017',
  //         archivedId: 6,
  //         imagePath: null
  //       }
  //     ]
  //   };
  
  // }

  componentDidMount() {
    this.props.fetchArchivedStreams();
  }

  MakeStreamCard = (props) => {
    const { title, user, description, scheduledDate, streamID, imagePath } = props;
    // missing image path
    return (
      <div className="archievedStreamCard" key={ streamID } onClick={ () => this.GetStreamId(streamID) }>
        <div className="banner">
          <div>
            <h1>{ title }</h1>
            <h2>{ user }</h2>
            <h3>{ scheduledDate }</h3>
          </div>
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
    console.log(this.props.archivedStreams)
    
    const renderStreams = this.props.archivedStreams.map( (stream) => {
      return this.MakeStreamCard(stream);  
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
    archivedStreams: state.streams.archivedStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArchivedStreams: () => dispatch(fetchArchivedStreams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedStreams);