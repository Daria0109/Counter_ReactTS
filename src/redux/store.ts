import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../localStorage/localStorage';

const rootReducer = combineReducers({
  counter: counterReducer
})
export type AppStateType = ReturnType<typeof rootReducer>;


const persistedState = loadState();
export const store = createStore(rootReducer, persistedState)


store.subscribe(() => {
  saveState({
    counter: store.getState().counter})
})

// @ts-ignore
window.store = store;