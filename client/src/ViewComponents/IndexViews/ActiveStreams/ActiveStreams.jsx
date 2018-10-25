import React, { Component } from 'react';  
import { connect } from 'react-redux';  




class ActiveStreams extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      activeStreams: [
        {
          title: 'Python',
          presentor: 'Spencer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          ActiveStreamId: 1,
          imagePath: null
        },
        {
          title: 'Javascript',
          presentor: 'Benji',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          ActiveStreamId: 2,
          imagePath: null
        },
        {
          title: 'HTML/CSS',
          presentor: 'Jeff',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          ActiveStreamId: 3,
          imagePath: null
        },
        {
          title: 'Node',
          presentor: 'Space G',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          ActiveStreamId: 1,
          imagePath: null
        },
        {
          title: 'Ruby',
          presentor: 'Mandy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          ActiveStreamId: 2,
          imagePath: null
        },
        {
          title: 'Express',
          presentor: 'Silvia',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet,',
          ActiveStreamId: 3,
          imagePath: null
        }
      ]
    };
  
  }

  // this.props['../somestuff/what/#{}']


  MakeActiveStreamCard = (props) => {
    const { title, presentor, description, ActiveStreamId, imagePath } = props;
    // missing image path
    return (
      <div className="activeStreamCard" key={ (Math.random()*10).toString().slice(2,6) }>
        <div className="banner">
          <div>
            <h1>{ title }</h1>
            <h2>{ presentor }</h2>
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

// const mapStateToProps = (state) => ({
//   theme: state.theme,
// });

export default connect(null, null)(ActiveStreams);