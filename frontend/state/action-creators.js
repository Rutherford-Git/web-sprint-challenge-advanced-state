// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'

export function moveClockwise() { 
  console.log('clockwise action working')
  return ({type: types.MOVE_CLOCKWISE})
}

export function moveCounterClockwise() {
  console.log('counter clockwise action working')
  return ({type: types.MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer(ans) { 
  console.log('select action working')
  return ({type: types.SET_SELECTED_ANSWER, payload: ans})
}

export function setMessage(msg) {
  return ({type: types.SET_INFO_MESSAGE, payload: msg})
 }

export function setQuiz(quiz) { 
  console.log('set action working')
  return ({type: types.SET_QUIZ_INTO_STATE, payload: quiz })
}

export function inputChange(value) { 
  console.log('set action working')
  return ({type: types.INPUT_CHANGE, payload: value})
}

export function resetForm() { }

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
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
