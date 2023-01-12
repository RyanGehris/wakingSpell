import React, { useState } from 'react'
import '../App.css'

function Practice({ changeView, words }) {

  return (
    <div>
      <div>Write one or more sentences using the words you learned!</div>
      <form>
        <textarea></textarea>
      </form>
      <div>
        <span>{words[0]}</span>
        <span>{words[1]}</span>
        <span onClick={() => changeView('Greeting')}>{words[2]}</span>
      </div>
    </div>
  )
}

export default Practice;