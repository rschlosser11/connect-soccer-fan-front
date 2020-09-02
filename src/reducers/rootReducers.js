import { combineReducers } from 'redux';
import manageTeams from './manageTeams'
import manageFixtures from './manageFixtures'

const rootReducer = combineReducers({teams: manageTeams, fixtures: manageFixtures})

export default rootReducer;