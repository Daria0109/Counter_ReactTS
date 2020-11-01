import React, {useState} from 'react';
import Counter from './components/Counter';
import './App.css';
import Settings from './components/Settings';

function App() {
  let [counterValue, setCounterValue] = useState<number | string>(0)

  let [maxInputValue, setMaxInputValue] = useState<number>(0)
  let [startInputValue, setStartInputValue] = useState<number>(0)

  const disabledSetButton = maxInputValue < 0 || startInputValue < 0
    || maxInputValue <= startInputValue || counterValue === startInputValue;
  const disabledCounterButton = typeof counterValue === "string";


  const changeMaxInputValue = (value: number) => {
    setMaxInputValue(value);
    if (value < 0 || value <= startInputValue) {
      setCounterValue(`Incorrect value!`)
    } else if (value > 0 && startInputValue >= 0) {
      setCounterValue(`Enter values and press "set"`)
    }
  }

  const changeMinInputValue = (value: number) => {
    setStartInputValue(value);
    if (value < 0 || value >= maxInputValue) {
      setCounterValue(`Incorrect value!`)
    } else if (value > 0 && maxInputValue >= 0) {
      setCounterValue(`Enter values and press "set"`)
    }
  }

  const setValue = () => {
    setCounterValue(startInputValue);

  }

  const changeValue = () => {
    if (typeof counterValue === 'number') {
      setCounterValue(counterValue + 1)
    }
  }
  const resetValue = () => {
    setCounterValue(startInputValue)
  }
  return (
    <div className="content">
      <Settings maxInputValue={maxInputValue}
                startInputValue={startInputValue}
                changeMaxInputValue={changeMaxInputValue}
                changeMinInputValue={changeMinInputValue}
                setValue={setValue}
                counterValue={counterValue}
                disabled={disabledSetButton}/>

      <Counter counterValue={counterValue}
               changeValue={changeValue}
               resetValue={resetValue}
               maxInputValue={maxInputValue}
               startInputValue={startInputValue}
               disabled={disabledCounterButton}/>
    </div>
  );
}

export default App;
