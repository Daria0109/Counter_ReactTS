import React from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import s from './Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {selectCounter, selectIsCounterAction, selectIsError, selectMax, selectStart} from '../../redux/selector';
import {setCounterValueAC, setSettingsVisible} from '../../redux/counter-reducer';

function Counter() {
  const dispatch = useDispatch();
  const max = useSelector(selectMax);
  const start = useSelector(selectStart);
  const counter = useSelector(selectCounter);
  const isError = useSelector(selectIsError);
  const isCounterAction = useSelector((selectIsCounterAction))

  const increaseValue = () => {
    if (typeof counter === 'number') {
      dispatch(setCounterValueAC(counter + 1));
    }
  }
  const resetValue = () => {
    dispatch(setCounterValueAC(start));
  }

  const toggleSettings = () => {
  dispatch(setSettingsVisible(true))
  }
  return <div className={s.container}>
    <Display />
    <div className={s.buttons}>
      <Button buttonName='inc'
              callback={increaseValue}
              disabled={isError || isCounterAction || counter === max}/>
      <Button buttonName='reset'
              callback={resetValue}
              disabled={isError || isCounterAction}/>
      <Button buttonName="set"
              callback={toggleSettings}/>
    </div>
  </div>
}

export default Counter;