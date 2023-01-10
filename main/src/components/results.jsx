import { useState } from 'react'
import '../App.css'

function Results({ changeView }) {
  const [correct, setCorrect] = useState(true)

  return (
    <div>
      <div>Results Page</div>
      <button onClick={() => changeView('home')}>Home</button>
      <div>
        <button onClick={() => setCorrect(true)}>Correct</button>
        <button onClick={() => setCorrect(false)}>Incorrect</button>
      </div>
      <div>
        {correct &&
          <h1>You got these words right!</h1>
        }
        {!correct &&
          <h1>Practice makes perfect for these!</h1>
        }
      </div>
    </div>
  )
}

export default Results;
