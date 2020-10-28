import React, {useState} from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';

function App() {
    let [value, setValue] = useState<number>(0)
    let minValue = 0;
    let maxValue = 5;

    const changeValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }
    const resetValue = () => {
        setValue(0)
    }
    return (
        <div className="content">
            <div className="container">
                <Display value={value} maxValue={maxValue}/>
                <div className="buttons">
                    <Button buttonName='inc'
                            callback={changeValue}
                            disabled={value === maxValue}/>
                    <Button buttonName='reset'
                            callback={resetValue}
                            disabled={value === minValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
