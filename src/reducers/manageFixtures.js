export default function manageFixtures(state = [], action) {
    switch (action.type) {
        case 'ADD_FIXTURES':
            return action.fixtures;
        default:
            return state;
    }
}