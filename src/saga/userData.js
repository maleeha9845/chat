import { put } from 'redux-saga/effects';
import { USER_DATA_SUCCESS ,  USER_DATA_FAILURE } from "../actionTypes/userData.js";
import axios from 'axios';

function userData(data){
	console.log(data);
  const response = axios.get('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000/users/data', {params :{"id" : data.id}})
		.then(function(response){
      		console.log(response);
   	 		return response;
    	}).catch(function(error){
    		return error;
  		})

  console.log(response);
  return response;
}

export default function* userDataWorker(action){
  try{
    const response = yield userData(action.payload);
    yield put({ type: USER_DATA_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: USER_DATA_FAILURE, error });
  }
}
