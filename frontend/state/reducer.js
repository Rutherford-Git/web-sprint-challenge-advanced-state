// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE: 
  return state + 1; 
    case types.MOVE_COUNTERCLOCKWISE: 
  return state -1; 
  default:
    return state
  }
}

const initialQuizState = {
  answer1: false,
  answer2: false
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE: 
    return state
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
/*   switch (action.type) {
    case SET_SELECTED_ANSWER:  */
  return state
  
  }


const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
/*   switch (action.type) {
    case SET_INFO_MESSAGE: */
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
/*   switch (action.type) {
    case INPUT_CHANGE: 
  return state
    
    case RESET_FORM:
  return state
  
} */
return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
