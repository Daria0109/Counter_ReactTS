import React, {ChangeEvent} from 'react';
import '../App.css'

type InputValuePropsType = {
  name: string
  inputValue: number
  changeInputValue: (value: number) => void
  errorStyle: boolean

}

function InputValue(props: InputValuePropsType) {
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeInputValue(e.currentTarget.valueAsNumber)
  }

  return (
    <div>
      <span className="input_title">{props.name}:</span>
      <input className={`input_item ${props.errorStyle ? "error-input" : ""}`}
             type="number"
             value={props.inputValue}
             step={1}
             onChange={changeInputValue}/>
    </div>
  )
}

export default InputValue;