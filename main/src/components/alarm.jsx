import React from "react";
import "../App.css";

function Alarm({ changeView, handleCancel, setAlarmSet, alarmSet }) {
  const handleSubmit = function(e) {
    e.preventDefault();
    const input = new FormData(e.target);
    let data = {};
    for (let pair of input) {
      let key = pair[0];
      let val = pair[1];
      data[key] = val;
    }
    // console.log(data);
    let alarmString = getTimeString({
      hours: parseInt(data.hour),
      seconds: parseInt(data.sec),
      minutes: parseInt(data.min),
      zone: data.zone,
    });
    // console.log(alarmString);
    localStorage.setItem("alarm", alarmString);
    localStorage.setItem("interval", "true");
    setAlarmSet(true);
  };

  const getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
      minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
  };

  return (
    <div class="homeOptionsCont">
      <button class="home" onClick={() => changeView("Waking Spell")}>
        Home
      </button>
      {!alarmSet && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="formCont">
            <input
              type="number"
              name="hour"
              placeholder="hr"
              min="0"
              max="12"
              required
            />
            <input
              type="number"
              name="min"
              min="0"
              max="59"
              placeholder="mins"
              required
            />
            <input
              type="number"
              name="sec"
              min="0"
              max="59"
              placeholder="sec"
              required
            />
            <select name="zone" required>
              <option value="" defaultValue disabled>
                Zone
              </option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <button class="submit">Submit</button>
        </form>
      )}
      {alarmSet && (
        <section id="displayAlarm">
          <span>Alarm for: {localStorage.getItem("alarm")}</span>
          <button onClick={() => handleCancel()}>X</button>
        </section>
      )}
    </div>
  );
}

export default Alarm;
