import { DELETE_REQUEST } from '../actionTypes/delete.js'

const deleteRequest = data => ({
  type:DELETE_REQUEST ,
  payload: data,
});

export default deleteRequest;
