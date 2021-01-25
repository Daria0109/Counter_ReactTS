import React from 'react';
import s from './Button.module.css';

export type ButtonPropsType = {
  buttonName: string
  callback: () => void
  disabled?: boolean
}
const Button: React.FC<ButtonPropsType> = React.memo(({buttonName, callback, disabled}) => {
  return <div>
    <button className={s.btn} onClick={callback} disabled={disabled}>
      {buttonName}
    </button>
  </div>
})
export default Button;