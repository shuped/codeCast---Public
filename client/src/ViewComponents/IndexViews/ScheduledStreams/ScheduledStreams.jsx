import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { fetchScheduledStreams } from '../../../redux/ducks/streamsDuck.js'



class ScheduledStreams extends Component {  

  // constructor(props) {  
  //   super(props); 
  //   this.state = {
  //     scheduledStreams: [
  //       {
  //         title: 'Python',
  //         presentor: 'Spencer',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         startDate: 'Thusday, August 12 2017',
  //         imagePath: null
  //       },
  //       {
  //         title: 'Javascript',
  //         presentor: 'Benji',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         startDate: 'Wednesday, April 11 2017',
  //         imagePath: null
  //       },
  //       {
  //         title: 'HTML/CSS',
  //         presentor: 'Jeff',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         startDate: 'Tuesday, March 27 2017',
  //         imagePath: null
  //       },
  //       {
  //         title: 'Javascript',
  //         presentor: 'Joel',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         startDate: 'Thusday, August 12 2017',
  //         imagePath: null
  //       },
  //       {
  //         title: 'Haskell',
  //         presentor: 'Jeremey',
  //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //         startDate: 'Thusday, August 12 2017',
  //         imagePath: null
  //       }
  //     ]
  //   };
  
  // }
  componentDidMount() {
    this.props.fetchScheduledStreams();
  }


  MakeStreamCard = (props) => {
    const { title, user, description, scheduledDate, imagePath } = props;
    // missing image path
    return (
      <div className="currentStream" key={(Math.random()*10).toString().slice(2,6)}>
        <div className="currentStreamBanner">
          <h3>{ title }</h3>
          <h4>{ user }</h4>
          <h5>{ scheduledDate }</h5>
        </div>
        <p>{ description }</p>
      </div>
    )
  }

  render() {  
    console.log(this.props.scheduledStreams)
    const renderStreams = this.props.scheduledStreams.map( (stream) => {
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
    scheduledStreams: state.streams.scheduledStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScheduledStreams: () => dispatch(fetchScheduledStreams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledStreams);