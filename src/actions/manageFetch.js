const ADD_TEAMS = 'ADD_TEAMS';
const ADD_FIXTURES = 'ADD_FIXTURES';

export const fetchTeams = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/teams')
        .then(resp => resp.json())
        .then(obj => dispatch({type: ADD_TEAMS, teams: obj}))
        .catch(err => console.log(err))
    }
}

export const fetchFixtures = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/fixtures')
        .then(resp => resp.json())
        .then(obj => dispatch({type: ADD_FIXTURES, fixtures: obj}))
        .catch(err => console.log(err))
    }
}