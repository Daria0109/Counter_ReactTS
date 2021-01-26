import {
  changeMaxValueAC,
  changeStartValueAC,
  counterReducer,
  CounterStateType,
  setCounterValueAC
} from './counter-reducer';

let initialState: CounterStateType;

beforeEach(() => {
  initialState = {
    max: 0,
    start: 0,
    counter: 0,
    isError: false,
    isCounterAction: false,
    isSetButtonDisabled: true,
  }
})

test('max value should be changed correctly', () => {
  const value1 = 1;
  const value2 = -1;
  const value3 = 0;

  const action1 = changeMaxValueAC(value1)
  const action2 = changeMaxValueAC(value2)
  const action3 = changeMaxValueAC(value3)

  const endState1 = counterReducer(initialState, action1)
  const endState2 = counterReducer(initialState, action2)
  const endState3 = counterReducer(initialState, action3)

  expect(endState1.max).toBe(1)
  expect(endState1.isError).toBeFalsy()
  expect(endState1.isCounterAction).toBeTruthy()
  expect(endState1.isSetButtonDisabled).toBeFalsy()

  expect(endState2.max).toBe(-1)
  expect(endState2.isError).toBeTruthy()
  expect(endState2.isCounterAction).toBeFalsy()
  expect(endState2.isSetButtonDisabled).toBeTruthy()

  expect(endState3.max).toBe(0)
  expect(endState3.isError).toBeTruthy()
  expect(endState3.isCounterAction).toBeFalsy()
  expect(endState3.isSetButtonDisabled).toBeTruthy()
})

test('start value should be changed correctly', () => {
  const value1 = 1;
  const value2 = -1;
  const value3 = 0;

  const action1 = changeStartValueAC(value1)
  const action2 = changeStartValueAC(value2)
  const action3 = changeStartValueAC(value3)

  const endState1 = counterReducer(initialState, action1)
  const endState2 = counterReducer(initialState, action2)
  const endState3 = counterReducer(initialState, action3)

  expect(endState1.start).toBe(1)
  expect(endState1.isError).toBeTruthy()
  expect(endState1.isCounterAction).toBeFalsy()
  expect(endState1.isSetButtonDisabled).toBeTruthy()

  expect(endState2.start).toBe(-1)
  expect(endState2.isError).toBeTruthy()
  expect(endState2.isCounterAction).toBeFalsy()
  expect(endState2.isSetButtonDisabled).toBeTruthy()

  expect(endState3.start).toBe(0)
  expect(endState3.isError).toBeTruthy()
  expect(endState3.isCounterAction).toBeFalsy()
  expect(endState3.isSetButtonDisabled).toBeTruthy()
})

test('counter value should be increased correctly', () => {
  const value = 15;
  const action = setCounterValueAC(value)
  const endState = counterReducer(initialState, action)

  expect(endState.counter).toBe(15)
  expect(endState.isError).toBeFalsy()
  expect(endState.isCounterAction).toBeFalsy()
  expect(endState.isSetButtonDisabled).toBeTruthy()
})