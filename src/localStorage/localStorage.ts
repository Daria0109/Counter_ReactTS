// L O C A L    S T O R A G E
import {InputStateType} from '../redux/counter-reducer';

export function saveState(key: string, state: InputStateType) {
  const stateAsString = JSON.stringify(state);
  localStorage.setItem(key, stateAsString)
}

export function getState (key: string) {
  const stateAsString = localStorage.getItem(key);
  if (stateAsString) {
    return JSON.parse(stateAsString);
  }
}
