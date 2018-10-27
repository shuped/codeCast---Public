var React = require('react');
var ReactDOM = require('react-dom');

<<<<<<< HEAD
var Entry = function(){
=======
var Entry = React.createClass({
  render: function() {
>>>>>>> 5c86598303d6c29d111d497b829ff451d5c96158
    return (
      <div className="myDiv">
        Hello Electron!
      </div>
    );
  }

ReactDOM.render(<Entry />, document.getElementById('root'));