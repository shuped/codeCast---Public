import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://www.youtube.com/embed/KY2kM3Tzg-w'
    }
  }
  render() {
    return (
      <div className="video-main">
        <iframe title="codeCast-video-window" className="iframe" src={ this.state.url } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    );
  };
}

//TODO: Set up Redux duck to import URL

const mapStateToProps = (state) => ({
  activeFileContents: state.streamURL,
});

export default connect(mapStateToProps)(Video);

//old src: "https://www.youtube.com/embed/KY2kM3Tzg-w"