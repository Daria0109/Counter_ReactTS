export enum ACTIONS_TYPE {
  CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_INPUT',
  CHANGE_START_VALUE = 'Counter/CHANGE_START_INPUT',
  SET_COUNTER_VALUE = 'Counter/SET_COUNTER_VALUE',
}

export const changeMaxValueAC = (value: number) => ({
  type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value
} as const);
export const changeStartValueAC = (value: number) => ({
  type: ACTIONS_TYPE.CHANGE_START_VALUE, value
} as const);
export const setCounterValueAC = (value: number) => ({
  type: ACTIONS_TYPE.SET_COUNTER_VALUE, value
} as const);


export type ActionsType = ReturnType<typeof changeMaxValueAC>
  | ReturnType<typeof changeStartValueAC>
  | ReturnType<typeof setCounterValueAC>

export type InputStateType = {
  max: number
  start: number
}
export type CounterStateType = InputStateType & {
  counter: number
  isError: boolean
  isCounterAction: boolean
  isSetButtonDisabled: boolean
}
const initialState: CounterStateType = {
  max: 0,
  start: 0,
  counter: 0,
  isError: false,
  isCounterAction: false,
  isSetButtonDisabled: true,
}


export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.CHANGE_MAX_VALUE:
      return (action.value < 0 || action.value <= state.start || state.start < 0)
        ? {
          ...state,
          max: action.value,
          isError: true,
          isCounterAction: false,
          isSetButtonDisabled: true
        }
        : {
          ...state,
          max: action.value,
          isError: false,
          isCounterAction: true,
          isSetButtonDisabled: false
        }
    case ACTIONS_TYPE.CHANGE_START_VALUE:
      return (action.value < 0 || action.value >= state.max || state.max < 0)
        ? {
          ...state,
          start: action.value,
          isError: true,
          isCounterAction: false,
          isSetButtonDisabled: true
        }
        : {
          ...state,
          start: action.value,
          isError: false,
          isCounterAction: true,
          isSetButtonDisabled: false
        }
    case ACTIONS_TYPE.SET_COUNTER_VALUE:
      return {
        ...state,
        counter: action.value,
        isError: false,
        isCounterAction: false,
        isSetButtonDisabled: true
      }
    default:
      return state
  }
}