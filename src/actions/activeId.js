import { ACTIVE_ID_REQUEST } from '../actionTypes/activeId.js'

const ActiveIdRequest = data => ({
  type:ACTIVE_ID_REQUEST,
  payload: data,
});

export default ActiveIdRequest;
