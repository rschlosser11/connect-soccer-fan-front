export default function manageComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.comments;
        case 'NEW_COMMENT':
            if (!state.find(comm => comm.id === action.comment.id)){
                return [...state, action.comment]
            } else {
                return state;
            }    
        default:
            return state;
    }
}