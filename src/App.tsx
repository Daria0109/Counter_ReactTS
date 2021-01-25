import React, {useEffect} from 'react';
import Counter from './components/Counter/Counter';
import s from './App.module.css';
import Settings from './components/Settings/Settings';
import {useDispatch} from 'react-redux';
import {changeMaxValueAC, changeStartValueAC, InputStateType, setCounterValueAC} from './redux/counter-reducer';
import {getState} from './localStorage/localStorage';


const App:React.FC = () => {
  const dispatch = useDispatch();

    useEffect(() => {
    const state: InputStateType = getState('inputValues');
    if (state) {
      dispatch(changeMaxValueAC(state.max));
      dispatch(changeStartValueAC(state.start));
      dispatch(setCounterValueAC(state.start))
    }
  }, [dispatch])

  return <div className={s.content}>
    <Settings/>
    <Counter/>
  </div>
}

export default App;
