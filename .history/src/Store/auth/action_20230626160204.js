import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './ActionTypes';

export const login = (phoneNumber) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    axios
      .post('https://akashdeep12.vercel.app/user/loginProfile1', {
        phoneNumber: phoneNumber
      })
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      });
  };
};