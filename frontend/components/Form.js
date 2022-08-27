import { render } from '@testing-library/react'
import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export class Form extends React.Component {
  /* const {form} = props */
 
onChange = evt => {   
    const key = evt.target.id
    const value = evt.target.value
    let enable = 
    this.props.inputChange({key, value})
    
    const a = this.props.form.newQuestion.trim().length
    const b = this.props.form.newTrueAnswer.trim().length
    const c =this.props.form.newFalseAnswer.trim().length
    let disabled = !(a > 0) && !(b > 0) && !(c > 0) ? false : true

  }

onSubmit = evt => {
 evt.preventDefault();
 this.props.resetForm()
  }
  
  render(){
    //const  disabled = this.props
/*     let disabled = !(a > 0) && !( b > 0) && !(c > 0) ? false : true
    const a = this.props.form.newQuestion.trim().length
    const b = this.props.form.newTrueAnswer.trim().length
    const c =this.props.form.newFalseAnswer.trim().length */
    /* console.log(disabled) */
  return (
    <form id="form" onSubmit={this.onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={this.onChange}  id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={this.onChange}  id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={this.onChange}  id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={[!this.props.form.newFalseAnswer.trim().length, !this.props.form.newTrueAnswer.trim().length, !this.props.form.newQuestion.trim().length] } id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
}

export default connect(st => st, actionCreators)(Form)
