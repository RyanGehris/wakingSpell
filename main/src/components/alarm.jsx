import { useState } from 'react'
import quack from '../assets/Duck-quack.mp3'
import '../App.css'

function Alarm({ changeView }) {
  const [alarmSet, setAlarmSet] = useState(false);

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
    setAlarmSet(true);
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
    if (alarm === timeString) {
      console.log(alarm === timeString)
      let audio = document.getElementById('audio');
      audio.play()
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

  // Update time every second
  setInterval(renderTime, 1000);

  return (
    <div>
      <div>Alarm</div>
      <button onClick={() => changeView('home')}>Home</button>
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
      <audio id="audio" src={quack} type="audio/mpeg">browser does not support audio</audio>
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


