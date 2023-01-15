import React, { useState, useEffect } from "react";
import List from "./list.jsx";
import axios from "axios";
import "../App.css";

function Results({ changeView }) {
  const [correct, setCorrect] = useState(true);
  const [rightList, setRightList] = useState([]);
  const [wrongList, setWrongList] = useState([]);

  useEffect(() => {
    axios
      .get("/results")
      .then((res) => {
        // console.log(res.data)
        const right = [];
        const wrong = [];
        res.data.forEach((obj) => {
          if (obj.correct) {
            right.push(obj);
          } else {
            wrong.push(obj);
          }
        });
        setRightList(right);
        setWrongList(wrong);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="resultsPageCont">
      <button class="home" onClick={() => changeView("Waking Spell")}>
        Home
      </button>
      <div class="resultsSelect">
        <button onClick={() => setCorrect(true)}>Correct</button>
        <button onClick={() => setCorrect(false)}>Incorrect</button>
      </div>
      {correct && (
        <div>
          <h2>You got these words right!</h2>
          <List list={rightList} />
        </div>
      )}
      {!correct && (
        <div>
          <h2>Practice makes perfect for these!</h2>
          <List list={wrongList} />
        </div>
      )}
    </div>
  );
}

export default Results;
