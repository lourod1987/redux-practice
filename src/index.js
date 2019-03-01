/* eslint-disable quotes */
import C from './constants';
import { errors } from './store/reducers';
// import { allSkiDays, goal } from './initialState.json';
import { allSkiDays } from './store/reducers';

// console.log(`
//     Ski Day Counter
//     ===============
//     The goal is ${goal} days
//     Initially there are ${allSkiDays.length} ski days in state

//     Constants (actions)
//     -------------------
//     ${Object.keys(C).join('\n     ')}
// `);

const state = [
  {
    "resort": "Kirkwood",
    "date": "2016-12-15",
    "powder": true,
    "backcountry": false
  }
];

// const action = {
//     type: C.SET_GOAL,
//     payload: 15
// }

// const action = {
//   type: C.CLEAR_ERROR,
//   payload: 0
// };

const action = {
  type: C.ADD_DAY,
  payload: {
    "resort": "Boreal",
    "date": "2016-12-15",
    "powder": false,
    "backcountry": false
  }
};

const nextState = allSkiDays(state, action);

console.log(`
  initial state: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}
`);