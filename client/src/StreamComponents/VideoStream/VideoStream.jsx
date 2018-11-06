import React, { Component } from 'react';
import axios from '../../redux/ducks/api.js';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {url: 'https://www.youtube.com/embed/'}
  };

  componentDidMount() {
    const { streamID } = this.props;
    axios({
      method: 'get',
      url: `/api/query?id=${streamID}&field=youtubeURL`
    }).then((res) => {
      this.setState({url: res.data})
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className='video-main'>
        <iframe className='iframe' src={this.state.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    );
  };
};

export default Video;
