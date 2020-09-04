const ADD_TEAMS = 'ADD_TEAMS';
const ADD_FIXTURES = 'ADD_FIXTURES';
const ADD_USER = 'ADD_USER'
const ADD_COMMENTS = 'ADD_COMMENTS'
const NEW_COMMENT = 'NEW_COMMENT';
const REMOVE_USER = 'REMOVE_USER';
const ADD_PLAYERS = 'ADD_PLAYERS'

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

export const fetchComments = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/comments`)
        .then(resp => resp.json())
        .then(obj => dispatch({type: ADD_COMMENTS, comments: obj}))
        .catch(err => console.log(err))
    }
}

export const newComment = (comment) => {
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                comment: comment
            })
        })
        .then(resp => resp.json())
        .then(obj => dispatch({type: NEW_COMMENT, comment: obj}))
        .catch(err => console.log(err))
    }
}

export const removeUser = () => {
    return {type: REMOVE_USER}
}

export const fetchPlayers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/players')
        .then(resp => resp.json())
        .then(obj => dispatch({type: ADD_PLAYERS, players: obj}))
        .catch(err => console.log(err))
    }
}