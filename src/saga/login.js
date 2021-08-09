import { put } from 'redux-saga/effects';
import axios from 'axios';
import {LOGIN_SUCCESS , LOGIN_FAILURE} from "../actionTypes/login.js";


function login(data ){
  console.log(data);

  //register api........
 //  const response = axios.post('http://ec2-18-223-206-66.us-east-2.compute.amazonaws.com:4000/auth/register',data).then(function(response){
 //     var result={
 //           success:true,
 //           data : response.data,
 //         }
 //       return result;
 //        console.log(result);
 //    });
 //    console.log(response);
 // return response;

  const response = axios.post('http://ec2-3-140-238-190.us-east-2.compute.amazonaws.com:4000/auth/login',{
    "email":data.email,
    "password":data.password,
    }).then(function(response){
      console.log(response);
      var result={
        success:true,
        data : response.data,
      }
    return result;
    }).catch(function(error){
      var result={
        success : false,
        data : error.response,
      }
    return result;
  })
  console.log(response);
  return response;
}

export default function* loginWorker(action){
  const response = yield login(action.payload );
  if(response.success === true){
    yield put({ type:LOGIN_SUCCESS, payload : response.data})
  }else{
    yield put({ type: LOGIN_FAILURE, error:response.data });
  }
}
