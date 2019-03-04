/* eslint-disable no-console */
/* eslint-disable quotes */
import C from './constants';
import expect from 'expect';
import { suggestions, fetching } from './store/reducers';
// import { allSkiDays, goal } from './initialState.json';

// console.log(`
//     Ski Day Counter
//     ===============
//     The goal is ${goal} days
//     Initially there are ${allSkiDays.length} ski days in state

//     Constants (actions)
//     -------------------
//     ${Object.keys(C).join('\n     ')}
// `);

// const action = {
//     type: C.SET_GOAL,
//     payload: 15
// }

// const action = {
//   type: C.CLEAR_ERROR,
//   payload: 0
// };



// const nextState = allSkiDays(state, action);

// console.log(`
//   initial state: ${JSON.stringify(state)}
//   action: ${JSON.stringify(action)}
//   new state: ${JSON.stringify(nextState)}
// `);

// const action = {
//   type: C.CANCEL_FETCHING
// };

// const state = true;
// const expectedState = false;
// const actualState = fetching(state, action);

// expect(actualState).toEqual(expectedState);

// console.log(`
//   Challenge B: CANCEL_FETCHING PASSED!!!
// `);

// const action = {
//   type: C.CLEAR_SUGGESTIONS
// };

// const state = ['Heavenly Ski Resort', 'Heavens Sonohara'];
// const expectedState = [];

// const actualState = suggestions(state, action);

// expect(actualState).toEqual(expectedState);

// console.log(`
// //   Challenge C: CLEAR_SUGGESTIONS PASSED!!!
// // `);

const action = {
  type: C.CHANGE_SUGGESTIONS,
  payload: ['Heavenly Ski Resort', 'Heavens Sonohara']
};

const state = {
  fetching: true,
  suggestions: []
};

const expectedState = {
  fetching: false,
  suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara']
};

const actualState = {
  fetching: fetching(state.fetching, action),
  suggestions: suggestions(state.suggestions, action)
};

expect(actualState.suggestions).toEqual(expectedState.suggestions);
expect(actualState.fetching).toEqual(expectedState.fetching);

console.log(`
  Challenge D: CHANGE_SUGGESTIONS PASSED!!!
`);