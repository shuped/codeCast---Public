import React, { Component } from 'react';  
import { connect } from 'react-redux';
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';





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
          <img className="imagePlaceholder" src={ imagePath } />
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