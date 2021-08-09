import { SAMPLE_REQUEST } from '../actionTypes/sample.js'

const sampleRequest = data => ({
  type:SAMPLE_REQUEST ,
  payload: data,
});

export default sampleRequest;
