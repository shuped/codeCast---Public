import React, { Component } from 'react';  
import { connect } from 'react-redux';  
// import { bindActionCreators } from 'redux';

//code mirror
import { UnControlled as CodeMirror }from 'react-codemirror2';  
import StyleList from './StyleDisplay.jsx';

// syntax highlighting
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python.js';

// add ons 
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closetag.js';
// import 'codemirror/addon/edit/matchtags.js';

//

import { updateFile, changeMirrorTheme } from '../../redux/actions/index';

const mapStateToProps = (state) => ({
  theme: state.theme,
  // activeFileContents: 'const stuff = [1,2,3,4]; \n    var test = function() {a + b}; '
});

const mapDispatchToProps = (dispatch) => ({
  updateFile: (file) => dispatch(updateFile(file)),
  changeMirrorTheme: (theme) => dispatch(changeMirrorTheme(theme))
});

class LiveCodeDisplay extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      mime: 'text/javascript',
      theme: 'dracula',
      activeFileContents: `var test = [1,2,3,4]; \n    function stuff() {console.log(test)} `
    };
  }

  // changeDisplayMode = (language) => {
  //   editor.setOption("mode", language);
  //   CodeMirror.autoLoadMode(editor, modeInput.value);


  // }

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

    return (
      <div className="file-container">
        <CodeMirror 
          value={ this.state.activeFileContents }
          options={ options } 
          // value={this.state.code}
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