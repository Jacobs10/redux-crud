import React from 'react'
import SportList from '../containers/sport_list'
import SportDetail from '../containers/sport_detail'
import SportForm from '../containers/sport_form'


export default class App extends React.Component {
  render(){
    return (
      <div>
        <SportList />
        <SportDetail />
        <SportForm />
      </div>
    )
  }
}
