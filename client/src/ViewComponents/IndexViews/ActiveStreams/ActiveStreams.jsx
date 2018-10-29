import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';
import { fetchActiveStreams } from '../../../redux/ducks/streamsDuck.js'



class ActiveStreams extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      activeStreams: [
        {
          title: 'Python',
          presentor: 'Spencer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          activeStreamId: 1,
          imagePath: pythonImg
        },
        {
          title: 'Javascript',
          presentor: 'Benji',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          activeStreamId: 2,
          imagePath: javascriptImg
        },
        {
          title: 'HTML/CSS',
          presentor: 'Jeff',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          activeStreamId: 3,
          imagePath: htmlcssImg
        },
        {
          title: 'Node',
          presentor: 'Space G',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          activeStreamId: 4,
          imagePath: javascriptImg
        },
        {
          title: 'Ruby',
          presentor: 'Mandy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          activeStreamId: 5,
          imagePath: rubyImg
        },
        {
          title: 'C Sharp',
          presentor: 'Silvia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet,',
          activeStreamId: 6,
          imagePath: csharpImg
        }
      ]
    };
  
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
          <img className="imagePlaceholder" src={ imagePath } />
        </div>
        <div className="description-container">
          { description }
        </div>
      </div>
    )
  }

  render() {  
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