export default function managePlayers(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYERS':
            return action.players;
        default:
            return state;
    }
}