import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../state/action-creators'

export class Message extends React.Component {
  
  
 
 render(){
  return <div id="message">{this.props.infoMessage}</div>
 }
}

export default connect(st => st, actions)(Message)