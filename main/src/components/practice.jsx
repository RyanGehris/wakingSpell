import React, { useState } from 'react'
import '../App.css'

function Practice({ changeView }) {

  return (
    <div>
      <div>Write one or more sentences using the words you learned!</div>
      <form>
        <textarea></textarea>
        <submit></submit>
      </form>
      <div>
        <span>word1</span>
        <span>word2</span>
        <span onClick={() => changeView('Greeting')}>word3</span>
      </div>
    </div>
  )
}

export default Practice;