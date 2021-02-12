import React, {ChangeEvent, useCallback} from 'react';
import Button from '../Button/Button';
import s from './Settings.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {selectIsSetButtonDisabled, selectMax, selectStart} from '../../redux/selector';
import {changeMaxValueAC, changeStartValueAC, setCounterValueAC} from '../../redux/counter-reducer';
import Input from '../Input/Input';


const Settings: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const max = useSelector(selectMax);
  const start = useSelector(selectStart);
  const isSetButtonDisabled = useSelector(selectIsSetButtonDisabled);

  const changeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>, data: string) => {
    const value = +e.currentTarget.value;
    data === 'max'
      ? dispatch(changeMaxValueAC(value))
      : dispatch(changeStartValueAC(value))
  }, [dispatch])

  const setValue = useCallback(() => {
    dispatch(setCounterValueAC(start));
  }, [max, start, dispatch])

  let errorStyleMax = max < 0 || max <= start ? `${s.inputError}` : '';
  let errorStyleStart = start < 0 || max <= start ? `${s.inputError}` : '';

  return <div className={s.wrapperContainer}>
    <div className={s.container}>
      <div className={s.inputsBlock}>
        <div className={s.inputRow}>
          <span className={s.title}>Max:</span>
          <Input className={errorStyleMax}
                 value={max}
                 step={1}
                 changeValue={changeInputValue}
                 datatype={'max'}/>
        </div>
        <div className={s.inputRow}>
          <span className={s.title}>Start:</span>
          <Input className={errorStyleStart}
                 value={start}
                 step={1}
                 changeValue={changeInputValue}
                 datatype={'start'}/>
        </div>
      </div>
      <div className={s.buttons}>
        <Button buttonName="set"
                callback={setValue}
                disabled={isSetButtonDisabled}/>
      </div>
    </div>
  </div>
})

export default Settings;

