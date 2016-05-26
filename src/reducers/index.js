import { combineReducers } from 'redux'
import SportsReducer from './reducer_sports'
import activeSportReducer from './reducer_active_sport'
import editFormReducer from './reducer_edit_form'


const rootReducer = combineReducers({
  sports: SportsReducer,
  activeSport: activeSportReducer,
  showEditForm: editFormReducer
})

export default rootReducer
