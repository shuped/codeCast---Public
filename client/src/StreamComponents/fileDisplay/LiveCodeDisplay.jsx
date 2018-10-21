import React, { Component } from 'react';  
// import { connect } from 'react-redux';  
// import { bindActionCreators } from 'redux';

//code mirror
import Codemirror from 'react-codemirror';  

import StyleList from './StyleDisplay.jsx';

// syntax highlighting
import 'codemirror/mode/javascript/javascript.js';

// add ons 
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closetag.js';
// import 'codemirror/addon/edit/matchtags.js';

class LiveCodeDisplay extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      theme: 'dracula'
    };
  }

  changeDisplayTheme = evt => {
    // typeof evt.target.value
    this.setState({ theme: evt.target.value });
  }

  render() {  

    // codemirror options
    const options = {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      mode: 'javascript', // reference options in folder
      theme: this.state.theme
      //  readOnly: 'nocursor'
    };

    return (
      <div>
        <h1>Lookit this shit bruh</h1>
        <Codemirror 
          value={
            ('const stuff = [1,2,3,4];',
            'var test = function() {a + b};')
          }
          options={ options } />

        <p>Select a theme: 
          <StyleList changeDisplayTheme={ this.changeDisplayTheme } />
        </p>
      </div>
    );
  }
}




export default LiveCodeDisplay;