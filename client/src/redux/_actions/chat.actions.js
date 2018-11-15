import { chatConstants } from '../_constants';

export const chatActions = {
  newConnection,
  sendMessage,
  changeUsername
}

const newConnection = () => ({ type: chatConstants.NEW_CONNECTION, payload: {} });

const sendMessage = (message) => ({ type: chatConstants.OUTGOING_MESSAGE, payload: { message } });

const changeUsername = (username) => ({ type: chatConstants.USERNAME_CHANGE, payload: { username } });