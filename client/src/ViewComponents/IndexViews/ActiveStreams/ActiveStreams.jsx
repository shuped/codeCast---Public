import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { Link, withRouter } from 'react-router-dom';
import languageImagePicker from '../../../helperFunctions/languagePicker';
import { fetchActiveStreams } from '../../../redux/ducks/streamsDuck.js';



class ActiveStreams extends Component {  

  componentDidMount() {
    console.log("Spaghetti");
    this.props.fetchActiveStreams();
  }

  GetStreamId = (streamClicked) => {
    console.log(streamClicked);
  }

  MakeActiveStreamCard = (props) => {
    const { title, user, description, streamID, languageImage } = props;

    return (
      <Link className="link-container" to={`/active/${streamID}`}>
        <div className="stream-card active-archived" key={ streamID } onClick={ () => this.GetStreamId(streamID) }>
          <div className="stream-banner">
            <div className="title-container">
              <div className="title">
                <h3>{ title }</h3>
                <h5>{ user }</h5>
              </div>
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
    const renderStreams = this.props.activeStreams
      .reverse()
      .map( (stream) => {
        return this.MakeActiveStreamCard(stream);  
    });

    return (
      <div className="stream-container">
        <h1 className="index-header">Streaming Now</h1>
        <main className="streams">
          { renderStreams }
        </main>
      </div>
      
    );
  }

}

const mapStateToProps = (state) => {
  return {
    activeStreams: state.streams.activeStreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActiveStreams: () => dispatch(fetchActiveStreams())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActiveStreams));