import React, {ChangeEvent} from 'react';
import s from './Input.module.scss'


type InputPropsType = {
  className: string
  value: number
  step: number
  changeValue: (e: ChangeEvent<HTMLInputElement>, data: string) => void
  datatype: string
}

const Input: React.FC<InputPropsType> = ({
                                           className, value, step,
                                           changeValue, datatype
                                         }) => {
  return <>
    <input className={`${s.inputItem} ${className}`}
           type="number"
           value={value}
           step={step}
           onChange={(e) => changeValue(e, datatype)}
           datatype={datatype}/>
  </>
}

export default Input;