import React, { useState, useEffect } from 'react';
import List from './list.jsx';
import axios from 'axios';
import '../App.css';

function Results({ changeView }) {
  const [correct, setCorrect] = useState(true);
  const [rightList, setRightList] = useState([]);
  const [wrongList, setWrongList] = useState([]);

  useEffect(() => {
    axios.get('/results')
     .then((res) => {
      console.log(res.data)
      const right = [];
      const wrong = [];
      res.data.forEach((obj) => {
        if (obj.correct) {
          right.push(obj)
        } else {
          wrong.push(obj)
        }
      })
      setRightList(right);
      setWrongList(wrong);
     })
     .catch((err) => {
      console.log(err)
     })
  }, [])

  return (
    <div>
      <button onClick={() => changeView('Waking Spell')}>Home</button>
      <div>
        <button onClick={() => setCorrect(true)}>Correct</button>
        <button onClick={() => setCorrect(false)}>Incorrect</button>
      </div>
      {correct &&
        <div>
          <h1>You got these words right!</h1>
          <List list={rightList}/>
        </div>
      }
      {!correct &&
        <div>
          <h1>Practice makes perfect for these!</h1>
          <List list={wrongList}/>
        </div>
      }
    </div>
  )
}

export default Results;
