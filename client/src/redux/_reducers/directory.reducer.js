import { fileConstants } from '../_constants';

// DIRECTORY REDUCER
const directoryState = { directoryStructure: { 'staticKey': {fileNames:['Your Great App'],fileIDs:['uuid']}  }};

export const directoryReducer = (state = directoryState, action) => {
  switch (action.type) {
    case fileConstants.DIRECTORY_UPDATE:
      return { ...state, directoryStructure: action.payload };
    
    default:
      return state;
  }
}
