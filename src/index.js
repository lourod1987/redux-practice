import C from './constants';
import { errors } from './store/reducers'
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

const state = [
    "user not authorized",
    "server feed not found"
];

// const action = {
//     type: C.SET_GOAL,
//     payload: 15
// }

const action = {
    type: C.CLEAR_ERROR,
    payload: 0
}

const nextState = errors(state, action);

console.log(`
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)