import React from 'react';
import s from './../Counter/Counter.module.css';
import {useSelector} from 'react-redux';
import {selectCounter, selectIsCounterAction, selectIsError, selectMax} from '../../redux/selector';


const Display:React.FC = React.memo(() => {
  const max = useSelector(selectMax);
  const counter = useSelector(selectCounter);
  const isError = useSelector(selectIsError);
  const isCounterAction = useSelector((selectIsCounterAction))

  const counterErrorText = `Incorrect value!`;
  const counterActionText = `Enter values and press "set"`;

  let numberValueStyle = counter ? `${s.number}` : '';
  let maxValueStyle = counter === max ? `${s.maximum}` : '';
  let textStyle = isCounterAction ? `${s.text}` : ''
  let errorStyle = isError ? `${s.error_text}` : ''

  return (
    <div className={`${s.display} ${numberValueStyle} ${textStyle} ${errorStyle} ${maxValueStyle}`}>
      {(isError && counterErrorText) || (isCounterAction && counterActionText) || counter}
    </div>
  )
})

export default Display;