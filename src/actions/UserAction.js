import axios from 'axios';

const apiUrl = 'http://localhost:5000/';

export const getUser = ({ email,password }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}auth/login`, {email, password})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};