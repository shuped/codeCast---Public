import React from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';

//code mirror
import Codemirror from 'react-codemirror';  
// import './theme/3024-day.css';  
// import './theme/3024-night.css';  
import 'codemirror/lib/codemirror.css'; 
import 'codemirror/theme/dracula.css';  // more in node modules
import 'codemirror/mode/javascript/javascript.js' // more in node modules


class LiveCodeDisplay extends React.Component {  
  // constructor(props) {  //remove for read only
  //   super(props)  //remove for read only
  //   this.state = {code: ''} //remove for read only
  // }  //remove for read only

  // // componentDidMount() {
  // // }

  // updateCodeInState(newText) {  //remove for read only
  //   this.setState({code: newText}) //remove for read only
  // }  //remove for read only

  render() {  
    const options = {
       lineNumbers: true,
       mode: 'javascript',
       theme: 'dracula'
    }

    return (
      <div>
        <h1>Lookit this shit bruh</h1>
        <Codemirror 
          value={
            "const stuff = [1,2,3,4];",
            "var test = function() {a + b};"
          }

          // value={this.state.code}      //renders text given
          // onChange={this.updateCodeInState.bind(this)}    //remove for read only
          options={options} />  
      </div>
     )
  }
}




export default LiveCodeDisplay;