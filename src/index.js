import C from './constants';
import { goal } from './store/reducers'
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

const state = 10;

const action = {
    type: C.SET_GOAL,
    payload: 15
}

const nextState = goal(state, action);

console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}
`)