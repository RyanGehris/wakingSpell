import React from 'react';
import '../App.css';

function List({ list }) {

  const handleWordPlay = function() {
    let playWord = document.getElementById('playWord');
    playWord.play()
  }

  return (
    <div>
      {list.map((wordObj) => {
        return (
          <div>
            <div>
              <div>
                <div>{wordObj.attempted_word}</div>
                {wordObj.audio.length !== 0 &&
                  <button onClick={() => handleWordPlay()}>Play</button>
                }
                {wordObj.audio.length === 0 &&
                  <div>Sorry there is no audio.</div>
                }
              </div>
            </div>
            <div>Part of Speech: {wordObj.partOfSpeech}</div>
            <div>Definition: {wordObj.definition}</div>
            {wordObj.example.length > 1 &&
              <div>Example: {wordObj.example}</div>
            }
            {(wordObj.example.length === 1 || wordObj.example.length === undefined) &&
              <div>Sorry, there is no example for this word</div>
            }
            <audio id="playWord" src={wordObj.audio} type="audio/mpeg">
              browser does not support audio
            </audio>
          </div>
        )
      })}
    </div>
  )
}

export default List;
