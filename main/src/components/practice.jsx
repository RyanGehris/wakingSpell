import React, { useState } from 'react'
import '../App.css'

function Practice({ changeView, words }) {
  const [entry, setEntry] = useState('');
  const [req, setReq] = {0: false, 1: false, 2: false}

  const wordReq = function() {
    let removedPunctuation = entry.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString = removedPunctuation.replace(/\s{2,}/g," ");
    let finalArray = finalString.toLowerCase().split(' ');
    let newReq = {};
    newReq['0'] = finalArray.includes(words[0].toLowerCase())
    newReq['1'] = finalArray.includes(words[1].toLowerCase())
    newReq['2'] = finalArray.includes(words[2].toLowerCase())
    setReq(newReq);
  }

  return (
    <div>
      <div>Write one sentence for each word you learned!</div>
      <form>
        <textarea
          placeholder="Type your sentences here..."
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value)
            wordReq()
          }}>
        </textarea>
      </form>
      <div>
        <span style={{return (req[0] ? ("border": "solid green 3px"): ("border": "solid red 3px"))}}>{words[0]}</span>
        <span style={{return (req[0] ? ("border": "solid green 3px"): ("border": "solid red 3px"))}}>{words[1]}</span>
        <span style={{return (req[0] ? ("border": "solid green 3px"): ("border": "solid red 3px"))}}>{words[2]}</span>
      </div>
      <button onClick={() => changeView('Greeting')}>Next</button>
    </div>
  )
}

export default Practice;