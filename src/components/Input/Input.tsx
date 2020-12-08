import React, {ChangeEvent} from 'react';


type InputPropsType = {
  className: string
  value: number
  step: number
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void

}

function Input(props: InputPropsType) {
  return <>
      <input className={props.className}
             type="number"
             value={props.value}
             step={props.step}
             onChange={props.changeValue}/>
    </>
}

export default Input;