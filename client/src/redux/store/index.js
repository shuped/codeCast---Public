import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../_reducers/index.js';
import createSocketMW from 'redux-socket.io';
import socketIO from 'socket.io-client';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const io = socketIO.connect('http://codecastserver-prod.us-west-2.elasticbeanstalk.com/:8080/redux');

const socketMW = createSocketMW(io, 'server/', { execute: executor });

function executor(action, emit, next, dispatch) {
  emit('action', action);
  next(action);
}

const middleware = [
  socketMW,
  thunk,
  logger
];

const store = applyMiddleware(...middleware)(createStore)(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
