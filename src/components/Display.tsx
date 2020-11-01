import React from 'react';
import '../App.css';

export type DisplayPropsType = {
    counterValue: number | string
    maxInputValue: number
    minInputValue: number
}

function Display (props: DisplayPropsType) {
    let maxValueStyle = props.counterValue === props.maxInputValue ? "maximum" : "";
    let textStyle = typeof props.counterValue === "number" ? "number" : "text"
    let errorStyle = props.counterValue === 'Incorrect value!' ? "error-text" : ""

    return (
        <div className={`display ${textStyle} ${maxValueStyle} ${errorStyle}`}>
            {props.counterValue}
        </div>
    )
}
export default Display;