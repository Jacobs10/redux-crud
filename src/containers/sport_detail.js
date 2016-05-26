import React from 'react'
import { connect } from 'react-redux'

class SportDetail extends React.Component {
  render(){
    if (!this.props.activeSport){
      return <div> Select a sport to get started.</div>
    }
    return (
      <div> {this.props.activeSport.title} </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeSport : state.activeSport
  }
}

export default connect(mapStateToProps)(SportDetail)
