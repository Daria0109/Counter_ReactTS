import React, {ChangeEvent} from 'react';
import Button from '../Button/Button';
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {selectIsSetButtonDisabled, selectMax, selectStart} from '../../redux/selector';
import {
  changeMaxValueAC, changeStartValueAC,
  disableSetButtonAC,
  setCounterValueAC, setIsCounterActionAC,
  setIsErrorAC
} from '../../redux/counter-reducer';
import {saveState} from '../../localStorage/localStorage';
import Input from '../Input/Input';


function Settings() {
  const dispatch = useDispatch();
  const max = useSelector(selectMax);
  const start = useSelector(selectStart);
  const isSetButtonDisabled = useSelector(selectIsSetButtonDisabled);


  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    dispatch(changeMaxValueAC(value));
    if (value < 0 || value <= start || start < 0) {
      dispatch(setIsErrorAC(true));
      dispatch(setIsCounterActionAC(false));
      dispatch(disableSetButtonAC(true))
    } else {
      dispatch(setIsCounterActionAC(true));
      dispatch(setIsErrorAC(false));
      dispatch(disableSetButtonAC(false))
    }
  }

  const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    dispatch(changeStartValueAC(value));
    if (value < 0 || value >= max || max < 0) {
      dispatch(setIsErrorAC(true));
      dispatch(setIsCounterActionAC(false));
      dispatch(disableSetButtonAC(true))
    } else {
      dispatch(setIsCounterActionAC(true));
      dispatch(setIsErrorAC(false));
      dispatch(disableSetButtonAC(false))
    }
  }

  const setValue = () => {
    dispatch(setCounterValueAC(start));
    dispatch(setIsErrorAC(false));
    dispatch(setIsCounterActionAC(false));
    dispatch(disableSetButtonAC(true));
    saveState('inputValues', {max: max, start: start});
  }

  let errorStyleMax = max < 0 || max <= start ? `${s.error_input}` : '';
  let errorStyleStart = start < 0 || max <= start ? `${s.error_input}` : '';

  return (
    <div className={s.container}>
      <div className={s.input_block}>
        <div>
          <span className={s.input_title}>max value:</span>
          <Input className={`${s.input_item} ${errorStyleMax}`}
                 value={max}
                 step={1}
                 changeValue={changeMaxValue}/>
        </div>
        <div>
          <span className={s.input_title}>start value:</span>
          <Input className={`${s.input_item} ${errorStyleStart}`}
                 value={start}
                 step={1}
                 changeValue={changeStartValue}/>
        </div>
      </div>
      <div className={s.buttons}>
        <Button buttonName="set"
                callback={setValue}
                disabled={isSetButtonDisabled}/>
      </div>
    </div>
  )
}

export default Settings;

