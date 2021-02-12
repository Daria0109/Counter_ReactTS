import React from 'react';
import Counter from './components/Counter/Counter';
import s from './App.module.scss';
import Settings from './components/Settings/Settings';


const App:React.FC = () => {
  return <div className={s.mainContent}>
    <Settings/>
    <Counter/>
  </div>
}

export default App;
