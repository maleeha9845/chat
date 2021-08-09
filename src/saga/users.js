import { put } from 'redux-saga/effects';
import { USERS_SUCCESS, USERS_FAILURE } from "../actionTypes/users.js";
import axios from 'axios';

function usersApi(data){
  const response = axios.get('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000/users/list');
  return response;
}

export default function* usersApiWorker(action){
  try{
    const response = yield usersApi(action.payload);
    yield put({ type: USERS_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: USERS_FAILURE, error });
  }
}
