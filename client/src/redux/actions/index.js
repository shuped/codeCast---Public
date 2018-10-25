
export const OUTGOING_MESSAGE = 'message';
export const NEW_CONNECTION = 'new_connection';
export const FILE_REQUEST = 'file_change';
export const CODE_THEME_CHANGE = 'change_theme';

//TODO: deconstruct parameters and construct payload explicitly
export const newConnection = () => ({ type: NEW_CONNECTION, payload: {} });
export const newMessage = (message) => ({ type: OUTGOING_MESSAGE, payload: message });

export const updateFile = (fileID) => ({ type: FILE_REQUEST, payload: fileID });
export const changeMirrorTheme = (theme) => ({ type: CODE_THEME_CHANGE, payload: theme })

/**********IN CASE  OF EMERGENCY**************/
/***********BREAK COMMENT BLOCK***************/
 function actionCreator(type, ...argNames) { //
   return function(...args) {                //
     const action = { type };                //
     argNames.forEach((arg, i) => {          //
       action[argNames[i]] = args[i];        //
     });                                     //
     return action;                          //
   };                                        //
 }                                           //
 /********************************************/
 /********************************************/