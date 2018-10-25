import { combineReducers } from 'redux';


// FILE REDUCER
const fileState = { activeFileContents: ''}
const fileReducer = (state = fileState, action) => {
  switch (action.type) {
    case 'FILE_CONTENTS':
      return { ...state, activeFileContents: action.payload }
    
    default:
      return state;
  }
}


// DIRECTORY STRUCTURE
const directoryState = {directoryStructure: ''};
const directoryReducer = (state = directoryState, action) => {
  switch (action.type) {
    case 'DIRECTORY_UPDATE':
      console.log('directory_update action', action)
      return { ...state, directoryStructure: action.payload };
    
    default:
      console.log('Dir reducer defaulted', action)
      return state;
  }
}



// CHAT REDUCER
const chatState = {messages: []}
const chatReducer = (state = chatState, action) => {
  switch(action.type) {
    case 'server/message':
      console.log('server/message', action.payload);
      return {...state, messages: action.payload};

    default:
      console.log('Chat Reducer Defaulted', action)
      return state;
  }
};




export default combineReducers({
  chatReducer,
  directoryReducer,
  fileReducer
});



/******************IN CASE  OF EMERGENCY*******************/
/*******************BREAK COMMENT BLOCK********************/
function createReducer(initialState, handlers) {          //
  return function reducer(state = initialState, action) { //
    return handlers.hasOwnProperty(action.type) ?         // 
      handlers[action.type](state, action) : state;       //
  };                                                      //
}                                                         // 
/**********************************************************/
/**********************************************************/

