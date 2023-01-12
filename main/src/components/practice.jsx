import React, { useState } from 'react'
import '../App.css'

function Practice({ changeView, words }) {

  return (
    <div>
      <div>Write one sentence for each word you learned!</div>
      <form>
        <textarea></textarea>
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