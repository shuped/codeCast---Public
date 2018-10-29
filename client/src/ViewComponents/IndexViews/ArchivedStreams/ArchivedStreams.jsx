import React, { Component } from 'react';  
import { connect } from 'react-redux';  
<<<<<<< HEAD
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';
=======
import { fetchArchivedStreams } from '../../../redux/ducks/streamsDuck.js'
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f



class ArchivedStreams extends Component {  

<<<<<<< HEAD
  constructor(props) {  
    super(props); 
    this.state = {
      scheduledStreams: [
        {
          title: 'Javascript',
          presentor: 'Benji',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          broadcastDate: 'Wednesday, April 11 2017',
          archivedId: 2,
          imagePath: javascriptImg
        },
        {
          title: 'HTML/CSS',
          presentor: 'Jeff',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          broadcastDate: 'Tuesday, March 27 2017',
          archivedId: 3,
          imagePath: htmlcssImg
        },
        {
          title: 'Python',
          presentor: 'Spencer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          broadcastDate: 'Thusday, August 12 2017',
          archivedId: 1,
          imagePath: pythonImg
        },
        {
          title: 'Node',
          presentor: 'Space G',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          broadcastDate: 'Thusday, August 12 2017',
          archivedId: 4,
          imagePath: javascriptImg
        },
        {
          title: 'Ruby',
          presentor: 'Mandy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          broadcastDate: 'Wednesday, April 11 2017',
          archivedId: 5,
          imagePath: rubyImg
        },
        {
          title: 'Express',
          presentor: 'Silvia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          broadCastDate: 'Tuesday, March 27 2017',
          archivedId: 6,
          imagePath: javascriptImg
        }
      ]
    };
=======
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
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
  
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
          <img className="imagePlaceholder" src={ imagePath } />
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