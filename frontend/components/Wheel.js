import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'

export function Wheel(props) {
  /* const [state, dispatch] = useReducer(moveClockwise, initialWheelState) */
const {wheelState} = props

 function clockwise (){
  const setActive = document.getElementById(wheelState)
    props.moveClockwise(()=>{
      wheelState === setActive?
      setActive.classList.add('cog active'):
      null
    })
  }

  

  function counterclockwise (){
     props.moveCounterClockwise()
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div id={0} className="cog active" style={{ "--i": 0 }}>B</div>
        <div id={1} className="cog" style={{ "--i": 1 }}></div>
        <div id={2} className="cog" style={{ "--i": 2 }}></div>
        <div id={3} className="cog" style={{ "--i": 3 }}></div>
        <div id={4} className="cog" style={{ "--i": 4 }}></div>
        <div id={5} className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={counterclockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={clockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
/* const mapStateToProps = state =>{
  return{
    index: state.index
  }
}
 */
export default connect(st => st, actions)(Wheel)
