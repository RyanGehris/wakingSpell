import React, { useState } from 'react';
import '../App.css';

function SpellingBee({ changeView }) {
  const [order, setOrder] = useState(0);

  const array = ['1', '2', '3'];

  const handleNext = function() {
    let nextPosition = order + 1
    if (nextPosition > array.length - 1) {
      changeView('Practice');
      setOrder(0);
    } else {
      setOrder(nextPosition);
    }
  }

  if (order <= (array.length - 1)) {
    return (
      <div>
        <div>
          <div>
            <span>{array[order]}</span>
            <button>Play</button>
          </div>
          <div>Part of Speech</div>
          <div>Definition</div>
          <div>Example</div>
        </div>
        <div>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>
    )
  }
}

export default SpellingBee;