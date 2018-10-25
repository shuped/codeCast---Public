import React, { Component } from 'react';
import { Terminal } from 'xterm';
import socket from 'socket.io-client';

class Console extends Component {
  componentWillMount() {
    this.terminal = new Terminal({scrollback: 99999999});
  }

  componentDidMount() {
    const io = socket.connect('http://localhost:8080/terminal');
    io.on('terminal', (data) => {
      this.terminal.write(data)
    })
  }

  render() {
    // const styles = {
    //   // Absolute positioning
    //   position: 'absolute',
    //   top: 0, bottom: 0,
    //   right: 0, left: 0,

    //   display:'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // };
    return (
      <div className='terminal-main'>
      </div>
    );
  };
}

export default Console;