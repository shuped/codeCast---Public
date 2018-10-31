import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import rubyImg from '../../../images/ruby.png';
import phpImg from '../../../images/php.png';
import pythonImg from '../../../images/python.png';
import javascriptImg from '../../../images/javascript.png';
import csharpImg from '../../../images/csharp.png';
import htmlcssImg from '../../../images/htmlcss.png';
import { fetchArchivedStreams } from '../../../redux/ducks/streamsDuck.js';
import { Link, withRouter, Route } from 'react-router-dom';
import Stream from '../../../StreamComponents/StreamIndex.jsx';



class ArchivedStreams extends Component { 
  
  componentDidMount() {
    this.props.fetchArchivedStreams();
  }

  GetStreamId = (streamClicked) => {
    console.log(streamClicked);
  }

  MakeStreamCard = (props) => {
    const { title, user, description, scheduledDate, streamID, languageImage } = props;
    let image
    if (languageImage === 'javascript') {
      image = javascriptImg
    }
    if (languageImage === 'ruby') {
      image = rubyImg
    }
    if (languageImage === 'csshtml') {
      image = htmlcssImg
    }
    if (languageImage === 'csharp') {
      image = csharpImg
    }
    if (languageImage === 'python') {
      image = pythonImg
    }
    if (languageImage === 'php') {
      image = phpImg
    }
    return (
      <Link to={`/archived/${streamID}`}> 
        <div className="archievedStreamCard" key={ streamID } onClick={ () => this.GetStreamId(streamID) }>
          <div className="banner">
            <div key={ streamID }>
              <h1>{ title }</h1>
              <h2>{ user }</h2>
              <h3>{ scheduledDate }</h3>
            </div>
            <img className="imagePlaceholder" src={ image } />
          </div>
          <div className="description-container">
            { description }
          </div>
        </div>
      </Link>
    )
  }

  render() {  
    console.log(this.props.archivedStreams)
    
    const renderStreams = this.props.archivedStreams.map( (stream) => {
      return this.MakeStreamCard(stream);  
    });

    return (
      <div>
        <main className="streams">
          { renderStreams }
        </main>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArchivedStreams));