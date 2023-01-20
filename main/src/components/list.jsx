import React from "react";
import soundIcon from "../assets/icons8-audio-50.png";
import "../App.css";

function List({ list }) {
  const handleWordPlay = function(id) {
    let playWord = document.getElementById(id);
    playWord.play();
  };

  return (
    <div className="resultsList">
      {list.map((wordObj) => {
        return (
          <div className="resultTile">
            <div className="resultTileHead">
              <div>{wordObj.attempted_word}:</div>
              {wordObj.audio.length !== 0 && (
                <img
                  src={soundIcon}
                  alt="Sound icon"
                  onClick={() =>
                    handleWordPlay(wordObj.attempted_word + "audio")
                  }
                ></img>
              )}
              {wordObj.audio.length === 0 && (
                <span>Sorry there is no audio.</span>
              )}
            </div>
            <div className="wordDataCont">
              <span>Part of Speech:</span> {wordObj.partOfSpeech}
            </div>
            <div className="wordDataCont">
              <span>Definition:</span> {wordObj.definition}
            </div>
            {wordObj.example.length > 1 && (
              <div className="wordDataCont">
                <span>Example:</span> {wordObj.example}
              </div>
            )}
            {(wordObj.example.length === 1 ||
              wordObj.example.length === undefined) && (
              <div className="wordDataCont">
                <span>Example:</span> Example: NONE PROVIDED
              </div>
            )}
            <audio
              id={wordObj.attempted_word + "audio"}
              src={wordObj.audio}
              type="audio/mpeg"
            >
              browser does not support audio
            </audio>
          </div>
        );
      })}
    </div>
  );
}

export default List;
