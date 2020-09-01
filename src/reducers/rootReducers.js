import { combineReducers } from 'redux';
import manageTeams from './manageTeams'

const rootReducer = combineReducers({teams: manageTeams})

export default rootReducer;