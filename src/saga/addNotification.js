import { put } from 'redux-saga/effects';
import { ADD_NOTIFICATION_SUCCESS, ADD_NOTIFICATION_FAILURE } from "../actionTypes/addNotification.js";

function addNotifacation(data){
  const response = data;
  return response;
}

export default function* addNotifacationWorker(action){
  try{
    const response = yield addNotifacation(action.payload);
    yield put({ type: ADD_NOTIFICATION_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: ADD_NOTIFICATION_FAILURE, error });
  }
}
