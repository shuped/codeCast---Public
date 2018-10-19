const counter = (state = {
  counter: 0,
  messages: [{},{}]
}, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state = state + action.payload;

  case 'DECREMENT':
    return state = state - action.payload;
  case 'ADD_MESSAGE':
    return [
      ...state,
      {action.payload.message,
      action.payload.username}
    ]
  default:
    return state;
  }
};

export default counter;