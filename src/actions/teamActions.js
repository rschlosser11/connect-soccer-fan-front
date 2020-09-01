const ADD_TEAMS = 'ADD_TEAMS';

export const fetchTeams = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/teams')
        .then(resp => resp.json())
        .then(obj => dispatch({type: ADD_TEAMS, teams: obj}))
        .catch(err => console.log(err))
    }
}