var React = require('react');
var ReactDOM = require('react-dom');

var Entry = function(){
    return (
      <div className="myDiv">
        Hello Electron!
      </div>
    )
  }

ReactDOM.render(<Entry />, document.getElementById('root'));