export default function manageComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.comments;
        case 'NEW_COMMENT':
            return [...state, action.comment]
        default:
            return state;
    }
}