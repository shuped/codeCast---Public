import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className='video-main'>
        <iframe width="420" height="315"
          src="https://www.youtube.com/watch?v=hHW1oY26kxQ">
        </iframe>
      </div>
    );
  };
}

export default Video;