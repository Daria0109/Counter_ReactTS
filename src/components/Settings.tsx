import React, {ChangeEvent} from 'react';
import Button from './Button';
import '../App.css';
import {InputValueType} from '../App';

type SettingsPropsType = {
  maxInputValue: number
  startInputValue: number
  changeMaxInputValue: (value: number) => void
  changeMinInputValue: (value: number) => void
  setValue: () => void
  disabled: boolean
}

function Settings(props: SettingsPropsType) {
  const changeMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeMaxInputValue(e.currentTarget.valueAsNumber)
  }
  const changeMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeMinInputValue(e.currentTarget.valueAsNumber)
  }
  let errorStyleForMaxValue = props.maxInputValue < 0
  || props.maxInputValue <= props.startInputValue ? 'error-input' : '';
  let errorStyleForMinValue = props.startInputValue < 0
  || props.maxInputValue <= props.startInputValue ? 'error-input' : '';

  return (
    <div className="settings container">
      <div className="input_block">
        <div>
          <span className="input_title">max value:</span>
          <input className={`input_item ${errorStyleForMaxValue}`}
                 type="number"
                 value={props.maxInputValue}
                 step={1}
                 onChange={changeMaxInputValue}/>
        </div>
        <div>
          <span className="input_title">start value:</span>
          <input className={`input_item ${errorStyleForMinValue}`}
                 type="number"
                 value={props.startInputValue}
                 step={1}
                 onChange={changeMinInputValue}/>
        </div>
      </div>
      <div className="buttons">
        <Button buttonName="set"
                callback={props.setValue}
                disabled={props.disabled}/>
      </div>
    </div>
  )
}

export default Settings;

