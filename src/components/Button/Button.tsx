import React from 'react';
import s from './Button.module.css';

export type ButtonPropsType = {
    buttonName: string
    callback: () => void
    disabled?: boolean
}
function Button (props: ButtonPropsType) {
        return (
        <div>
            <button className={s.btn} onClick={props.callback} disabled={props.disabled}>
                {props.buttonName}
            </button>
        </div>
    )
}
export default Button;