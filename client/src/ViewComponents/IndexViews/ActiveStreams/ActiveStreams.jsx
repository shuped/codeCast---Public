import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';





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
  
  }

  GetStreamId = (streamClicked) => {
    console.log(streamClicked)
    // react-router code goes here
    // react-router code goes here
    // react-router code goes here
  }

  MakeActiveStreamCard = (props) => {
    const { title, presentor, description, activeStreamId, imagePath } = props;
    // missing image path
    return (
      <div className="activeStreamCard" key={ activeStreamId } onClick={ () => this.GetStreamId( activeStreamId) }>
        <div className="banner">
          <div>
            <h1>{ title }</h1>
            <h2>{ presentor }</h2>
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
    
    const renderStreams = this.state.activeStreams.map( (stream) => {
      return this.MakeActiveStreamCard(stream);  
    });

    return (
      <main className="streams">
        { renderStreams }
      </main>
    );
  }

}

// map state to props, keep

// const mapStateToProps = (state) => ({
//   theme: state.theme,
// });

export default connect(null, null)(ActiveStreams);