import React from 'react';
import '../App.css';

function List({ list }) {

  const handleWordPlay = function(id) {
    let playWord = document.getElementById(id);
    playWord.play()
  }

  return (
    <div class="resultsList">
      {list.map((wordObj) => {
        return (
          <div class="resultTile">
            <div>
              <div>
                <div>{wordObj.attempted_word}</div>
                {wordObj.audio.length !== 0 &&
                  <button onClick={() => handleWordPlay(wordObj.attempted_word + 'audio')}>Play</button>
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
            <audio id={wordObj.attempted_word + 'audio'} src={wordObj.audio} type="audio/mpeg">
              browser does not support audio
            </audio>
          </div>
        )
      })}
    </div>
  )
}

export default List;
