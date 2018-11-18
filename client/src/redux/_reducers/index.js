import { combineReducers } from 'redux'

import { fileReducer } from './file.reducer.js';
import { directoryReducer } from './directory.reducer.js';
import { chatReducer } from './chat.reducer.js';
import { streamsReducer } from './streams.reducer.js';

const appReducer = combineReducers({
  file: fileReducer,
  directory: directoryReducer,
  chat: chatReducer,
  streams: streamsReducer
});

export const rootReducer = (state, action) => {
  // this sets the other states to 'undefined', which triggeres default state
  if (action.type === 'RESET_APP') {
    const { streams } = state;
    state = { streams };
  };

  return appReducer(state, action);
};