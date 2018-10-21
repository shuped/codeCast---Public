import { combineReducers } from 'redux';

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return handlers.hasOwnProperty(action.type) ? 
      handlers[action.type](state, action) : state;
  };
}

const rootReducer = (state = {messages: []}, action) => {
  switch(action.type) {
  case 'server/message':
    console.log('Action data:', action.payload);
    return {...state, messages: action.payload};
  default:
    return state;
  }
};

const newReducer = createReducer({}, {
 
});

export const reducers = combineReducers({
  rootReducer,
  newReducer
});

export default rootReducer;