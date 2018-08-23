export const postReducer = (state = {posts: []}, action) => {
    switch(action.type) {
        case 'SET_POST_LIST_ACTION':
            return action;
        default:
            return state;
    }
};
export const postUserReducer = (state = {users: []}, action) => {
    switch(action.type) {
        case 'SET_POST_USER_ACTION':
            return action;
        default:
            return state;
    }
};