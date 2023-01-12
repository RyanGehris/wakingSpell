import React from 'react'
import '../App.css'

function Greeting({ changeView, updateQuiz, aiImage, setAiImage,  practiceEntry, setPracticeEntry }) {

  return (
    <div class="greetingCont">
      <div>
        <div>AI is awake and productive! Time for you to be too!</div>
        {aiImage === '' &&
          <div>
            <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt="loading preview"></img>
            Waiting for AI to generate image.....
          </div>
        }
        {aiImage !== '' &&
          <img src={aiImage} alt={`produced by AI based off of the description ${practiceEntry}`}></img>
        }
      </div>
      <button onClick={() => {
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