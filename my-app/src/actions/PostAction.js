import axios from 'axios/index';

export const postAction = () => (dispatch) => {
  axios.get('http://localhost:3000')
    .then((response) => {
      dispatch({ type: 'SET_POST_LIST_ACTION', posts: response.data });
    });
};

