import React from 'react'
import '../App.css'

function Greeting({ changeView, updateQuiz, aiImage, setAiImage,  practiceEntry, setPracticeEntry }) {

  return (
    <div class="greetingCont">
      <div className='imageCont'>
        {aiImage === '' &&
          <>
            <h2>Waking up AI!!!</h2>
            <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt="loading preview"></img>
          </>
        }
        {aiImage !== '' &&
          <>
            <h2>AI is awake and productive! Time for you to be too!</h2>
            <img src={aiImage} alt={`produced by AI based off of the description ${practiceEntry}`}></img>
          </>
        }
      </div>
      <button className="submitAnswer" onClick={() => {
        updateQuiz();
        setPracticeEntry('');
        setAiImage('');
        changeView('Waking Spell');
      }}>
        Start Your Day
      </button>
    </div>
  )
}

export default Greeting;