import uuid from 'uuid'

// Outgoing
const OUTGOING_MESSAGE = 'server/message';
const NEW_CONNECTION = 'server/new_connection';

// Incoming
const INCOMING_MESSAGE = 'NEW_MESSAGE'

// Action Creator
export const newConnection = () => ({ type: NEW_CONNECTION, payload: {} });
export const newMessage = (message) => ({ type: OUTGOING_MESSAGE, payload: { message } });

// CHAT REDUCER
const chatState = { messages: [randomMessage()] }
const chatReducer = (state = chatState, action) => {
  switch(action.type) {
    case INCOMING_MESSAGE:
      console.log('message action', action.payload);
      return {...state, messages: action.payload};

    default:
      return state;
  }
};

export default chatReducer

// State init. utility
function randomMessage() {
  const messageBank = [
    {
      type: 'messages',
      id: uuid(),
      timestamp: new Date(),
      user: { username: 'Joel@LHL', userColor: '#101010' },
      content: 'A monad is just a monoid in the category of endofunctors, what\'s the problem?'
    }
  ]
  return messageBank[Math.floor(Math.random() * messageBank.length)]
}