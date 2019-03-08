/* eslint-disable no-console */
import C from '../constants';
import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('ski days: ', store.getState().allSkiDays.length);

  result = next(action);

  let { allSkiDays, goal, errors, resortNames } = store.getState();

  console.log(`
    ski days: ${allSkiDays.length}
    goal: ${goal}
    fetching: ${resortNames.fetching}
    errors: ${errors.length}
  `);

  console.groupEnd();

  return result;
};

// const consoleMessages = function(store) {
//   return function(next) {
//     return function(action) {
      
//     };
//   };
// };

export default (initialState={}) => {
  return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
};