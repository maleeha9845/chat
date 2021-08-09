import {LOGIN_REQUEST} from '../actionTypes/login.js';

const loginRequest = data => ({
  type: LOGIN_REQUEST,
  payload: data
});

export  default loginRequest;
