import React, { Component } from 'react';  
import { connect } from 'react-redux';  




class ScheduledStream extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      scheduledStreams: [
        {
          title: 'Python',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Thusday, Aug 12 2016',
          image: null
        },
        {
          title: 'Javascript',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Wednesday, April 11 2017',
          image: null
        }
      ]
    };
  
  }



  MakeStreamCard = (props) => {
    const { title, description, startDate, imagePath } = props;
    // missing image path
    return (
      <div className="upStream" >
        <div className="upStreamBanner">
          <h3>{ title }</h3>
          <h5>{ startDate }</h5>
        </div>
        <p>{ description }</p>
      </div>
    )
  }

  render() {  
    
    const renderStreams = this.state.scheduledStreams.map( (stream) => {
      return this.MakeStreamCard(stream)  
    });

    return (
      <main className="streams">
        {renderStreams}
      </main>
    );
  }

}

// const mapStateToProps = (state) => ({
//   theme: state.theme,
// });

export default connect(null, null)(ScheduledStream);