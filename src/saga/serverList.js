import { put } from 'redux-saga/effects';
import axios from 'axios';
import { SERVER_LIST_SUCCESS, SERVER_LIST_FAILURE } from "../actionTypes/serverList.js";

function serverList(data){

	const response = axios.get('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000//users/server/data')
		.then(function(response){
      		console.log(response);
   	 		return response;
    	}).catch(function(error){
    		return error;
  		})

  console.log(response);
  return response;
 }

export default function* serverListWorker(action){
  try{
    const response = yield serverList(action.payload);
    yield put({ type: SERVER_LIST_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: SERVER_LIST_FAILURE, error });
  }
}
