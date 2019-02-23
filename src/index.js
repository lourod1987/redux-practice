import C from './constants';
import { skiDay } from './store/reducers'
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

const state = null;

// const action = {
//     type: C.SET_GOAL,
//     payload: 15
// }

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
}

const nextState = skiDay(state, action);

console.log(`
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`)