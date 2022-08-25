import React from 'react'
import { moveClockwise } from '../state/action-creators'
import {moveCounterClockwise} from '../state/action-creators'


export default function Wheel(props) {
  
 function clockwise (evt){
    const { set } = evt.target
     moveClockwise({ set })
  }

  function counterclockwise (evt){
    const { set } = evt.target
     moveCounterClockwise({ set })
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={counterclockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={clockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
