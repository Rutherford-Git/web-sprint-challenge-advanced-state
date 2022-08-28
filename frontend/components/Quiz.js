import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'


export class Quiz extends React.Component {

/*   handleSelect = (evt)=> {
    const id = evt.target
    this.props.selectAnswer(id)
    console.log(id)
    console.log(this.props.quiz)
    console.log(this.props)
  }
  handleSubmit = ()=>{
    this.props.setQuiz()
  }
 */
  render(){
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        /* !this.props.quiz */true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button /* onClick={this.handleSelect} */>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button /* onClick={this.handleSelect} */>
                  Select
                </button>
              </div>
            </div>

            <button /* onClick={this.handleSubmit} */ id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
    }
}

export default connect(st => st, actions)(Quiz)