import randomMessage from '../../StreamComponents/Chat/messages/initialMessageUtil'
import { chatConstants } from '../_constants/';

// CHAT REDUCER
const chatState = { 
  messages: [randomMessage()], 
  notifications: [],
  username: 'anon'
};

export const chatReducer = (state = chatState, action) => {
  switch(action.type) {
    case chatConstants.INCOMING_MESSAGE:
      return {...state, messages: [...state.messages, action.payload] };

    case chatConstants.INCOMING_NOTIFICATION:
      return {...state, notifications: action.payload}

    case chatConstants.USERNAME_CHANGE: 
      // Should be moved to user reducer when
      // more user actions can be defined
      return {...state, username: action.payload}
      
    default:
      return state;
  }
};