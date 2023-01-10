import { useState } from 'react'
import './App.css'

import Alarm from './components/alarm.jsx'
import Results from './components/results.jsx'

function App() {
  const [view, setView] = useState('home');
  console.log("This is the view ", view)

  const changeView = function(name) {
    setView(name);
  }

  if (view === 'home') {
    return (
      <div>
        <div><span>Waking Spell</span></div>
        <div onClick={() => changeView('alarm')}>Set Alarm</div>
        <div onClick={() => changeView('results')}>Results</div>
      </div>
    )
  } else if (view === 'alarm') {
    return <Alarm changeView={changeView}/>
  } else if (view === 'results') {
    return <Results changeView={changeView}/>
  }
}

export default App
