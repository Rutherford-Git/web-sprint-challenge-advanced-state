import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'

export function Wheel(props) {
const {wheel} = props

function clockwise (){
  props.moveClockwise()
  }

function counterclockwise (){
  props.moveCounterClockwise()
}

  return (
    <div id="wrapper">
      <div id="wheel">
        <div id={0} className={`cog${wheel===0?' active': '' }`} style={{ "--i": 0 }}>{`${wheel===0?'B': '' }`}</div>
        <div id={1} className={`cog${wheel===1?' active': '' }`} style={{ "--i": 1 }}>{`${wheel===1?'B': '' }`}</div>
        <div id={2} className={`cog${wheel===2?' active': '' }`} style={{ "--i": 2 }}>{`${wheel===2?'B': '' }`}</div>
        <div id={3} className={`cog${wheel===3?' active': '' }`} style={{ "--i": 3 }}>{`${wheel===3?'B': '' }`}</div>
        <div id={4} className={`cog${wheel===4?' active': '' }`} style={{ "--i": 4 }}>{`${wheel===4?'B': '' }`}</div>
        <div id={5} className={`cog${wheel===5?' active': '' }`} style={{ "--i": 5 }}>{`${wheel===5?'B': '' }`}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={counterclockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={clockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actions)(Wheel)
