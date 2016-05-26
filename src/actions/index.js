// const SPORT_SELECTED = 'SPORT_SELECTED'
// export default SPORT_SELECTED

export function selectSport(sport){
  return {
    type: 'SPORT_SELECTED',
    payload: sport
  }
}
export function deleteSport(sport){
  return {
    type: 'SPORT_DELETED',
    payload: sport
  }
}

export function addSport(sport, description){
  return {
    type: 'ADD_SPORT',
    payload: [sport, description]
  }
}

export function editSport(sport, description){
  return {
    type: 'EDIT_SPORT',
    payload: [sport, description]
  }
}

export function showEdit(){
  return {
    type: 'SHOW_EDIT',
    payload: true
  }
}
