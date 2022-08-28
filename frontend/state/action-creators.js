
import * as types from "./action-types"
import axios from "axios"

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  console.log('red')
  return { type: types.MOVE_CLOCKWISE }
 }

export function moveCounterClockwise() { 
  console.log('blue')
  return { type: types.MOVE_CLOCKWISE }
 }

export function selectAnswer() { 
  return { type: types.SET_SELECTED_ANSWER }
}

export function setMessage() {
  return { type: types.SET_INFO_MESSAGE }
 }

export function setQuiz() { 
  return { type: types.SET_QUIZ_INTO_STATE }
}

export function inputChange(key, value) {
  return { type: types.INPUT_CHANGE, payload: {key, value} }
 }

export function resetForm() { 
  return { type: types.RESET_FORM }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(a, b, c) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios
    .post('http://localhost:9000/api/quiz/new',{
      question_text: a,
       true_answer_text: b,
        false_answer_text: c
    })
    .then(res=>{
      console.log(res)
      dispatch(resetForm())
      dispatch(setMessage(`Congrats: "${a}" is a great Question`))
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
