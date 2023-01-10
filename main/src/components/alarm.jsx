import { useState, useEffect } from 'react'
import '../App.css'

function Alarm({ changeView, playAudio, alarmAgain, triggered }) {
  const [alarmSet, setAlarmSet] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('alarm')) {
      setAlarmSet(true);
    }
    if (localStorage.getItem('interval') === 'true') {
      setIntervalId(localStorage.getItem('intId'))
      startInterval();
    }
  }, [])



  const handleSubmit = function(e) {
    e.preventDefault();
    const input = new FormData(e.target)
    let data = {}
    for (let pair of input) {
      let key = pair[0];
      let val = pair[1];
      data[key] = val;
    }
    console.log(data);
    let alarmString = getTimeString({
      hours: data.hour,
      seconds: data.sec,
      minutes: data.min,
      zone: data.zone
    })
    console.log(alarmString);
    localStorage.setItem('alarm', alarmString)
    localStorage.setItem('interval', 'true');
    setAlarmSet(true);
    startInterval();
  }

  const handleCancel = function() {
    localStorage.removeItem('alarm');
    localStorage.removeItem('interval');
    localStorage.removeItem('intId');
    clearInterval(intervalId);
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
    if (alarm === timeString) {
      console.log(alarm === timeString)
      playAudio()
      handleCancel();
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
    if (intervalId !== 0) {
      clearInterval(intervalId);
      localStorage.removeItem('intId');
    }
    let newIntervalId = setInterval(() => {
      count++;
      console.log(count);
      if (count === 30 && triggered) {
        alarmAgain();
        count = 0;
      }
      renderTime()
    }, 1000);
    setIntervalId(newIntervalId);
    localStorage.setItem('intId', newIntervalId);
  }

  return (
    <div>
      <button onClick={() => changeView('Waking Spell')}>Home</button>
      {!alarmSet &&
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="number"
              name="hour"
              placeholder="Enter hours"
              min="0"
              max="12"
              required
            />
            <input
              type="number"
              name="min"
              min="0"
              max="59"
              placeholder="Enter minutes"
              required
            />
            <input
              type="number"
              name="sec"
              min="0"
              max="59"
              placeholder="Enter seconds"
              required
            />
            <select name="zone" required>
              <option value="" defaultValue disabled>Zone</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      }
      {alarmSet &&
        <div>
          <span>Alarm for: {localStorage.getItem('alarm')}</span>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
      }
    </div>
  )
}

export default Alarm;

// const getTimeString = ({ hours, minutes, seconds, zone }) => {
//   if (minutes / 10 < 1) {
//     minutes = "0" + minutes;
//   }
//   if (seconds / 10 < 1) {
//     seconds = "0" + seconds;
//   }
//   return `${hours}:${minutes}:${seconds} ${zone}`;
// };

// const checkAlarm = (timeString) => {
//   let alarm = localStorage.getItem('alarm')
//   if (alarm === timeString) {
//     console.log(alarm === timeString)
//     let audio = document.getElementById('audio');
//     audio.play()
//     handleCancel();
//   }
// };

// const renderTime = () => {
//   var currentTime = document.getElementById("current-time");
//   const currentDate = new Date();
//   var hours = currentDate.getHours();
//   var minutes = currentDate.getMinutes();
//   var seconds = currentDate.getSeconds();
//   var zone = hours >= 12 ? "PM" : "AM";
//   if (hours > 12) {
//     hours = hours % 12;
//   }
//   const timeString = getTimeString({ hours, minutes, seconds, zone });
//   console.log(timeString);
//   checkAlarm(timeString);
// };

// // Update time every second
// setInterval(renderTime, 1000);


