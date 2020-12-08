import {AppStateType} from './store';

export const selectMax = (state: AppStateType) => state.counter.max;
export const selectStart = (state: AppStateType) => state.counter.start;
export const selectIsError = (state: AppStateType) => state.counter.isError;
export const selectCounter = (state: AppStateType) => state.counter.counter;
export const selectIsCounterAction = (state: AppStateType) => state.counter.isCounterAction;
export const selectIsSetButtonDisabled = (state: AppStateType) => state.counter.isSetButtonDisabled;