import React, { Component } from 'react';  
import { connect } from 'react-redux';  
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

import { updateFile, changeMirrorTheme } from '../../redux/actions/index';

const mapStateToProps = (state) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
  updateFile: (file) => dispatch(updateFile(file)),
  changeMirrorTheme: (theme) => dispatch(changeMirrorTheme(theme))
});

class LiveCodeDisplay extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      theme: 'dracula'
    };
  }

  changeDisplayTheme = evt => {
    this.setState({ theme: evt.target.value.toLowerCase() });
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
      <div className="file-container">
        <Codemirror 
          value={
            ('const stuff = [1,2,3,4];',
            'var test = function() {a + b};')
          }
          options={ options } 
        />

        <span className="theme-select-container">
          <p className="select-text">Select a theme: </p>
          <StyleList changeDisplayTheme={ this.changeDisplayTheme } />
        </span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveCodeDisplay);