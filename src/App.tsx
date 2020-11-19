import React, {useState} from 'react';
import Counter from './components/Counter';
import './App.css';
import Settings from './components/Settings';
import {restoreState, saveState} from './localStorage/localStorage';

export type InputValueType = {
  maxValue: number
  startValue: number
}

function App() {
    let [inputValue, setInputValue] = useState<InputValueType>(() => {
    const initialState: InputValueType = restoreState<InputValueType>('inputValue', {
      maxValue: 0,
      startValue: 0
    })
    return initialState;
  })
  let [counterValue, setCounterValue] = useState<number | string>(inputValue.startValue)
  let [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  const disabledCounterButton = typeof counterValue === 'string';

  const save = () => {
   saveState<InputValueType>('inputValue', inputValue);
  };
  const counterErrorText = `Incorrect value!`;
  const counterActionText = `Enter values and press "set"`;

  const changeMaxInputValue = (value: number) => {
    setInputValue({...inputValue, maxValue: value});
    if (value < 0 || value <= inputValue.startValue) {
      setCounterValue(counterErrorText);
      setButtonDisabled(true)
    } else if (value > 0 && inputValue.startValue >= 0) {
      setCounterValue(counterActionText);
      setButtonDisabled(false)
    }
  }
  const changeMinInputValue = (value: number) => {
    setInputValue({...inputValue, startValue: value});
    if (value < 0 || value >= inputValue.maxValue) {
      setCounterValue(counterErrorText);
      setButtonDisabled(true)
    } else if (value >= 0 && inputValue.maxValue >= 0) {
      setCounterValue(counterActionText);
      setButtonDisabled(false)
    }
  }

  const setValue = () => {
    setCounterValue(inputValue.startValue);
    setButtonDisabled(true);
    save();}

  const changeValue = () => {
    if (typeof counterValue === 'number') {
      setCounterValue(counterValue + 1)
    }
  }
  const resetValue = () => {
    setCounterValue(inputValue.startValue)
  }
  return (
    <div className="content">
      <Settings maxInputValue={inputValue.maxValue}
                startInputValue={inputValue.startValue}
                changeMaxInputValue={changeMaxInputValue}
                changeMinInputValue={changeMinInputValue}
                setValue={setValue}
                disabled={buttonDisabled}/>

      <Counter counterValue={counterValue}
               changeValue={changeValue}
               resetValue={resetValue}
               maxInputValue={inputValue.maxValue}
               startInputValue={inputValue.startValue}
               disabled={disabledCounterButton}/>
    </div>
  );
}

export default App;
