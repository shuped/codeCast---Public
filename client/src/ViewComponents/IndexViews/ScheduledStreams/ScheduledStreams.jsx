import React, { Component } from 'react';  
<<<<<<< HEAD
import { connect } from 'react-redux';
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';

=======
import { connect } from 'react-redux';  
import { fetchScheduledStreams } from '../../../redux/ducks/streamsDuck.js'
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f



class ScheduledStreams extends Component {  

<<<<<<< HEAD
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
          imagePath: pythonImg
        },
        {
          title: 'Javascript',
          presentor: 'Benji',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Wednesday, April 11 2017',
          imagePath: javascriptImg
        },
        {
          title: 'HTML/CSS',
          presentor: 'Jeff',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Tuesday, March 27 2017',
          imagePath: htmlcssImg
        },
        {
          title: 'Javascript',
          presentor: 'Joel',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Thusday, August 12 2017',
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
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
  
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
<<<<<<< HEAD
          <h4>{ presentor }</h4>
          <h5>{ startDate }</h5>
          <img className="imagePlaceholder" src={ imagePath } />
=======
          <h4>{ user }</h4>
          <h5>{ scheduledDate }</h5>
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
        </div>
        <p>{ description }</p>
      </div>
    )
  }

  render() {  
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