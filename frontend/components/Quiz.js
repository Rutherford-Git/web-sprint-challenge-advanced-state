import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'
import { selectAnswer } from '../state/action-creators';


export function Quiz(props) {
  const {state} = props

  const handleSelect = ()=> {
    selectedAnswer()
  }
  const handleSubmit = ()=>{
    props.setQuiz(state)
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button onClick={handleSelect}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button onClick={handleSelect}>
                  Select
                </button>
              </div>
            </div>

            <button onClick={handleSubmit} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
export default connect(st => st, actions)(Quiz)