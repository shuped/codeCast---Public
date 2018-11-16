import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchScheduledStreams } from '../../../redux/ducks/streamsDuck.js';
import languageImagePicker from '../../../helperFunctions/languagePicker';
class ScheduledStreams extends Component {

  componentDidMount() {
    this.props.fetchScheduledStreams();
  }

  MakeStreamCard = (props) => {
    const { title, user, description, scheduledDate, languageImage, streamID } = props;

    return (
      <Link className="link-container" to={ `/scheduled/${streamID}` }>
        <div className="stream-card scheduled" key={ (Math.random()*10).toString().slice(2,6) }>
          <div className="stream-banner">
            <div className="scheduled-title-container">
              <div className="title">
                <h3>{ title }</h3>
                <h5>{ user }</h5>
              </div>
              <p className="date-time">
                { scheduledDate }
              </p>
            </div>
          </div>
          <div className="card-content">
            <p className="scheduled-description">
              { description }
            </p>
          </div>
          <img className="card-img" alt={ languageImage } src={ languageImagePicker(languageImage) } />
        </div>
      </Link>
    )
  }

  render() {
    
    const renderStreams = this.props.scheduledStreams
      .map((stream) => this.MakeStreamCard(stream));

    return (
      <div className="stream-container">
        <h1 className="index-header">Upcoming Streams</h1>
        <main className="streams">
          { renderStreams }
        </main>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduledStreams));