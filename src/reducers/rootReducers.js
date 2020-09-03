import { combineReducers } from 'redux';
import manageTeams from './manageTeams'
import manageFixtures from './manageFixtures'
import manageUsers from './manageUsers'

const rootReducer = combineReducers({teams: manageTeams, fixtures: manageFixtures, user: manageUsers})

export default rootReducer;