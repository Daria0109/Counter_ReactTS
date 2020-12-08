export enum ACTIONS_TYPE {
  CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_INPUT',
  CHANGE_START_VALUE = 'Counter/CHANGE_START_INPUT',
  SET_COUNTER_VALUE = 'Counter/SET_COUNTER_VALUE',
  SET_IS_ERROR = 'Counter/SET_IS_ERROR',
  SET_COUNTER_ACTION = 'Counter/SET_COUNTER_ACTION',
  DISABLE_SET_BUTTON = 'Counter/DISABLE_SET_BUTTON',
  SET_SETTINGS_VISIBLE = 'Counter/SET_SETTINGS_VISIBLE'
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
export const setIsErrorAC = (isError: boolean) => ({
  type: ACTIONS_TYPE.SET_IS_ERROR, isError
} as const);
export const setIsCounterActionAC = (isCounterAction: boolean) => ({
  type: ACTIONS_TYPE.SET_COUNTER_ACTION, isCounterAction
} as const);
export const disableSetButtonAC = (isSetButtonDisabled: boolean) => ({
  type: ACTIONS_TYPE.DISABLE_SET_BUTTON, isSetButtonDisabled
} as const)
export const setSettingsVisible = (isSettingsVisible: boolean) => ({
  type: ACTIONS_TYPE.SET_SETTINGS_VISIBLE, isSettingsVisible
} as const)

export type ActionsType = ReturnType<typeof changeMaxValueAC>
  | ReturnType<typeof changeStartValueAC>
  | ReturnType<typeof setCounterValueAC>
  | ReturnType<typeof setIsErrorAC>
  | ReturnType<typeof disableSetButtonAC>
  | ReturnType<typeof setIsCounterActionAC>
  | ReturnType<typeof setSettingsVisible>

export type InputStateType = {
  max: number
  start: number
}
export type CounterStateType = InputStateType & {
  counter: number
  isError: boolean
  isCounterAction: boolean
  isSetButtonDisabled: boolean
  isSettingsVisible: boolean
}
const initialState: CounterStateType = {
  max: 0,
  start: 0,
  counter: 0,
  isError: false,
  isCounterAction: false,
  isSetButtonDisabled: true,
  isSettingsVisible: false
}


export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.CHANGE_MAX_VALUE:
      return {
        ...state,
        max: action.value
      }
    case ACTIONS_TYPE.CHANGE_START_VALUE:
      return {
        ...state,
        start: action.value
      }
    case ACTIONS_TYPE.SET_COUNTER_VALUE:
      return {
        ...state,
        counter: action.value
      }
    case ACTIONS_TYPE.SET_IS_ERROR:
      return {
        ...state,
        isError: action.isError
      }
    case ACTIONS_TYPE.SET_COUNTER_ACTION:
      return {
        ...state,
        isCounterAction: action.isCounterAction
      }
    case ACTIONS_TYPE.DISABLE_SET_BUTTON:
      return {
        ...state,
        isSetButtonDisabled: action.isSetButtonDisabled
      }
    case ACTIONS_TYPE.SET_SETTINGS_VISIBLE:
      return {
        ...state,
        isSettingsVisible: action.isSettingsVisible
      }
    default:
      return state
  }
}