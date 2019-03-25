/* eslint-disable no-console */
/* eslint-disable quotes */
import C from './constants';
import storeFactory from './store';
import { addDay, removeDay, setGoal,
  addError, clearError, changeSuggestions, clearSuggestions, randomGoals, suggestResortNames
} from './actions';
// import appReducer from './store/reducers';
// import initialState from './initialState.json';
// import { createStore } from 'redux';


const store = storeFactory();

store.dispatch(
  suggestResortNames("hea")
);

// store.dispatch(
//   addDay("Heavenly", "2016-12-22")
// );

// store.dispatch(
//   removeDay("2016-12-22")
// );

// store.dispatch(
//   setGoal(55)
// );

// store.dispatch(
//   addError("something went wrong")
// );

// store.dispatch(
//   clearError(0)
// );

// store.dispatch(
//   changeSuggestions(['One', 'Two', 'Three'])
// );

// store.dispatch(
//   clearSuggestions()
// );

// store.dispatch(
//   randomGoals()
// );

// const initialState = (localStorage['redux-store']) ?
//   JSON.parse(localStorage['redux-store']) :
//   {};

// const saveState = () => {
//   const state = JSON.stringify(store.getState());
//   localStorage['redux-store'] = state;
// };

// const store = storeFactory(initialState);

// store.subscribe(saveState);

// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     'resort': 'Mt Shasta',
//     'date': '2016-10-28',
//     'powder': true,
//     'backcountry': true
//   }
// });

// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     'resort': 'Squaw Valley',
//     'date': '2016-3-28',
//     'powder': true,
//     'backcountry': false
//   }
// });

// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     'resort': 'The Canyons',
//     'date': '2016-1-2',
//     'powder': false,
//     'backcountry': true
//   }
// });

// const initialState = (localStorage['redux-store']) ? 
//   JSON.parse(localStorage['redux-store']) :
//   {};

// const store = createStore(appReducer);

// const unsubscribeGoalLogger = store.subscribe(() => console.log(`    Goal: ${store.getState().goal}`));

// setInterval(() => {
//   store.dispatch({
//     type: C.SET_GOAL,
//     payload: Math.floor(Math.random() * 100)
//   });
// }, 250);

// setTimeout(() => {
//   unsubscribeGoalLogger();
// }, 3000);

// const store = createStore(appReducer, initialState);

// store.subscribe( () => console.log(store.getState()));

// store.subscribe( () => {
//   const state = JSON.stringify(store.getState());
//   localStorage['redux-store'] = state;
// });


// window.store = store;
// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     'resort': 'Mt Shasta',
//     'date': '2016-10-28',
//     'powder': false,
//     'backcountry': true
//   }
// });

// store.dispatch({
//   type: C.SET_GOAL,
//   payload: 2
// });
