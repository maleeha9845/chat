import { USER_DATA_REQUEST } from '../actionTypes/userData.js'

const userDataRequest = data => ({
  type:USER_DATA_REQUEST ,
  payload: data,
});

export default userDataRequest;
