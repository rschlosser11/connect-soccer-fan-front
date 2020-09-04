import { combineReducers } from 'redux';
import manageTeams from './manageTeams'
import manageFixtures from './manageFixtures'
import manageUsers from './manageUsers'
import manageComments from './manageComments';
import managePlayers from './managePlayers';

const rootReducer = combineReducers({teams: manageTeams, fixtures: manageFixtures, user: manageUsers, comments: manageComments, players: managePlayers})

export default rootReducer;