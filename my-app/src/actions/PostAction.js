import axios from "axios/index";

export const postAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000')
            .then(response => {
                console.log(response);
                dispatch({type: 'SET_POST_LIST_ACTION', posts: response.data})
            });
    }
};
export const postUserAction = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response  =>{
                dispatch({type: 'SET_POST_USER_ACTION',users:response.data})
            });

    }
};