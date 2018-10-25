import React, { Component } from 'react';  
import { connect } from 'react-redux';  

//code mirror
import { UnControlled as CodeMirror }from 'react-codemirror2';  
import StyleList from './StyleDisplay.jsx';

// syntax highlighting
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python.js';

// add ons 
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closetag.js';
// will be useful
// import 'codemirror/addon/edit/matchtags.js';

class LiveCodeDisplay extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      mime: 'text/javascript',
      theme: 'dracula',
      file: 'test'
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
      mode: this.state.mime, // reference options in folder
      theme: this.state.theme
      //  readOnly: 'nocursor'
    };
    console.log(this.props.activeFileContents);

    return (
      <div className="file-container">
        <CodeMirror 
          value={ this.props.activeFileContents }
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

const mapStateToProps = (state) => ({
  activeFileContents: state.file.activeFileContents,
});

export default connect(mapStateToProps)(LiveCodeDisplay);