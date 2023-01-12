import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

import Alarm from './components/alarm.jsx'
import Results from './components/results.jsx'
import SpellingBee from './components/spellingbee.jsx'
import Practice from './components/practice.jsx'
import Greeting from './components/greeting.jsx'
import quack from './assets/Duck-quack.mp3'

function App() {
  const [view, setView] = useState('Waking Spell');
  const [triggered, setTriggered] = useState(false);
  const [spell, setSpell] = useState(false);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false)
  const [intervalId, setIntervalId] = useState(0);
  const [alarmSet, setAlarmSet] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [wordData, setWordData] = useState([]);
  const [words, setWords] = useState([]);
  console.log('interval id', intervalId)
  console.log("This is the view ", view)

  useEffect(() => {
    if (localStorage.getItem('alarm')) {
      setAlarmSet(true);
    }
    if (localStorage.getItem('triggered')) {
      setTriggered(true);
    }
    if (localStorage.getItem('interval') === 'true') {
      console.log('type after storage ', typeof localStorage.getItem('intId'), localStorage.getItem('intId'))
      clearInterval(parseInt(localStorage.getItem('intId')));
      localStorage.removeItem('intId');
      startInterval();
    }
    updateQuiz();
  }, [])

  // res[#].word
  const updateQuiz = async function() {
    axios.get('/random')
      .then((res) => {
        console.log("Succesful ", res.data)
        setQuiz(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateData = async function(searchWord) {
    return axios.get('/word', { params: {word: searchWord}})
      .then((res) => {
        console.log(res.data);
        return res.data[0];
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleCancel = function() {
    localStorage.removeItem('alarm');
    setAlarmSet(false);
  }

  const getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
      minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
  };



  const checkAlarm = (timeString) => {
    let alarm = localStorage.getItem('alarm')
    console.log(alarm);
    if (alarm === timeString) {
      console.log(alarm === timeString)
      // create a simple alert that when text is entered
      // you will enter the spelling bee and sound will turn off
      // eventually create a pop up window with a button
      localStorage.setItem('triggered', true);
      playAudio();
      handleCancel();
      setView('prompt');
    }
  };

  const renderTime = () => {
    var currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone });
    console.log(timeString);
    checkAlarm(timeString);
  };

  let count = 0;

  // Update time every second
  const startInterval = function() {
    let newIntervalId = setInterval(() => {
      count++;
      console.log(count);
      if (count > 18) count = 0;
      console.log(count, triggered)
      if (count === 18 && triggered) {
        alarmAgain();
      }
      renderTime()
    }, 1000);
    console.log("before storage ", typeof newIntervalId, newIntervalId)
    setIntervalId(newIntervalId);
    localStorage.setItem('intId', newIntervalId);
  }

  const handlePrompt = function() {
    setActive(true);
    stopAudio();
    Promise.all([
      updateData(quiz[0].word),
      updateData(quiz[1].word),
      updateData(quiz[2].word)
    ])
      .then((res) => {
        console.log("Response ", res);
        setWordData(res);
        setWords(res.map((data) => {
          return data.word
        }))
        changeView('Spelling Bee')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // change page you are viewing
  const changeView = function(name) {
    setView(name);
  }

  const stopAudio = function() {
    let audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
  }
  // play audio
  const playAudio = function() {
    setTriggered(true);
    let audio = document.getElementById('audio');
    audio.play()
  }

  // check if alarm has been triggered, if user is active, and if spelling is complete
  const alarmAgain = function() {
    if (triggered && !active) {
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

  console.log(wordData);

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
        <Alarm changeView={changeView} handleCancel={handleCancel} setAlarmSet={setAlarmSet} alarmSet={alarmSet}/>
      }
      {view === 'Results' &&
        <Results changeView={changeView}/>
      }
      {view === 'prompt' &&
        <button onClick={() => handlePrompt()}>Play Spelling Bee</button>
      }
      {view === 'Spelling Bee' &&
        <SpellingBee setActive={setActive} changeView={changeView}
        wordData={wordData}/>
      }
      {view === 'Practice' &&
        <Practice setActive={setActive} changeView={changeView} words={words}/>
      }
      {view === 'Greeting' &&
        <Greeting changeView={changeView} updateQuiz={updateQuiz}/>
      }
      <audio id="audio" src={quack} type="audio/mpeg">
        browser does not support audio
      </audio>
    </div>
  )
}

export default App
