import { useState } from 'react'
import './App.css'

import Alarm from './components/alarm.jsx'
import Results from './components/results.jsx'
import quack from './assets/Duck-quack.mp3'

function App() {
  const [view, setView] = useState('Waking Spell');
  const [triggered, setTriggered] = useState(false);
  const [spell, setSpell] = useState(false);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false)
  console.log("This is the view ", view)

  const changeView = function(name) {
    setView(name);
  }

  const playAudio = function() {
    setTriggered(true);
    let audio = document.getElementById('audio');
    audio.play()
  }

  const alarmAgain = function() {
    if (triggered || !active || !spell) {
      playAudio()
    }
    if (complete === true) {
      console.log("are we changing these?")
      setTriggered(false);
      setSpell(false);
      setActive(false);
      setComplete(false);
    }
  }

  return (
    <div>
      <div><span>{view}</span></div>
      {view === 'Waking Spell' &&
        <div>
          <div onClick={() => changeView('Alarm')}>Set Alarm</div>
          <div onClick={() => changeView('Results')}>Results</div>
        </div>
      }
      {view === 'Alarm' &&
        <Alarm changeView={changeView} playAudio={playAudio} alarmAgain={alarmAgain} triggered={triggered}/>
      }
      {view === 'Results' &&
        <Results changeView={changeView}/>
      }
      <audio id="audio" src={quack} type="audio/mpeg">
        browser does not support audio
      </audio>
    </div>
  )
}

export default App
