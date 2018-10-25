// Types
const FILE_UPDATE = 'FILE_UPDATE'

// Actions:
//  Outgoing

//  Incoming

// FILE REDUCER
const fileState = { activeFileContents: 'Welcome to codeCast! Click on a file in the explorer to see its contents!'}
const fileReducer = (state = fileState, action) => {
  switch (action.type) {
    case FILE_UPDATE:
      return { ...state, activeFileContents: action.payload }
    
    default:
      return state;
  }
}

export default fileReducer;