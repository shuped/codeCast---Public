import { streamsReducer } from './streamsDuck'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  streams: streamsReducer
})

/******************IN CASE  OF EMERGENCY*******************/
/*******************BREAK COMMENT BLOCK********************/
function createReducer(initialState, handlers) {          //
  return function reducer(state = initialState, action) { //
    return handlers.hasOwnProperty(action.type) ?         // 
      handlers[action.type](state, action) : state;       //
  };                                                      //
}                                                         //
function actionCreator(type, ...argNames) {               //
  return function(...args) {                              //
    const action = { type };                              //
    argNames.forEach((arg, i) => {                        //
      action[argNames[i]] = args[i];                      //
    });                                                   //
    return action;                                        //
  };                                                      //
}                                                         // 
/**********************************************************/
/**********************************************************/