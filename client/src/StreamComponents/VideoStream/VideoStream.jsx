import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className='video-main'>
        <iframe className='iframe' src={this.props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    );
  };
};

export default Video;
