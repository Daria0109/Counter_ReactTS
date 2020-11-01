import React from 'react';
import '../App.css';

export type ButtonPropsType = {
    buttonName: string
    callback?: () => void
    disabled: boolean
}
function Button (props: ButtonPropsType) {
        return (
        <div className="button">
            <button className="btn" onClick={props.callback} disabled={props.disabled}>
                {props.buttonName}
            </button>
        </div>
    )
}
export default Button;