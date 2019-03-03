/* eslint-disable no-console */
/* eslint-disable quotes */
import C from './constants';
import expect from 'expect';
import { fetching } from './store/reducers';
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

const action = {
  type: C.FETCH_RESORT_NAMES
};

const state = false;
const expectedState = true;
const actualState = fetching(state, action);

expect(actualState).toEqual(expectedState);

console.log(`
  Challenge A: FETCH_RESORT_NAMES PASSED!!!
`);