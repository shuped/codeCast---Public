import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className='video-main'>
        <iframe className='iframe' src="https://www.youtube.com/embed/grEKMHGYyns" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  };
}

export default Video;
