import React, { useState } from 'react'
import '../App.css'

function Practice({ changeView, words }) {
  const [entry, setEntry] = useState('');
  const [req, setReq] = {0: false, 1: false, 2: false}

  // const removeString = function(str, sentence) {
  //   if (sentence === undefined) {
  //     return 'No example provided.'
  //   }
  //   let sentenceArray = sentence.split(' ');
  //   for (let j = 0; j < sentenceArray.length; j++) {
  //     let s = sentenceArray[j]
  //     let punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //     var finalString = punctuationless.replace(/\s{2,}/g," ");
  //     if (finalString.toLowerCase() === str.toLowerCase()) {
  //       sentenceArray[j] = '_____';
  //     }
  //   }
  //   return sentenceArray.join(' ');
  // }

  const wordReq = function() {
    let sentenceArray = entry.split(' ')
    if (sentenceArray.length > 2) {
      for (let i = 0; i < sentenceArray.length; i++) {
        let s = sentenceArray[i]
        let punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        var finalString = punctuationless.replace(/\s{2,}/g," ");
        if (finalString.toLowerCase() === words[0].toLowerCase()) {
          newReq
        } else if (finalString.toLowerCase() === words[1].toLowerCase()) {

        } else if (finalString.toLowerCase() === words[2].toLowerCase()) {

        }
      }
    }
  }

  return (
    <div>
      <div>Write one sentence for each word you learned!</div>
      <form>
        <textarea
          placeholder="Type your sentences here..."
          value={entry}
          onChange={() => {
            setEntry(e.target.value)
            wordReq()
          }}>
        </textarea>
      </form>
      <div>
        <span>{words[0]}</span>
        <span>{words[1]}</span>
        <span>{words[2]}</span>
      </div>
      <button onClick={() => changeView('Greeting')}>Next</button>
    </div>
  )
}

export default Practice;