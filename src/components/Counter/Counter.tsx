import React, {useCallback, useState} from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import s from './Counter.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {selectCounter, selectIsCounterAction, selectIsError, selectMax, selectStart} from '../../redux/selector';
import {setCounterValueAC} from '../../redux/counter-reducer';

const Counter:React.FC = React.memo(() => {
  const[maxCount, setMaxCount] = useState(false);
  const dispatch = useDispatch();
  const max = useSelector(selectMax);
  const start = useSelector(selectStart);
  const counter = useSelector(selectCounter);
  const isError = useSelector(selectIsError);
  const isCounterAction = useSelector((selectIsCounterAction))

  const increaseValue = useCallback(() => {
      dispatch(setCounterValueAC(counter + 1));
      if (counter + 1 === max) {
        setMaxCount(true)
      }
  }, [counter, dispatch])
  const resetValue = useCallback(() => {
    dispatch(setCounterValueAC(start));
    setMaxCount(false)
  }, [start, dispatch])
  const containerMaxStyle = maxCount ? s.max : ''

  return <div className={`${s.container} ${containerMaxStyle}`}>
    <Display />
    <div className={s.buttons}>
      <Button buttonName='inc'
              callback={increaseValue}
              disabled={isError || isCounterAction || counter === max}/>
      <Button buttonName='reset'
              callback={resetValue}
              disabled={isError || isCounterAction}/>
    </div>
  </div>
})


export default Counter;