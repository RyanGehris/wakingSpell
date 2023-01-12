import React, { useState } from 'react'
import '../App.css'

function Greeting({ changeView, updateQuiz }) {

  return (
    <div>
      You made it to greeting
      <button onClick={() => {
        changeView('Waking Spell');
        updateQuiz();
      }}>
        Start Your Day
      </button>
    </div>
  )
}

export default Greeting;