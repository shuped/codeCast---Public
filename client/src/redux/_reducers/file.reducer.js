import { fileConstants } from '../_constants';


// FILE REDUCER
const fileState = { activeFileContents: 'Welcome to codeCast! Click on a file in the explorer to see its contents!'}
export const fileReducer = (state = fileState, action) => {
  switch (action.type) {
    case fileConstants.FILE_UPDATE:
      return { ...state, activeFileContents: action.payload }
    
    default:
      return state;
  }
}