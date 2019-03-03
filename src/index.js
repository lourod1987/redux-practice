/* eslint-disable quotes */
import C from './constants';
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

const state = false;
const expectedState = true;
const actualState = fetching(state, action);

expectedState(actualState).toEqual(expectedState);

// const action = {
//     type: C.SET_GOAL,
//     payload: 15
// }

// const action = {
//   type: C.CLEAR_ERROR,
//   payload: 0
// };

const action = {
  type: C.FETCH_RESORT_NAMES
};

const nextState = allSkiDays(state, action);

console.log(`
  Challenge A: FETCH_RESORT_NAMES PASSED!!!
`);

// console.log(`
//   initial state: ${JSON.stringify(state)}
//   action: ${JSON.stringify(action)}
//   new state: ${JSON.stringify(nextState)}
// `);