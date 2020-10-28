import React from 'react';
import './App.css';

export type DisplayPropsType = {
    value: number
    maxValue: number
}

function Display (props: DisplayPropsType) {
    let maxValueStyle = props.value === props.maxValue ? "maximum" : "";

    return (
        <div className={`display ${maxValueStyle}`}>
            {props.value}
        </div>
    )
}
export default Display;