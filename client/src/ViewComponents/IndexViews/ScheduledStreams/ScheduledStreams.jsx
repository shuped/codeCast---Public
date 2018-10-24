import React, { Component } from 'react';  
import { connect } from 'react-redux';  




class ScheduledStream extends Component {  

  constructor(props) {  
    super(props); 
    this.state = {
      scheduledStreams: {
        stream1: {
          title: 'Python',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Thusday, Aug 12 2016',
          image: null
        },
        stream1: {
          title: 'Javascript',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          startDate: 'Wednesday, April 11 2017',
          image: null
        }
      }
    };
  }



 MakeStreamCard = (props) => {
  // const { title, description, startDate, image } = props.message;
  return (
    <div className="message" >
      <span className="message-username" style={{color: color}}>{username}</span>
      <span className="message-content">{content}</span>
    </div>
  )
}

function MessageList(props) {

  const passedMessages = props.messages.map( (message) => {
    return (
      message.type === 'incomingMessage'
        ? <ChatMessage key={message.id} message={message}/>
        : <SystemMessage key={message.id} message={message} />
    )
  });
  return (
    <main className="messages">
      {passedMessages}
    </main>
  );
}

export default MessageList;

  render() {  

    return (
      <div className="Upcoming-container">
        <p>Hello world</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   theme: state.theme,
// });

export default connect(mapStateToProps, null)(ScheduledStream);