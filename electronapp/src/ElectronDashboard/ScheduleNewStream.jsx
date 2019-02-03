import React from "react";
import { Button } from "antd";
import { Input, Select, DatePicker } from "antd";
import { connect } from "react-redux";

import { postScheduledStream } from "../redux/ducks/streamsDuck.js";
import { withRouter, Link, Redirect } from "react-router-dom";

const InputGroup = Input.Group;
const Option = Select.Option;

class ScheduleNewStream extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Untitled",
      userID: "Anon",
      user: "anon",
      description: "No description provided. Could be interesting!",
      scheduledDate: "",
      languageImage: "javascript"
    };
  }

  //handlers
  HandleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onOk = value => {
    this.setState({ scheduledDate: value["_d"] });
    // console.log('onOk: ', value);
  };

  HandleImageSelection = value => {
    this.setState({ languageImage: value });
    console.log(value);
  };

  HandleSubmit = event => {
    event.preventDefault();
    //redirect to broadcast page
    this.props.postScheduledStream(this.state);
    console.log(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <main className="new-stream">
        <div className="inputs-container">
          <h1 className="container-header">Schedule A Stream</h1>

          <div className="forms-container">
            <form onSubmit={this.HandleSubmit}>
              <div className="title-input">
                <div className="">
                  <h3>Title:</h3>
                  <input
                    type="text"
                    placeholder="Title..."
                    name="title"
                    onChange={this.HandleInputChange}
                  />
                </div>
                <div className="">
                  <h3>Username:</h3>
                  <input
                    type="text"
                    placeholder="John Carmack..."
                    name="user"
                    onChange={this.HandleInputChange}
                  />
                </div>
              </div>

              <div className="description-input">
                <h3>Description</h3>
                <textarea
                  type="text"
                  placeholder="What project are you sharing today?"
                  rows="4"
                  cols="90"
                  name="description"
                  onChange={this.HandleInputChange}
                />
              </div>


              <div className=" bottom-container">
                <h3>Date:</h3>
                <input type="text" placeholder="Type your date..." name='scheduledDate' onChange={this.HandleInputChange} />
                
              </div>

              <div className="b-bottom-container">
                <input className="launch-btn schedule-btn" type="submit" value="Schedule!" />
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

// leave in

// const mapStateToProps = (state) => {
//   return {
//     userID: state.user.userID
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    postScheduledStream: streamData => dispatch(postScheduledStream(streamData))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ScheduleNewStream)
);
