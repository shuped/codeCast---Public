import React, { Component } from 'react';
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import socket from 'socket.io-client';
import 'xterm/src/xterm.css';

class Console extends Component {
  constructor(props) {
    super(props);
    this.__term = null;
    this.terminal = null;
    this.setTermRef = (e) => {
      this.__term = e;
      this.terminal.open(this.__term);
      this.terminal.fit()
    };
    // TODO: put terminalRecord in redux when we implement archive video playback
    this.state = { terminalRecord: {'0': '>>Browse the broadcaster\'s terminal output in this window.'} };
  }

  componentWillMount() {
    Terminal.applyAddon(fit);
    this.terminal = new Terminal({
      scrollback: 99999999,
      cursorBlink: true
    });
  };

  componentDidMount() {
    const io = socket
    .connect('http://codecastserver-prod.us-west-2.elasticbeanstalk.com/:8080/terminal')
    .on('terminal', (timestamp, data) => {
      this.setState({ terminalRecord: {...this.terminalRecord, [timestamp]: data} });
      this.terminal.write(data);
    })
    .on('terminalRecord', (terminalRecord) => {
      this.setState({ terminalRecord });
      let terminalRecordData = Object.values(terminalRecord).join('')
      this.terminal.write(terminalRecordData);
    });
    io.emit('join', this.props.streamID)
  }

  render() {
    return (
      <div className="wrapper">
        <div className='terminal-main'
          ref={this.setTermRef}>
        </div>
      </div>
    );
  };
}

export default Console;