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
  const [idle, setIdle] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [alarmSet, setAlarmSet] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [wordData, setWordData] = useState([]);
  const [words, setWords] = useState([]);
  const [aiImage, setAiImage] = useState('')
  const [practiceEntry, setPracticeEntry] = useState('')

  // console.log('interval id', intervalId)
  // console.log("This is the view ", view)

  console.log('State Tracker' , {
    view: view,
    triggered: triggered,
    idle: idle,
    intervalId: intervalId,
    alarmSet: alarmSet,
    quiz: quiz,
    wordData: wordData,
    words: words,
    aiImage: aiImage,
    practiceEntry: practiceEntry
  })


  useEffect(() => {
    if (localStorage.getItem('alarm')) {
      setAlarmSet(true);
    }
    if (localStorage.getItem('triggered')) {
      console.log('ARE WE GETTING IN HERE')
      setTriggered(true);
    }
    if (localStorage.getItem('interval') === 'true') {
      // console.log('type after storage ', typeof localStorage.getItem('intId'), localStorage.getItem('intId'))
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

  const getImage = function(practiceEntry) {
    setPracticeEntry(practiceEntry)
    changeView('Greeting')
    axios.get('/aiImage', { params: {entry: practiceEntry}})
      .then((res) => {
        setAiImage(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateData = async function(searchWord) {
    return axios.get('/word', { params: {word: searchWord}})
      .then((res) => {
        // console.log(res.data);
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
      localStorage.setItem('triggered', true);
      setTriggered(true);
      playAudio();
      handleCancel();
      setView('prompt');
    }
  };

  const renderTime = () => {
    // var currentTime = document.getElementById("current-time");
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

  // let count = 0;

  // Update time every second
  const startInterval = function() {
    let newIntervalId = setInterval(() => {
      // count++;
      // if (count > 18) count = 0;
      // if (count === 18) {
      //   alarmAgain();
      // }
      // alarmAgain();
      renderTime();
    }, 1000);
    // console.log("before storage ", typeof newIntervalId, newIntervalId)
    setIntervalId(newIntervalId);
    localStorage.setItem('intId', newIntervalId);
  }

  const handlePrompt = function() {
    // setIdle(false);
    stopAudio();
    Promise.all([
      updateData(quiz[0].word),
      updateData(quiz[1].word),
      updateData(quiz[2].word)
    ])
      .then((res) => {
        // console.log("Response ", res);
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
    let audio = document.getElementById('audio');
    audio.play()
  }

  // check if alarm has been triggered, if user is idle, and if spelling is complete
  // const alarmAgain = function() {
  //   // console.log(count, triggered);
  //   // if (triggered && idle) {
  //   //   playAudio()
  //   // }
  //   console.log('idle ', idle, 'triggered ', triggered)
  //   if (triggered && idle) {
  //     playAudio()
  //   }
  // }

  // console.log(wordData);

  return (
    <div>
      <div class="header"><span>{view}</span></div>
      {view === 'Waking Spell' &&
        <div class="homeOptionsCont">
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
        <div className="center">
          <button class="prompt" onClick={() => handlePrompt()}>Play Spelling Bee</button>
        </div>
      }
      {view === 'Spelling Bee' &&
        <SpellingBee setIdle={setIdle} changeView={changeView} wordData={wordData}/>
      }
      {view === 'Practice' &&
        <Practice setIdle={setIdle} changeView={changeView} words={words} getImage={getImage} setTriggered={setTriggered}/>
      }
      {view === 'Greeting' &&
        <Greeting changeView={changeView} updateQuiz={updateQuiz} aiImage={aiImage} practiceEntry={practiceEntry} setPracticeEntry={setPracticeEntry} setAiImage={setAiImage}/>
      }
      <audio id="audio" src={quack} type="audio/mpeg">
        browser does not support audio
      </audio>
    </div>
  )
}

export default App
