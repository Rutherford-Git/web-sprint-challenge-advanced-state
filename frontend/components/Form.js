import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export class Form extends React.Component {
  /* const {form} = props */
 
onChange = evt => {   
    const key = evt.target.id
    const value = evt.target.value 
    this.props.inputChange({key, value})
  }

onSubmit = evt => {
 evt.preventDefault();
 console.log(this.props)
 
 this.props.postQuiz(
    this.props.form.newQuestion, 
    this.props.form.newTrueAnswer, 
    this.props.form.newFalseAnswer
  )
  console.log(this.props)
  }
  
  render(){

  return (
    <form id="form" onSubmit={this.onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={this.onChange}  value={this.props.form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={this.onChange}  value={ this.props.form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={this.onChange}  value={this.props.form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={
        !(this.props.form.newFalseAnswer.trim().length && this.props.form.newTrueAnswer.trim().length && this.props.form.newQuestion.trim().length) 
        } id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
}

export default connect(st => st, actionCreators)(Form)
