import { put } from 'redux-saga/effects';
import { SAMPLE_SUCCESS, SAMPLE_FAILURE } from "../actionTypes/sample.js";

function sampleApi(data){
  const response = data;
  return response;
}

export default function* sampleApiWorker(action){
  try{
    const response = yield sampleApi(action.payload);
    yield put({ type: SAMPLE_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: SAMPLE_FAILURE, error });
  }
}
