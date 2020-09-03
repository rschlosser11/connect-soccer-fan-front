const ADD_TEAMS = 'ADD_TEAMS';
const ADD_FIXTURES = 'ADD_FIXTURES';
const ADD_USER = 'ADD_USER'

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

export const fetchUser = (user) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: user
            })
        })
        .then(resp => resp.json())
        .then(obj => {
            dispatch({type: ADD_USER, user: obj})
            sessionStorage.setItem('user', obj.id)
        })
        .catch(error => console.log(error))
    }
}

export const newUser = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: user
            })
        })
        .then(resp => resp.json())
        .then(obj => {
            dispatch({type: ADD_USER, user: obj})
            sessionStorage.setItem('user', obj.id)
        })
        .catch(err => console.log(err))
    }
}