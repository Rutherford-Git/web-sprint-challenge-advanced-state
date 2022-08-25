// ❗ You don't need to add extra reducers to achieve MVP
import { types } from '@babel/core'
import { s } from 'msw/lib/glossary-58eca5a8'
import { combineReducers } from 'redux'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE: {
  return state 
    }
    case types.MOVE_COUNTERCLOCKWISE:{
  return state
  }
}}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE: 
  return payload: state
}}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER: 
  return payload: state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
  return state
}}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE: {
  return action.payload
    }
    case types.RESET_FORM:{
  return action.payload
  }
}}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
