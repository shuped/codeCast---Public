export default function (state = { activeFileContents: '', directoryStucture: {} } , action) {
  switch (action.type) {
    case 'FILE_CONTENTS':
      return { ...state, activeFileContents: action.payload }
    
    case 'DIRECTORY_UPDATE':
      return {...state, directoryStucture: action.payload }
  }
}