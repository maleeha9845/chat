import { put } from 'redux-saga/effects';
import { CHANGE_MEDIA_SERVER_SUCCESS, CHANGE_MEDIA_SERVER_FAILURE } from "../actionTypes/changeMediaServer.js";
import axios from 'axios';

function changeMediaServer(data){
  console.log(data);
  const response = axios.post('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000//users/change/mediaServer',data)
    		.then(function(response){
           console.log(response);
           return response;
        }).catch(function(error){
            return error;
        })

  console.log(response);
  return response;
}


export default function* changeMediaServerWorker(action){
  try{
    const response = yield changeMediaServer(action.payload);
    yield put({ type: CHANGE_MEDIA_SERVER_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: CHANGE_MEDIA_SERVER_FAILURE, error });
  }
}