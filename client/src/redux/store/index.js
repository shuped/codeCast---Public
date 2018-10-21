import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers/rootReducer';
import createSocketMW from 'redux-socket.io';
import socketIO from 'socket.io-client';
const io = socketIO.connect('localhost:8080');

let lastAction = {};
function executor(action, emit, next, dispatch) {
  if (action && action.type !== lastAction.type && action.payload !== lastAction.payload) {
    lastAction = action;
    emit('action', action);
  }
  next(action);
}

const socketMW = createSocketMW(io, 'server/', { execute: executor });

const store = applyMiddleware(socketMW)(createStore)(reducers);
store.subscribe(() => {
  console.log('New state:', store.getState());
});

export default store;