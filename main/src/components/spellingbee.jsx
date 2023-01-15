import React, { useState } from "react";
import soundIcon from "../assets/icons8-audio-50.png";
import axios from "axios";
import "../App.css";

function SpellingBee({ changeView, wordData }) {
  const [order, setOrder] = useState(0);
  const [guess, setGuess] = useState("");

  const word = wordData[order].word;
  const pOS = wordData[order].meanings[0].partOfSpeech;
  const def = wordData[order].meanings[0].definitions[0].definition;
  const exp =
    wordData[order].meanings[0].definitions[0].example ||
    "No examples provided.";

  const handleNext = function() {
    let nextPosition = order + 1;
    if (nextPosition > wordData.length - 1) {
      changeView("Practice");
      setOrder(0);
    } else {
      setOrder(nextPosition);
    }
  };

  const handleSubmit = function() {
    let correct = word.toLowerCase() === guess.toLowerCase();
    let saveData = {
      attempted_word: word,
      audio: findAudio(order),
      definition: def,
      example: exp,
      partOfSpeech: pOS,
      correct: correct,
    };
    // console.log(saveData);
    axios
      .post("/updateResult", saveData)
      .then((res) => {
        console.log("Success ", res);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
    if (correct) {
      alert("Good Job!");
    } else {
      alert(`Nice try! The correct spelling is: ${word}`);
    }
    setGuess("");
    handleNext();
  };

  const findAudio = function(num) {
    let phoneArray = wordData[num].phonetics;
    let audio = "";
    for (let i = 0; i < phoneArray.length; i++) {
      if (phoneArray[i].audio.length > 2) {
        audio = phoneArray[i].audio;
      }
    }
    return audio;
  };

  const removeString = function(str, sentence) {
    if (sentence === "No examples provided.") {
      return "No examples provided.";
    }
    let sentenceArray = sentence.split(" ");
    for (let j = 0; j < sentenceArray.length; j++) {
      let s = sentenceArray[j];
      let punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      var finalString = punctuationless.replace(/\s{2,}/g, " ");
      if (finalString.toLowerCase() === str.toLowerCase()) {
        sentenceArray[j] = "_____";
      }
    }
    return sentenceArray.join(" ");
  };

  const handleWordPlay = function() {
    let playWord = document.getElementById("playWord");
    playWord.play();
  };

  // console.log(def, exp, word, pOS);

  if (order <= wordData.length - 1) {
    return (
      <div class="spellBeeCont">
        <div className="resultTile">
          <div>
            <div className="resultTileHead">
              <form>
                <input
                  className="spellingInput"
                  type="text"
                  placeholder="Spell it!"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                ></input>
              </form>
              {findAudio(order).length !== 0 && (
                <img
                  src={soundIcon}
                  alt="Sound icon"
                  onClick={() => handleWordPlay()}
                ></img>
              )}
              {findAudio(order).length === 0 && (
                <div>
                  Sorry there is no audio. Try to guess this {word.length}{" "}
                  letter word that starts with {word.split("")[0]} and ends with{" "}
                  {word.split("")[word.length - 1]}
                </div>
              )}
            </div>
          </div>
          <div class="wordDataContainer">
            <span>Part of Speech:</span> {pOS}
          </div>
          <div class="wordDataContainer">
            <span>Definition:</span> {def}
          </div>
          <div class="wordDataContainer">
            <span>Example:</span> {removeString(word, exp)}
          </div>
        </div>
        <button className="submitAnswer" onClick={() => handleSubmit()}>
          Submit
        </button>
        <audio id="playWord" src={findAudio(order)} type="audio/mpeg">
          browser does not support audio
        </audio>
      </div>
    );
  }
}

export default SpellingBee;
