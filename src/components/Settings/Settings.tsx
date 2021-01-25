import React, {ChangeEvent} from 'react';
import Button from '../Button/Button';
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {selectIsSetButtonDisabled, selectMax, selectStart} from '../../redux/selector';
import {changeMaxValueAC, changeStartValueAC, setCounterValueAC} from '../../redux/counter-reducer';
import {saveState} from '../../localStorage/localStorage';
import Input from '../Input/Input';


function Settings() {
  const dispatch = useDispatch();
  const max = useSelector(selectMax);
  const start = useSelector(selectStart);
  const isSetButtonDisabled = useSelector(selectIsSetButtonDisabled);


  const changeValue = (e: ChangeEvent<HTMLInputElement>, data: string) => {
    const value = e.currentTarget.valueAsNumber;
    data === 'max'
      ? dispatch(changeMaxValueAC(value))
      : dispatch(changeStartValueAC(value))
  }


  const setValue = () => {
    dispatch(setCounterValueAC(start));
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
                 changeValue={changeValue}
                 datatype={'max'}/>
        </div>
        <div>
          <span className={s.input_title}>start value:</span>
          <Input className={`${s.input_item} ${errorStyleStart}`}
                 value={start}
                 step={1}
                 changeValue={changeValue}
                 datatype={'start'}/>
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

