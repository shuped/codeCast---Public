import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { Link, withRouter } from 'react-router-dom';
import languageImagePicker from '../../../helperFunctions/languagePicker';
import { fetchArchivedStreams } from '../../../redux/ducks/streamsDuck.js';

class ArchivedStreams extends Component { 
  
  componentDidMount() {
    this.props.fetchArchivedStreams();
  }

  GetStreamId = (streamClicked) => {
    console.log(streamClicked);
  }

  MakeStreamCard = (props) => {
    const { title, user, description, scheduledDate, streamID, languageImage } = props;

    return (
      <Link className="link-container" to={`/archived/${streamID}`}> 
        <div className="stream-card active-archived" key={ streamID } onClick={ () => this.GetStreamId(streamID) }>
          <div className="stream-banner">
            <div className="title-container">
              <div className="title">
                <h3>{ title }</h3>
                <h5>{ user }</h5>
              </div>
              <p className="date-time">
                { scheduledDate }
              </p>
            </div>
            <img className="card-img" alt={ languageImage } src={ languageImagePicker(languageImage) } />
          </div>
          <div className="description">
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
      <div className="stream-container">
        <h1 className="index-header">Archived Streams</h1>
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