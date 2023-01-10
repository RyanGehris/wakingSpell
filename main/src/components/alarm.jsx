import { useState } from 'react'
import '../App.css'

function Alarm({ changeView }) {

  return (
    <div>
      <div>Alarm Page</div>
      <button onClick={() => changeView('home')}>Home</button>
    </div>
  )
}

export default Alarm;