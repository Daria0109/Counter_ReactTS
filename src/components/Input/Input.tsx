import React, {ChangeEvent} from 'react';


type InputPropsType = {
  className: string
  value: number
  step: number
  changeValue: (e: ChangeEvent<HTMLInputElement>, data: string) => void
  datatype: string
}

function Input(props: InputPropsType) {
  return <>
      <input className={props.className}
             type="number"
             value={props.value}
             step={props.step}
             onChange={(e) => props.changeValue(e, props.datatype)}
             datatype={props.datatype}/>
    </>
}

export default Input;