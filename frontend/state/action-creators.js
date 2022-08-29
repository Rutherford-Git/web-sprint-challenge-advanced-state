// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'

export function moveClockwise() { 
  console.log('clockwise action working')
  return ({type: types.MOVE_CLOCKWISE})
}

export function moveCounterClockwise() { 
  console.log()
  return { type: types.MOVE_CLOCKWISE }
 }


export function selectAnswer(ans) { 
  console.log('select action working')
  return ({type: types.SET_SELECTED_ANSWER, payload: ans})
}

export function setMessage(msg) {
  return ({type: types.SET_INFO_MESSAGE, payload: msg})
}

export function setQuiz(quizstate) { 
  console.log('set action working')
  return ({type: types.SET_QUIZ_INTO_STATE, payload: quizstate })
}

export function inputChange({key, value}) { 
  console.log('set action working')
  return ({type: types.INPUT_CHANGE, payload: {key, value}})
}

export function resetForm() { 
  console.log('form reset')
  return ({type: types.RESET_FORM})
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null));

     axios.get('http://localhost:9000/api/quiz/next')
      .then( res=>{
         console.log(res.data) 
        // dispatch(setQuiz(res.data)) 
        const newQuiz =({type: types.SET_QUIZ_INTO_STATE, payload: res.data })
        dispatch(newQuiz)
      })
      .catch(err=>{
        console.log(err)
      }) 
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
   }
} 
export function postAnswer(a1,b2) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios
    .post('http://localhost:9000/api/quiz/answer', { 
      'quiz_id': `${a1}`, 
      'answer_id': `${b2}`, 
    })
    .then(res =>{
      console.log(res)
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

export function postQuiz(a1,b2,b3) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form 
    axios
    .post('http://localhost:9000/api/quiz/new', { 
      'question_text': `${a1}`, 
      'true_answer_text': `${b2}`, 
      'false_answer_text': `${b3}` 
    })
    .then(res=>{
      console.log(res)
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    })
  }}

// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
