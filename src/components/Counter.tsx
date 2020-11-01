import React from 'react';
import Display from './Display';
import Button from './Button';
import '../App.css';

type CounterPropsType = {
  counterValue: number | string
  changeValue: () => void
  resetValue: () => void
  maxInputValue: number
  startInputValue: number
  disabled: boolean
}

function Counter(props: CounterPropsType) {
    return (
    <div className="counter container">
      <Display counterValue={props.counterValue}
               maxInputValue={props.maxInputValue}
               minInputValue={props.startInputValue}/>
      <div className="buttons">
        <Button buttonName='inc'
                callback={props.changeValue}
                disabled={props.disabled || props.counterValue === props.maxInputValue}/>
        <Button buttonName='reset'
                callback={props.resetValue}
                disabled={props.disabled}/>
      </div>
    </div>
  )
}

export default Counter;