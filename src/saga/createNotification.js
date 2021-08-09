
import { put } from 'redux-saga/effects';
import axios from 'axios';
import { CREATE_NOTIFICATION_SUCCESS, CREATE_NOTIFICATION_FAILURE } from "../actionTypes/createNotification.js";

function createNotification(data){
  console.log(data);
  const response = axios.post('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000/users/create/notifications',data)
    		.then(function(response){
           console.log(response);
           return response;
        }).catch(function(error){
            return error;
        })

  console.log(response);
  return response;
}

export default function* createNotificationWorker(action){
  try{
    const response = yield createNotification(action.payload);
    yield put({ type: CREATE_NOTIFICATION_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: CREATE_NOTIFICATION_FAILURE, error });
  }
}
