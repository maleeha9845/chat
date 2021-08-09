import { CHANGE_MEDIA_SERVER_REQUEST } from '../actionTypes/changeMediaServer.js'

const changeMediaServerRequest = data => ({
  type:CHANGE_MEDIA_SERVER_REQUEST ,
  payload: data,
});

export default changeMediaServerRequest;
