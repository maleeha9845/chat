import { USERS_REQUEST } from '../actionTypes/users.js'

const userRequest = data => ({
  type:USERS_REQUEST ,
  payload: data,
});

export default userRequest;
