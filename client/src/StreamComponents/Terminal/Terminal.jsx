import React, { Component } from 'react';
import { Terminal } from 'xterm';
import socket from 'socket.io-client';
import 'xterm/src/xterm.css';

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
    
    this.terminal.open(this.__term)
    return (
      <div className='terminal-main'
        ref={(e) => this.__term = e}>
      </div>
    );
  };
}

export default Console;