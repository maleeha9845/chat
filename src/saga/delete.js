import { put } from 'redux-saga/effects';
import axios from 'axios';
import {DELETE_SUCCESS , DELETE_FAILURE} from "../actionTypes/delete.js";


function deleteUser(data ){
	console.log(data);
	
	// const response = axios.post('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000//users/delete/'+data)
	// 	.then(function(response){
 //      		console.log(response);
 //      var result={
 //        success:true,
 //        data : response.data,
 //      }
 //    return result;
 //    }).catch(function(error){
 //      var result={
 //        success : false,
 //        data : error.response,
 //      }
 //    return result;
 //  })
 //  console.log(response);
 //  return response;
}

export default function* deleteUserWorker(action){
  const response = yield deleteUser(action.payload );
  if(response.success === true){
    yield put({ type:DELETE_SUCCESS, payload : response.data})
  }else{
    yield put({ type: DELETE_FAILURE, error:response.data });
  }
}
