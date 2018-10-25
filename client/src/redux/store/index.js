import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSocketMW from 'redux-socket.io';
import socketIO from 'socket.io-client';
const io = socketIO.connect('http://localhost:8080/redux');


function executor(action, emit, next, dispatch) {
  emit('action', action);
  next(action);
}
const socketMW = createSocketMW(io, 'server/', { execute: executor });

const store = applyMiddleware(socketMW)(createStore)(rootReducer);
store.subscribe(() => {
  console.log('New state:', store.getState());
});

export default store;