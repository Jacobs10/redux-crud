import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addSport, deleteSport } from '../actions/index'

class SportForm extends React.Component {

 handleSubmit(e){
   e.preventDefault()
   this.props.addSport(this.name.value, this.description.value)
 }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} role="form">
        <div className="form-group">
          Name: <input ref={input => this.name = input} type="text" className="form-control" />
          Description: <textarea ref={input => this.description = input} className="form-control"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addSport, deleteSport}, dispatch)
}

export default connect(null, mapDispatchToProps)(SportForm)
