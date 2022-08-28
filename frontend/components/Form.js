import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export class Form extends React.Component {

   onChange = evt => {
    const key = evt.target.id
    const value = evt.target.value
    this.props.inputchange({key, value})
  }

   onSubmit = evt => {
    evt.preventDefault();
    this.props.postQuiz(
      this.props.form.newQuestion,
      this.props.form.newTrueQuestion,
      this.props.form.newFalseQuestion,
    )
  }
    render(){
  return (
    <form id="form" onSubmit={this.onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={this.onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={this.onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={this.onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
    }
}

export default connect(st => st, actionCreators)(Form)
