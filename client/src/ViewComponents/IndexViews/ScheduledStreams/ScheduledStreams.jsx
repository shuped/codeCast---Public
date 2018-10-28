import React, { Component } from 'react';  
import { connect } from 'react-redux';  




class ScheduledStream extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      scheduledStreams: [
        {
          title: 'Python',
          presentor: 'Spencer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Thusday, August 12 2017',
          imagePath: null
        },
        {
          title: 'Javascript',
          presentor: 'Benji',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Wednesday, April 11 2017',
          imagePath: null
        },
        {
          title: 'HTML/CSS',
          presentor: 'Jeff',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Tuesday, March 27 2017',
          imagePath: null
        },
        {
          title: 'Javascript',
          presentor: 'Joel',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Thusday, August 12 2017',
          imagePath: null
        },
        {
          title: 'Haskell',
          presentor: 'Jeremey',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Thusday, August 12 2017',
          imagePath: null
        }
      ]
    };
  
  }



  MakeStreamCard = (props) => {
    const { title, presentor, description, startDate, imagePath } = props;
    // missing image path
    return (
      <div className="currentStream" key={(Math.random()*10).toString().slice(2,6)}>
        <div className="currentStreamBanner">
          <h3>{ title }</h3>
          <h4>{ presentor }</h4>
          <h5>{ startDate }</h5>
        </div>
        <p>{ description }</p>
      </div>
    )
  }

  render() {  
    
    const renderStreams = this.state.scheduledStreams.map( (stream) => {
      return this.MakeStreamCard(stream);  
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

export default connect(null, null)(ScheduledStream);