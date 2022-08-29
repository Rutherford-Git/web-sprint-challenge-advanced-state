import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'


export function Quiz (props)/* extends React.Component */ {
  const {quiz} = props

const handleSelect = (evt)=> {
    const id = evt.target.id
    props.selectAnswer(id)
    console.log(id)
    console.log(quiz)
  }
const handleSubmit = (e)=>{
    e.preventDefault()
    props.postAnswer(quiz.quiz_id, quiz.selectedAnswer)
  }
      useEffect(()=>{
        if(!props.quiz){
          props.fetchQuiz()
        }
      }, []);
 
      
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        /* this. */quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${quiz.selectedAnswer === quiz.answers[0].answer_id? ' selected': ''}`}>
              {quiz.answers[0].text}
                <button id={quiz.answers[0].answer_id} onClick={handleSelect}>
                  {quiz.selectedAnswer === quiz.answers[0].answer_id? 'SELECTED': 'Select'}
                </button>
              </div>

              <div className={`answer${quiz.selectedAnswer === quiz.answers[1].answer_id? ' selected': ''}`}>
                {quiz.answers[1].text}
                <button id={quiz.answers[1].answer_id} onClick={handleSelect}>
                {quiz.selectedAnswer === quiz.answers[1].answer_id? 'SELECTED': 'Select'}
                </button>
              </div>
            </div>

            <button disabled={!quiz.selectedAnswer} onClick={handleSubmit} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
   /*  } */
}

export default connect(st => st, actions)(Quiz)