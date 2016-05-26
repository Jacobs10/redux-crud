export default function(state= null, action){
  switch(action.type){
    case 'SPORT_SELECTED':
      return action.payload
  }
  return state
}
