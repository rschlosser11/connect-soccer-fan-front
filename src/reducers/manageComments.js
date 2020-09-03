export default function manageComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.comments;
        default:
            return state;
    }
}