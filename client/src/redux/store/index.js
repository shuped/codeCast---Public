import { createStore, applyMiddleware } from 'redux';
import createSocketMW from 'redux-socket.io';
import socketIO from 'socket.io-client';

import rootReducer from '../reducers/rootReducer';

const io = socketIO.connect('localhost:8080');
const socketMW = createSocketMW(io, 'server/');



const store = applyMiddleware(socketMW)(createStore)(rootReducer);

export default store;