import React from 'react';  
import { connect } from 'react-redux';  
import { bindActionCreators } from 'redux';

//code mirror
import Codemirror from 'react-codemirror';  
import '../theme/3024-day.css';  
import '../theme/3024-night.css';  
import 'codemirror/mode/javascript/javascript.js'


class LiveCodeDisplay extends React.Component {  
  componentDidMount() {
  }

  render() {  
    const options = {
       lineNumbers: true,
       mode: 'javascript',
       theme: 'monokai'
    }

    return (
      <div>
        <Codemirror 
          value={"hello world!"} 
          onChange={coming soon!} 
          options={options} />
      </div>
     )
  }
}




export default LiveCodeDisplay;