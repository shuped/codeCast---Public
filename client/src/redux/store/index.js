import { createStore, applyMiddleware, combineReducers } from 'redux';
import { fileReducer, directoryReducer, chatReducer } from '../reducers/rootReducer';
import createSocketMW from 'redux-socket.io';
import socketIO from 'socket.io-client';
const io = socketIO.connect('http://localhost:8080/redux');


function executor(action, emit, next, dispatch) {
  emit('action', action);
  next(action);
}
const socketMW = createSocketMW(io, 'server/', { execute: executor });

const rootReducer = combineReducers({
  file: fileReducer,
  directory: directoryReducer,
  chat: chatReducer
})
const store = applyMiddleware(socketMW)(createStore)(rootReducer);
store.subscribe(() => {
  console.log('New state:', store.getState());
});

export default store;