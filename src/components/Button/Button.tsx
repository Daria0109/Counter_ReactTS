import React from 'react';
import s from './Button.module.scss';

export type ButtonPropsType = {
  buttonName: string
  callback: () => void
  disabled?: boolean
}
const Button: React.FC<ButtonPropsType> = React.memo(({buttonName, callback, disabled}) => {
  return <>
    <button className={s.btn} onClick={callback} disabled={disabled}>
      {buttonName}
    </button>
  </>
})
export default Button;