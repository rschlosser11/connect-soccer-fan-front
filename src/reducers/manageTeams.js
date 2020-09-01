export default function manageTeams (state = {teams: []}, action) {
    switch (action.type) {
        case 'ADD_TEAMS':
            return {teams: action.teams};
        default: 
            return state;
    }
}