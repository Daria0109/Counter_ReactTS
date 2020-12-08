import React, {useEffect} from 'react';
import Counter from './components/Counter/Counter';
import s from './App.module.css';
import Settings from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeMaxValueAC,
  changeStartValueAC,
  InputStateType,
  setCounterValueAC
} from './redux/counter-reducer';
import {getState} from './localStorage/localStorage';
import {selectIsSettingsVisible} from './redux/selector';


function App() {
  const dispatch = useDispatch();
  const isSettingsVisible = useSelector(selectIsSettingsVisible);

    useEffect(() => {
    const state: InputStateType = getState('inputValues');
    if (state) {
      dispatch(changeMaxValueAC(state.max));
      dispatch(changeStartValueAC(state.start));
      dispatch(setCounterValueAC(state.start))
    }
  }, [])

  return <div className={s.content}>
    { isSettingsVisible ? <Settings/> : <Counter/> }
  </div>
}

export default App;
