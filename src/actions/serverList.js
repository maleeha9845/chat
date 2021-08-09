import { SERVER_LIST_REQUEST } from '../actionTypes/serverList.js'

const ServerListRequest = data => ({
  type:SERVER_LIST_REQUEST ,
  payload: data,
});

export default ServerListRequest;
