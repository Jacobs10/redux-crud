import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSport, deleteSport, showEdit, editSport } from '../actions/index'
import SportForm from './sport_form'

export default class SportList extends React.Component {
  renderList(){


    return this.props.sports.map( (sport) => {
      return <div><li
      key={sport.title}
      onClick={()=>this.props.selectSport(sport)}
      className='list-group-item'


      > {sport.title} || {sport.description}</li>
      <button onClick={()=>this.props.deleteSport(sport)}>Delete</button>
      <button onClick={()=>this.props.showEdit()}>Edit</button>

      </div>
    })
  }

  render(){
    var editForm = ''

    if (this.props.showEditForm){
      editForm = <SportForm  />
    }
    return (
      <ul>
      {this.renderList()}
      {editForm}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    sports: state.sports  ,
    showEditForm: state.showEditForm
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators( { selectSport, deleteSport, showEdit }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(SportList)
